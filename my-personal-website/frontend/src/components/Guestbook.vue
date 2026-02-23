<template>
  <div class="guestbook-section">
    <div class="guestbook-header">
      <h2>✧ Riri's Mischief Log ✧</h2>
      <p class="subtitle">Dare to Leave Your Scribble~ ♡</p>
    </div>
    
    <form @submit.prevent="submitEntry" class="guestbook-form">
      <div class="form-row">
        <div class="form-group">
          <label for="name">
            <span class="label-icon">☠</span>
            Your name, now! *
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
            Email
          </label>
          <input 
            type="email" 
            id="email" 
            v-model="formData.email"
            placeholder="kuromi@cute.com"
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
          placeholder="Write something adorable here... but make it wicked too"
        ></textarea>
      </div>
      
      <div v-if="error" class="error-message">
        <span class="error-icon">⚠️</span>
        {{ error }}
      </div>
      
      <button type="submit" class="btn" :disabled="loading">
        <span v-if="loading">✧ Brewing Chaos... ✧</span>
        <span v-else>☠ Seal Your Chaos ✨</span>
      </button>
      
      <div v-if="success" class="success-message">
        <span class="success-icon">🎀</span>
        {{ success }}
        <span class="success-icon">🎀</span>
      </div>
    </form>
    
    <div class="entries-container">
      <div class="entries-header">
        <h3>✧ Mischief Messages ✧</h3>
        <span class="entry-count">{{ entries.length }} scribbles</span>
      </div>
      
      <div v-if="entriesLoading" class="loading-state">
        <div class="loading-spinner">☠</div>
        <p>Summoning spooky messages...</p>
      </div>
      
      <div v-else-if="entries.length === 0" class="no-entries">
        <div class="empty-illustration">📝</div>
        <p>No scribbles yet... be bold, be first!</p>
        <p class="empty-sub">(Don't be shy, leave your mark~)</p>
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
        
        this.success = 'Chaos sealed successfully! 🎉'
        
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
  margin-bottom: 40px;
}

.guestbook-header h2 {
  font-size: var(--font-xxl);
  background: linear-gradient(135deg, var(--kuromi-pink), var(--kuromi-purple));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 10px;
}

.subtitle {
  color: var(--kuromi-purple);
  font-size: var(--font-lg);
  font-style: italic;
  position: relative;
  display: inline-block;
}

.subtitle::before,
.subtitle::after {
  content: "☠";
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: var(--font-base);
  opacity: 0.5;
}

.subtitle::before {
  left: -30px;
}

.subtitle::after {
  right: -30px;
}

.guestbook-form {
  max-width: 800px;
  margin: 0 auto 50px;
  background: var(--kuromi-gray);
  padding: 40px;
  border-radius: 30px;
  border: 2px dashed var(--kuromi-pink);
  position: relative;
  box-shadow: 0 10px 0 var(--kuromi-dark-purple);
}

.guestbook-form::before {
  content: "☠";
  position: absolute;
  top: -20px;
  left: 30px;
  font-size: 40px;
  color: var(--kuromi-pink);
  opacity: 0.3;
  transform: rotate(-15deg);
}

.guestbook-form::after {
  content: "☠";
  position: absolute;
  bottom: -20px;
  right: 30px;
  font-size: 40px;
  color: var(--kuromi-purple);
  opacity: 0.3;
  transform: rotate(15deg);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
}

.form-group {
  margin-bottom: 25px;
}

.form-group label {
  display: block;
  margin-bottom: 10px;
  color: var(--kuromi-pink);
  font-weight: 600;
  text-transform: uppercase;
  font-size: var(--font-md);
  letter-spacing: 1px;
}

.label-icon {
  margin-right: 8px;
  color: var(--kuromi-purple);
  font-size: var(--font-lg);
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 15px 20px;
  background: var(--kuromi-black);
  border: 2px solid var(--kuromi-purple);
  border-radius: 25px;
  font-size: var(--font-base);
  color: var(--text-light);
  transition: all 0.3s ease;
  font-family: 'Poppins', sans-serif;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--kuromi-pink);
  box-shadow: 0 0 15px rgba(255, 158, 181, 0.3);
  background: var(--kuromi-light-gray);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: var(--text-muted);
  opacity: 0.5;
  font-size: var(--font-base);
  font-style: italic;
}

