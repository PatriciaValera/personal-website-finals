<template>
  <div class="bloom-guestbook">
    <div class="guestbook-header">
      <h2>✧ MAGICAL GUESTBOOK ✧</h2>
      <p class="subtitle">Leave a message for the Fairy of the Dragon Flame!</p>
    </div>
    
    <form @submit.prevent="submitEntry" class="guestbook-form">
      <div class="form-row">
        <div class="form-group">
          <label for="name">
            <span class="label-icon">🔥</span>
            Your Name *
          </label>
          <input 
            type="text" 
            id="name" 
            v-model="formData.name" 
            required
            placeholder="e.g., Stella, Flora, etc."
          >
        </div>
        
        <div class="form-group">
          <label for="email">
            <span class="label-icon">✨</span>
            Email (optional)
          </label>
          <input 
            type="email" 
            id="email" 
            v-model="formData.email"
            placeholder="fairy@alfea.edu"
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
          placeholder="Write something magical... (Believix encouraged!)"
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
        <span v-if="loading">✧ Casting Spell... ✧</span>
        <span v-else>🔥 Send Message 🔥</span>
      </button>
    </form>
    
    <div class="entries-container">
      <div class="entries-header">
        <h3>✧ Recent Magical Messages ✧</h3>
        <span class="entry-count">{{ entries.length }} spells</span>
      </div>
      
      <div v-if="entriesLoading" class="loading-state">
        <div class="loading-spinner">✨</div>
        <p>Summoning messages from the Magic Dimension...</p>
      </div>
      
      <div v-else-if="entries.length === 0" class="no-entries">
        <div class="empty-illustration">📜</div>
        <p>No messages yet... Be the first to cast a message spell!</p>
        <p class="empty-sub">(Enchantix level messages welcome ✨)</p>
      </div>
      
      <transition-group name="entries" tag="div" class="entries-list">
        <BloomGuestbookEntry 
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
import BloomGuestbookEntry from './BloomGuestbookEntry.vue'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

export default {
  name: 'BloomGuestbook',
  components: {
    BloomGuestbookEntry
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
        
        this.success = 'Message sent with Enchantix power! ✨'
        
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
.bloom-guestbook {
  padding: 20px 0;
  color: #333;
}

.guestbook-header {
  text-align: center;
  margin-bottom: 30px;
}

.guestbook-header h2 {
  color: #ff4500;
  font-size: 24px;
  margin-bottom: 5px;
  font-weight: 700;
  letter-spacing: 1px;
}

.subtitle {
  color: #ff7b24;
  font-size: 14px;
  font-style: italic;
}

.guestbook-form {
  max-width: 700px;
  margin: 0 auto 40px;
  background: #fff4e6;
  padding: 30px;
  border-radius: 20px;
  border: 2px solid #ffaa33;
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
  color: #ff4500;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.5px;
}

.label-icon {
  margin-right: 5px;
  color: #ff7b24;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px 15px;
  background: white;
  border: 2px solid #ffaa33;
  border-radius: 12px;
  font-size: 14px;
  color: #333;
  transition: all 0.3s ease;
  font-family: 'Poppins', sans-serif;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #ff4500;
  background: #fff9f0;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: #999;
  font-style: italic;
}

.error-message {
  color: #d32f2f;
  background: #ffebee;
  border: 1px solid #ffcdd2;
  border-radius: 10px;
  padding: 12px;
  margin: 15px 0;
  text-align: center;
  font-size: 14px;
}

.success-message {
  color: #2e7d32;
  background: #e8f5e9;
  border: 1px solid #a5d6a7;
  border-radius: 10px;
  padding: 12px;
  margin: 15px 0;
  text-align: center;
  font-size: 14px;
}

.btn {
  background: linear-gradient(135deg, #ff7b24, #ff4500);
  color: white;
  border: none;
  padding: 14px 30px;
  border-radius: 50px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: 2px solid #ffd700;
  width: 100%;
  transition: all 0.3s ease;
}

.btn:hover {
  background: linear-gradient(135deg, #ff4500, #ff7b24);
  transform: translateY(-2px);
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}

.loading-state {
  text-align: center;
  padding: 40px;
  background: #fff4e6;
  border-radius: 20px;
  border: 2px dashed #ffaa33;
}

.loading-spinner {
  font-size: 48px;
  animation: spin 2s linear infinite;
  color: #ff7b24;
  margin-bottom: 15px;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.no-entries {
  text-align: center;
  padding: 50px;
  background: #fff4e6;
  border-radius: 20px;
  border: 2px dashed #ffaa33;
}

.empty-illustration {
  font-size: 64px;
  margin-bottom: 20px;
  opacity: 0.7;
}

.empty-sub {
  font-size: 12px;
  color: #999;
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
  color: #ff4500;
  font-size: 18px;
  font-weight: 600;
}

.entry-count {
  background: #ff7b24;
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