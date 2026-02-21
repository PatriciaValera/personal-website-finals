<template>
  <div class="aorun-guestbook">
    <div class="guestbook-header">
      <h2>🌀 DRAGON QUEEN'S GUESTBOOK 🌀</h2>
      <p class="subtitle">Leave a message... if you dare 💜</p>
    </div>
    
    <form @submit.prevent="submitEntry" class="guestbook-form">
      <div class="form-row">
        <div class="form-group">
          <label for="name">
            <span class="label-icon">💜</span>
            Your Name *
          </label>
          <input 
            type="text" 
            id="name" 
            v-model="formData.name" 
            required
            placeholder="e.g., Ao Bing, Ne Zha, etc."
          >
        </div>
        
        <div class="form-group">
          <label for="email">
            <span class="label-icon">🌀</span>
            Email (optional)
          </label>
          <input 
            type="email" 
            id="email" 
            v-model="formData.email"
            placeholder="dragon@westsea.palace"
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
          placeholder="Write something... perhaps we can make a deal? 〜"
        ></textarea>
      </div>
      
      <div v-if="error" class="error-message">
        <span class="error-icon">⚠️</span>
        {{ error }}
      </div>
      <div v-if="success" class="success-message">
        <span class="success-icon">✨</span>
        {{ success }}
        <span class="success-icon">✨</span>
      </div>
      
      <button type="submit" class="btn" :disabled="loading">
        <span v-if="loading">🌀 Opening Portal... 🌀</span>
        <span v-else>💜 Send Message with Sky-Splitting Claw 💜</span>
      </button>
    </form>
    
    <div class="entries-container">
      <div class="entries-header">
        <h3>🌀 Recent Messages from All Dimensions 🌀</h3>
        <span class="entry-count">{{ entries.length }} portals opened</span>
      </div>
      
      <div v-if="entriesLoading" class="loading-state">
        <div class="loading-spinner">🌀</div>
        <p>Summoning messages through dimensional portals...</p>
      </div>
      
      <div v-else-if="entries.length === 0" class="no-entries">
        <div class="empty-illustration">📜</div>
        <p>No messages yet... Be the first to make a deal!</p>
        <p class="empty-sub">(I don't bite... often 💜)</p>
      </div>
      
      <transition-group name="entries" tag="div" class="entries-list">
        <AoRunGuestbookEntry 
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
import AoRunGuestbookEntry from './AoRunGuestbookEntry.vue'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

export default {
  name: 'AoRunGuestbook',
  components: {
    AoRunGuestbookEntry
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
        
        this.success = 'Message sent through a dimensional portal! ✨'
        
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
.aorun-guestbook {
  padding: 20px 0;
  color: #e6d9ff;
}

.guestbook-header {
  text-align: center;
  margin-bottom: 30px;
}

.guestbook-header h2 {
  color: #e6d9ff;
  font-size: 24px;
  margin-bottom: 5px;
  font-weight: 700;
  letter-spacing: 1px;
  text-shadow: 0 0 10px #9370db;
}

.subtitle {
  color: #b8a9d4;
  font-size: 14px;
  font-style: italic;
}

.guestbook-form {
  max-width: 700px;
  margin: 0 auto 40px;
  background: #2d1b4a;
  padding: 30px;
  border-radius: 20px;
  border: 2px solid #9370db;
  box-shadow: 0 0 20px rgba(147, 112, 219, 0.3);
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
  color: #e6d9ff;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.5px;
}

.label-icon {
  margin-right: 5px;
  color: #b8a9d4;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px 15px;
  background: #1a1025;
  border: 2px solid #4a2b6e;
  border-radius: 12px;
  font-size: 14px;
  color: #e6d9ff;
  transition: all 0.3s ease;
  font-family: 'Poppins', sans-serif;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #9370db;
  background: #2d1b4a;
  box-shadow: 0 0 15px rgba(147, 112, 219, 0.3);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: #666;
  font-style: italic;
}

.error-message {
  color: #ff6b6b;
  background: rgba(255, 107, 107, 0.1);
  border: 1px solid #ff6b6b;
  border-radius: 10px;
  padding: 12px;
  margin: 15px 0;
  text-align: center;
  font-size: 14px;
}

.success-message {
  color: #b8a9d4;
  background: rgba(147, 112, 219, 0.2);
  border: 1px solid #9370db;
  border-radius: 10px;
  padding: 12px;
  margin: 15px 0;
  text-align: center;
  font-size: 14px;
}

.btn {
  background: linear-gradient(135deg, #4a2b6e, #2d1b4a);
  color: #e6d9ff;
  border: none;
  padding: 14px 30px;
  border-radius: 50px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: 2px solid #9370db;
  width: 100%;
  transition: all 0.3s ease;
}

.btn:hover {
  background: linear-gradient(135deg, #9370db, #4a2b6e);
  transform: translateY(-2px);
  box-shadow: 0 0 20px #9370db;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.loading-state {
  text-align: center;
  padding: 40px;
  background: #2d1b4a;
  border-radius: 20px;
  border: 2px dashed #9370db;
}

.loading-spinner {
  font-size: 48px;
  animation: spin 2s linear infinite;
  color: #b8a9d4;
  margin-bottom: 15px;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.no-entries {
  text-align: center;
  padding: 50px;
  background: #2d1b4a;
  border-radius: 20px;
  border: 2px dashed #9370db;
}

.empty-illustration {
  font-size: 64px;
  margin-bottom: 20px;
  opacity: 0.7;
}

.empty-sub {
  font-size: 12px;
  color: #666;
  margin-top: 10px;
  font-style: italic;
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
  color: #e6d9ff;
  font-size: 18px;
  font-weight: 600;
}

.entry-count {
  background: #4a2b6e;
  color: #e6d9ff;
  padding: 5px 15px;
  border-radius: 50px;
  font-size: 12px;
  font-weight: 600;
  border: 1px solid #9370db;
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

/* Responsive Design */
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
  
  .btn {
    font-size: 14px;
    padding: 12px 20px;
  }
}

@media (max-width: 480px) {
  .guestbook-form {
    padding: 15px;
  }
  
  .entries-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .empty-illustration {
    font-size: 48px;
  }
  
  .loading-spinner {
    font-size: 36px;
  }
}
</style>