.btn {
  background: linear-gradient(135deg, var(--kuromi-pink), var(--kuromi-purple));
  color: var(--kuromi-black);
  border: none;
  padding: 18px 45px;
  border-radius: 50px;
  cursor: pointer;
  font-size: var(--font-lg);
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.3s ease;
  border: 2px solid var(--kuromi-white);
  box-shadow: 0 8px 0 var(--kuromi-dark-purple);
  position: relative;
  overflow: hidden;
  width: 100%;
  margin-top: 15px;
}

.btn::before {
  content: "☠";
  position: absolute;
  left: -30px;
  top: 50%;
  transform: translateY(-50%);
  font-size: var(--font-xl);
  opacity: 0;
  transition: 0.3s;
}

.btn::after {
  content: "☠";
  position: absolute;
  right: -30px;
  top: 50%;
  transform: translateY(-50%);
  font-size: var(--font-xl);
  opacity: 0;
  transition: 0.3s;
}

.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 11px 0 var(--kuromi-dark-purple);
}

.btn:hover::before {
  left: 20px;
  opacity: 0.5;
}

.btn:hover::after {
  right: 20px;
  opacity: 0.5;
}

.btn:active {
  transform: translateY(5px);
  box-shadow: 0 3px 0 var(--kuromi-dark-purple);
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
  box-shadow: 0 8px 0 var(--kuromi-dark-purple);
}

.btn:disabled:hover::before,
.btn:disabled:hover::after {
  display: none;
}

.error-message {
  color: #ff6b6b;
  background: rgba(255, 107, 107, 0.1);
  border: 1px solid #ff6b6b;
  border-radius: 15px;
  padding: 15px;
  margin: 15px 0;
  text-align: center;
  font-size: var(--font-base);
}

.success-message {
  color: #b28bff;
  background: rgba(178, 139, 255, 0.15);
  border: 2px solid #b28bff;
  border-radius: 15px;
  padding: 18px;
  margin-top: 20px;
  text-align: center;
  font-size: var(--font-lg);
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.success-icon {
  font-size: var(--font-xl);
  animation: bowBounce 1s ease infinite;
  display: inline-block;
}

@keyframes bowBounce {
  0%, 100% { transform: scale(1) rotate(0deg); }
  50% { transform: scale(1.2) rotate(5deg); }
}

.loading-state {
  text-align: center;
  padding: 50px;
}

.loading-spinner {
  font-size: 60px;
  animation: spin 2s linear infinite;
  color: var(--kuromi-pink);
  margin-bottom: 20px;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.loading-state p {
  font-size: var(--font-lg);
}

.no-entries {
  text-align: center;
  padding: 60px;
  background: var(--kuromi-gray);
  border-radius: 30px;
  border: 2px dashed var(--kuromi-purple);
  position: relative;
}

.no-entries::before {
  content: "☠";
  position: absolute;
  top: 15px;
  left: 15px;
  font-size: 50px;
  opacity: 0.1;
  color: var(--kuromi-pink);
}

.no-entries::after {
  content: "♡";
  position: absolute;
  bottom: 15px;
  right: 15px;
  font-size: 50px;
  opacity: 0.1;
  color: var(--kuromi-purple);
}

.empty-illustration {
  font-size: 80px;
  margin-bottom: 25px;
  opacity: 0.7;
  animation: float 3s ease infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.no-entries p {
  font-size: var(--font-lg);
  margin-bottom: 10px;
}

.empty-sub {
  font-size: var(--font-base);
  color: var(--text-muted);
  margin-top: 10px;
  font-style: italic;
}

.entries-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  flex-wrap: wrap;
  gap: 15px;
  padding: 0 10px;
}

.entries-header h3 {
  margin-bottom