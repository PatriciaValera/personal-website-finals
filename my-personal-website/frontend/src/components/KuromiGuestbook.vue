<template>
  <div class="kuromi-guestbook">
    <div class="guestbook-header">
      <h2>✧ KUROMI'S PURPLE GUESTBOOK ✧</h2>
      <p class="subtitle">Leave a message for this bad girl! ☠</p>
    </div>
    
    <form @submit.prevent="submitEntry" class="guestbook-form">
      <div class="form-row">
        <div class="form-group">
          <label for="name">
            <span class="label-icon">☠</span>
            Your Name *
          </label>
          <input 
            type="text" 
            id="name" 
            v-model="formData.name" 
            required
            placeholder="e.g., Kuromi Fan"
          >
        </div>
        
        <div class="form-group">
          <label for="email">
            <span class="label-icon">♡</span>
            Email (optional)
          </label>
          <input 
            type="email" 
            id="email" 
            v-model="formData.email"
            placeholder="purple@cute.com"
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
          placeholder="Write something cute or spooky..."
        ></textarea>
      </div>
      
      <div v-if="error" class="error-message">{{ error }}</div>
      <div v-if="success" class="success-message">{{ success }}</div>
      
      <button type="submit" class="btn" :disabled="loading">
        <span v-if="loading">☠ Submitting... ☠</span>
        <span v-else>♡ Sign Purple Guestbook ♡</span>
      </button>
    </form>
    
    <div class="entries-container">
      <div class="entries-header">
        <h3>✧ Recent Purple Messages ✧</h3>
        <span class="entry-count">{{ entries.length }} messages</span>
      </div>
      
      <div v-if="entriesLoading" class="loading-state">
        <div class="loading-spinner">☠</div>
        <p>Loading spooky messages...</p>
      </div>
      
      <div v-else-if="entries.length === 0" class="no-entries">
        <div class="empty-illustration">📝</div>
        <p>No entries yet... Be the first to leave a message!</p>
        <p class="empty-sub">(Don't be shy~)</p>
      </div>
      
      <transition-group name="entries" tag="div" class="entries-list">
        <KuromiGuestbookEntry 
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
import KuromiGuestbookEntry from './KuromiGuestbookEntry.vue'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

export default {
  name: 'KuromiGuestbook',
  components: {
    KuromiGuestbookEntry
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
        
        this.success = 'Purple message added successfully! ♡'
        
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
.kuromi-guestbook {
  padding: 20px 0;
  color: #2d1b4a;
}

.guestbook-header {
  text-align: center;
  margin-bottom: 30px;
}

.guestbook-header h2 {
  color: #5f3dc3;
  font-size: 24px;
  margin-bottom: 5px;
  font-weight: 700;
}

.subtitle {
  color: #7c4dff;
  font-size: 14px;
  font-style: italic;
}

.guestbook-form {
  max-width: 700px;
  margin: 0 auto 40px;
  background: white;
  padding: 30px;
  border-radius: 20px;
  border: 2px solid #b28bff;
  box-shadow: 0 5px 15px rgba(178, 139, 255, 0.2);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  color: #5f3dc3;
  font-weight: 600;
  font-size: 14px;
}

.label-icon {
  margin-right: 5px;
  color: #7c4dff;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px 15px;
  background: #f5f0ff;
  border: 2px solid #b28bff;
  border-radius: 12px;
  font-size: 14px;
  color: #2d1b4a;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #7c4dff;
  background: white;
  box-shadow: 0 0 10px rgba(124, 77, 255, 0.2);
}

.error-message {
  color: #5f3dc3;
  background: #f5f0ff;
  border: 1px solid #b28bff;
  border-radius: 10px;
  padding: 10px;
  margin: 10px 0;
  text-align: center;
}

.success-message {
  color: #7c4dff;
  background: #f0e8ff;
  border: 1px solid #b28bff;
  border-radius: 10px;
  padding: 10px;
  margin: 10px 0;
  text-align: center;
}

.btn {
  background: linear-gradient(135deg, #b28bff, #7c4dff);
  color: white;
  border: none;
  padding: 14px 30px;
  border-radius: 50px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: 2px solid white;
  width: 100%;
  transition: all 0.3s ease;
}

.btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(178, 139, 255, 0.4);
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.loading-state {
  text-align: center;
  padding: 40px;
  background: #f5f0ff;
  border-radius: 20px;
  border: 2px dashed #b28bff;
}

.loading-spinner {
  font-size: 48px;
  animation: spin 2s linear infinite;
  color: #b28bff;
  margin-bottom: 15px;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.no-entries {
  text-align: center;
  padding: 50px;
  background: #f5f0ff;
  border-radius: 20px;
  border: 2px dashed #b28bff;
}

.empty-illustration {
  font-size: 64px;
  margin-bottom: 20px;
  opacity: 0.7;
}

.empty-sub {
  font-size: 12px;
  color: #7c4dff;
  margin-top: 10px;
}

.entries-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 10px;
}

.entries-header h3 {
  color: #5f3dc3;
  font-size: 18px;
  font-weight: 600;
}

.entry-count {
  background: #b28bff;
  color: white;
  padding: 5px 15px;
  border-radius: 50px;
  font-size: 12px;
  font-weight: 600;
}

.entries-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.entries-enter-active,
.entries-leave-active {
  transition: all 0.3s ease;
}

.entries-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.entries-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

@media (max-width: 768px) {
  .form-row {
    grid-template-columns: 1fr;
    gap: 0;
  }
  
  .guestbook-form {
    padding: 20px;
  }
  
  .guestbook-header h2 {
    font-size: 20px;
  }
}
</style>