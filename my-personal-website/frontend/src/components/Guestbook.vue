<template>
  <div class="guestbook-section">
    <div class="guestbook-header">
      <h2>⚔️ DEMON SLAYER GUESTBOOK ⚔️</h2>
      <p class="subtitle">Leave a message if you dare! (I might actually read it... maybe)</p>
    </div>
    
    <form @submit.prevent="submitEntry" class="guestbook-form">
      <div class="form-row">
        <div class="form-group">
          <label for="name">
            <span class="label-icon">👤</span>
            Your Name *
          </label>
          <input 
            type="text" 
            id="name" 
            v-model="formData.name" 
            required
            placeholder="e.g., Tanjiro Kamado"
          >
        </div>
        
        <div class="form-group">
          <label for="email">
            <span class="label-icon">📧</span>
            Email (optional)
          </label>
          <input 
            type="email" 
            id="email" 
            v-model="formData.email"
            placeholder="slayer@demon.com"
          >
        </div>
      </div>
      
      <div class="form-group">
        <label for="message">
          <span class="label-icon">💬</span>
          Your Message *
        </label>
        <textarea 
          id="message" 
          v-model="formData.message" 
          required
          rows="4"
          placeholder="Write your message... (compliments about my strength are welcome!)"
        ></textarea>
      </div>
      
      <div v-if="error" class="error-message">
        <span class="error-icon">⚠️</span>
        {{ error }}
      </div>
      <div v-if="success" class="success-message">
        <span class="success-icon">⚔️</span>
        {{ success }}
        <span class="success-icon">⚔️</span>
      </div>
      
      <button type="submit" class="btn" :disabled="loading">
        <span v-if="loading">⚔️ Summoning... ⚔️</span>
        <span v-else>🐗 Submit Message 🐗</span>
      </button>
    </form>
    
    <div class="entries-container">
      <div class="entries-header">
        <h3>⚡ Recent Messages ⚡</h3>
        <span class="entry-count">{{ entries.length }} Messages</span>
      </div>
      
      <div v-if="entriesLoading" class="loading-state">
        <div class="loading-spinner">⚔️</div>
        <p>Loading messages... (Like waiting for Inosuke to calm down)</p>
      </div>
      
      <div v-else-if="entries.length === 0" class="no-entries">
        <div class="empty-illustration">🐗</div>
        <p>No messages yet... Be the first to challenge me!</p>
        <p class="empty-sub">(But you'll probably lose)</p>
      </div>
      
      <transition-group name="entries" tag="div" class="entries-list">
        <GuestbookEntry 
          v-for="entry in entries" 
          :key="entry.id" 
          :entry="entry"
        />
      </transition-group>
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
        
        this.entries = [response.data, ...this.entries]
        
        this.formData = {
          name: '',
          email: '',
          message: ''
        }
        
        this.success = 'Message added! Inosuke snorted in approval! ⚔️'
        
        setTimeout(() => {
          this.success = null
        }, 3000)
      } catch (err) {
        this.error = err.response?.data?.message || 'Failed to submit entry'
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

.guestbook-header {
  text-align: center;
  margin-bottom: 30px;
}

.subtitle {
  color: var(--inosuke-beige);
  font-size: 16px;
  font-style: italic;
}

.guestbook-form {
  max-width: 700px;
  margin: 0 auto 40px;
  background: var(--inosuke-gray);
  padding: 30px;
  border-radius: 0 50px 0 50px;
  border: 3px solid var(--inosuke-blue);
  box-shadow: 8px 8px 0 var(--inosuke-dark-blue);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.label-icon {
  margin-right: 8px;
  color: var(--inosuke-beige);
}

.loading-state {
  text-align: center;
  padding: 40px;
}

.loading-spinner {
  font-size: 48px;
  animation: spin 1s ease infinite;
  color: var(--inosuke-blue);
  margin-bottom: 15px;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.no-entries {
  text-align: center;
  padding: 50px;
  background: var(--inosuke-gray);
  border-radius: 0 40px 0 40px;
  border: 3px dashed var(--inosuke-blue);
}

.empty-illustration {
  font-size: 64px;
  margin-bottom: 20px;
  animation: snort 2s ease infinite;
}

@keyframes snort {
  0%, 100% { transform: scale(1); }
  95% { transform: scale(1.1); }
  96% { transform: scale(0.9); }
}

.empty-sub {
  font-size: 14px;
  color: var(--text-muted);
  margin-top: 10px;
}

.entries-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 10px;
  background: var(--inosuke-gray);
  padding: 15px;
  border-radius: 0 20px 0 20px;
  border: 2px solid var(--inosuke-beige);
}

.entry-count {
  background: var(--inosuke-blue);
  color: var(--text-light);
  padding: 5px 20px;
  border-radius: 0 15px 0 15px;
  font-size: 14px;
  font-weight: bold;
  border: 1px solid var(--inosuke-beige);
}

.entries-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.entries-enter-active,
.entries-leave-active {
  transition: all 0.4s ease;
}

.entries-enter-from {
  opacity: 0;
  transform: translateX(50px) rotate(5deg);
}

.entries-leave-to {
  opacity: 0;
  transform: translateX(-50px) rotate(-5deg);
}

@media (max-width: 768px) {
  .form-row {
    grid-template-columns: 1fr;
    gap: 0;
  }
  
  .guestbook-form {
    padding: 20px;
  }
}
</style>