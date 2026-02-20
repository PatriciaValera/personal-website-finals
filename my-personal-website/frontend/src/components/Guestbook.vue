<template>
  <div class="guestbook-section">
    <h2>Guestbook</h2>
    <p class="subtitle">Leave a message in my guestbook!</p>
    
    <form @submit.prevent="submitEntry" class="guestbook-form">
      <div class="form-group">
        <label for="name">Name *</label>
        <input 
          type="text" 
          id="name" 
          v-model="formData.name" 
          required
          placeholder="Your name"
        >
      </div>
      
      <div class="form-group">
        <label for="email">Email (optional)</label>
        <input 
          type="email" 
          id="email" 
          v-model="formData.email"
          placeholder="your@email.com"
        >
      </div>
      
      <div class="form-group">
        <label for="message">Message *</label>
        <textarea 
          id="message" 
          v-model="formData.message" 
          required
          rows="4"
          placeholder="Your message..."
        ></textarea>
      </div>
      
      <div v-if="error" class="error-message">{{ error }}</div>
      <div v-if="success" class="success-message">{{ success }}</div>
      
      <button type="submit" class="btn" :disabled="loading">
        {{ loading ? 'Submitting...' : 'Submit Entry' }}
      </button>
    </form>
    
    <div class="entries-container">
      <h3>Recent Entries</h3>
      <div v-if="entriesLoading" class="loading">Loading entries...</div>
      <div v-else-if="entries.length === 0" class="no-entries">
        No entries yet. Be the first to leave a message!
      </div>
      <div v-else>
        <GuestbookEntry 
          v-for="entry in entries" 
          :key="entry.id" 
          :entry="entry"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import GuestbookEntry from './GuestbookEntry.vue'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

export default {
  name: 'Guestbook',
  components: {
    GuestbookEntry
  },
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      },
      entries: [],
      loading: false,
      entriesLoading: true,
      error: null,
      success: null
    }
  },
  mounted() {
    this.fetchEntries()
  },
  methods: {
    async fetchEntries() {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/guestbook`)
        this.entries = response.data
        this.error = null
      } catch (err) {
        this.error = 'Failed to load guestbook entries'
        console.error('Error fetching entries:', err)
      } finally {
        this.entriesLoading = false
      }
    },
    
    async submitEntry() {
      this.loading = true
      this.error = null
      this.success = null
      
      try {
        const response = await axios.post(`${API_BASE_URL}/api/guestbook`, this.formData)
        
        // Add new entry to the list
        this.entries = [response.data, ...this.entries]
        
        // Reset form
        this.formData = {
          name: '',
          email: '',
          message: ''
        }
        
        this.success = 'Entry submitted successfully!'
        
        // Clear success message after 3 seconds
        setTimeout(() => {
          this.success = null
        }, 3000)
      } catch (err) {
        this.error = err.response?.data?.message || 'Failed to submit entry'
        console.error('Error submitting entry:', err)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
.guestbook-section {
  padding: 20px 0;
}

.subtitle {
  color: #666;
  margin-bottom: 30px;
}

.guestbook-form {
  max-width: 600px;
  margin-bottom: 40px;
}

.loading, .no-entries {
  text-align: center;
  color: #666;
  padding: 20px;
}
</style>