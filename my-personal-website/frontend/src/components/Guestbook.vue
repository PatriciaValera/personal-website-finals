<template>
  <div class="guestbook-section">
    <form @submit.prevent="submitEntry" class="guestbook-form">
      <div class="form-group">
        <label for="name">your name:</label>
        <input 
          type="text" 
          id="name" 
          v-model="formData.name" 
          required
          placeholder="Enter your name"
        >
      </div>
      
      <div class="form-group">
        <label for="message">your message:</label>
        <textarea 
          id="message" 
          v-model="formData.message" 
          required
          rows="4"
          placeholder="Write your message here..."
        ></textarea>
      </div>
      
      <div v-if="error" class="error-message">{{ error }}</div>
      <div v-if="success" class="success-message">{{ success }}</div>
      
      <button type="submit" class="btn" :disabled="loading">
        {{ loading ? 'signing...' : 'sign guestbook' }}
      </button>
    </form>
    
    <div class="entries-container">
      <div class="entries-header">
        <h3>Messages ({{ entries.length }})</h3>
      </div>
      
      <div v-if="entriesLoading" class="loading-state">
        loading messages...
      </div>
      
      <div v-else-if="entries.length === 0" class="no-entries">
        <p>No messages yet. Be the first! 🍄</p>
      </div>
      
      <div v-else class="entries-list">
        <div v-for="entry in entries" :key="entry.id" class="guestbook-entry">
          <div class="entry-header">
            <strong>{{ entry.name }}</strong>
            <span class="entry-date">{{ formatDate(entry.created_at) }}</span>
          </div>
          <p class="entry-message">{{ entry.message }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { format } from 'date-fns'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

export default {
  name: 'Guestbook',
  data() {
    return {
      formData: {
        name: '',
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
      } catch (err) {
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
        this.entries = [response.data, ...this.entries]
        this.formData = { name: '', message: '' }
        this.success = 'Message added!'
        
        setTimeout(() => {
          this.success = null
        }, 3000)
      } catch (err) {
        this.error = 'Failed to submit entry'
      } finally {
        this.loading = false
      }
    },
    
    formatDate(dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    }
  }
}
</script>

<style scoped>
.guestbook-section {
  margin: 20px 0;
}

.guestbook-form {
  max-width: 500px;
  margin: 0 auto 40px;
}

.entry-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  color: var(--text-primary);
}

.entry-date {
  color: var(--text-secondary);
  font-size: 13px;
}

.entry-message {
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 15px;
}

.guestbook-entry {
  padding: 16px;
  border-bottom: 1px solid var(--border-color);
}

.guestbook-entry:last-child {
  border-bottom: none;
}
</style>