<template>
  <div class="guestbook-section">
    <!-- Main header -->
    <div class="guestbook-header">
      <h2>♡ Riri's Mischief Log ♡</h2>
      <p class="subtitle">Dare to Leave Your Scribble?</p>
    </div>
    
    <!-- Form card -->
    <div class="guestbook-card">
      <div class="purple-bg"></div>
      <form @submit.prevent="submitEntry" class="guestbook-form">
        <div class="form-group">
          <label for="name">
            NAME <span class="required">*</span>
          </label>
          <input 
            type="text" 
            id="name" 
            v-model="formData.name" 
            required
            placeholder="Enter your name... I wanna know who dares to sign"
          >
        </div>
        
        <div class="form-group">
          <label for="email">
            EMAIL <span class="required">*</span>
          </label>
          <input 
            type="email" 
            id="email" 
            v-model="formData.email" 
            required
            placeholder="your@email.com"
          >
        </div>
        
        <div class="form-group">
          <label for="message">
            MESSAGE <span class="required">*</span>
          </label>
          <textarea 
            id="message" 
            v-model="formData.message" 
            required
            rows="4"
            placeholder="Write something adorable... but make it wicked too"
          ></textarea>
        </div>
        
        <div v-if="error" class="error-message">
          <span class="error-icon">⚠️</span>
          {{ error }}
        </div>
        
        <div class="button-container">
          <button type="submit" class="submit-btn" :disabled="loading" :class="{ 'loading-state': loading }">
            <span v-if="loading">
              <span class="btn-spinner">✧</span>
              Logging Chaos...
            </span>
            <span v-else>
              Submit Chaos
            </span>
          </button>
        </div>
        
        <div v-if="success" class="success-message">
          <span class="success-icon">✧</span>
          Chaos Submitted!
        </div>
      </form>
    </div>
    
    <!-- Messages section -->
    <div class="messages-container">
      <div class="messages-header">
        <h3>Latest Scribbles of Chaos</h3>
        <span class="message-count">({{ entries.length }})</span>
      </div>
      
      <div v-if="entriesLoading" class="loading-state">
        <div class="loading-spinner">✧</div>
        <p>Summoning Mischiefs...</p>
      </div>
      
      <div v-else-if="entries.length === 0" class="empty-state">
        <div class="empty-illustration">
          <span class="purple-star">✧</span>
          <span class="purple-star">✦</span>
          <span class="purple-star">✧</span>
        </div>
        <p class="empty-message">The realm is quiet... be the first to cause havoc!</p>
        <p class="empty-sub">(your message will appear here)</p>
      </div>
      
      <transition-group name="messages" tag="div" class="messages-list">
        <div v-for="entry in entries" :key="entry.id" class="message-card">
          <div class="message-header">
            <div class="message-author">
              <span class="author-avatar">✧</span>
              <strong class="author-name">{{ entry.name }}</strong>
            </div>
            <span class="message-date">{{ formatDate(entry.created_at) }}</span>
          </div>
          <div class="message-content">
            "{{ entry.message }}"
          </div>
          <div v-if="entry.email" class="message-footer">
            <span class="email-icon">📧</span>
            <span class="message-email">{{ entry.email }}</span>
          </div>
          <div class="message-sticker">
            <span>✦</span>
          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

export default {
  name: 'Guestbook',
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
        this.error = 'failed to load messages'
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
        
        this.success = 'Chaos Submitted!'
        
        setTimeout(() => {
          this.success = null
        }, 3000)
      } catch (err) {
        this.error = err.response?.data?.message || 'Failed to submit chaos'
      } finally {
        this.loading = false
      }
    },
    
    formatDate(dateString) {
      const date = new Date(dateString)
      const options = { 
        month: 'short', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }
      return date.toLocaleDateString('en-US', options)
    }
  }
}
</script>

<style scoped>
/* MAIN BROWSER SCROLLBAR - Always Purple */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(42, 26, 58, 0.3);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background-color: var(--purple-primary);
  border-radius: 10px;
  border: 2px solid rgba(42, 26, 58, 0.3);
  transition: background-color 0.3s ease;
}

::-webkit-scrollbar-thumb:hover {
  background-color: var(--purple-accent);
}

::-webkit-scrollbar-corner {
  background: transparent;
}

/* For Firefox - Main browser scrollbar */
* {
  scrollbar-width: thin;
  scrollbar-color: var(--purple-primary) rgba(42, 26, 58, 0.3);
}

/* INNER MESSAGES LIST SCROLLBAR - Invisible by default, appears on hover */
.messages-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-height: 500px;
  overflow-y: auto;
  padding-right: 10px;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
}

.messages-list::-webkit-scrollbar {
  width: 6px;
  background: transparent;
}

.messages-list::-webkit-scrollbar-track {
  background: transparent;
}

.messages-list::-webkit-scrollbar-thumb {
  background-color: transparent;
  border-radius: 20px;
  transition: background-color 0.3s ease;
}

.messages-list:hover::-webkit-scrollbar-thumb,
.messages-list:focus::-webkit-scrollbar-thumb {
  background-color: var(--purple-primary);
}

.messages-list::-webkit-scrollbar-thumb:hover {
  background-color: var(--purple-accent);
}

.guestbook-section {
  padding: 20px 0;
  max-width: 800px;
  margin: 0 auto;
}

.guestbook-header {
  text-align: center;
  margin-bottom: 25px;
}

.guestbook-header h2 {
  font-size: calc(var(--font-xxl) - 3px + 3px);
  color: var(--white-pure);
  margin-bottom: 5px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.guestbook-header h2::before,
.guestbook-header h2::after {
  display: none;
}

.subtitle {
  color: var(--white-pure);
  font-size: calc(var(--font-lg) - 3px + 3px);
  opacity: 0.9;
  text-shadow: 0 0 8px var(--purple-glow);
}

/* Guestbook Card with Purple Background */
.guestbook-card {
  position: relative;
  border-radius: 30px;
  overflow: hidden;
  margin-bottom: 40px;
  box-shadow: 0 10px 0 var(--purple-deep), 0 0 30px var(--purple-glow);
}

.purple-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, var(--purple-deep), var(--purple-dark), var(--purple-mist));
  background-size: 400% 400%;
  animation: gradientShift 10s ease infinite;
  opacity: 0.8;
  z-index: 0;
  pointer-events: none;
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.purple-bg::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 20% 30%, var(--purple-accent) 0%, transparent 20%),
    radial-gradient(circle at 80% 70%, var(--purple-light) 0%, transparent 25%);
  opacity: 0.2;
}

.guestbook-form {
  position: relative;
  z-index: 1;
  background: rgba(26, 10, 30, 0.7);
  backdrop-filter: blur(10px);
  padding: 30px;
  border: 2px solid var(--purple-primary);
  border-radius: 30px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  color: var(--white-pure);
  font-weight: 600;
  font-size: calc(var(--font-base) - 3px + 3px);
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: 0 0 5px var(--purple-glow);
}

.required {
  color: var(--purple-accent);
  margin-left: 2px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px 15px;
  background: rgba(0, 0, 0, 0.3);
  border: 2px solid var(--purple-primary);
  border-radius: 15px;
  font-size: calc(var(--font-base) - 3px + 3px);
  color: var(--white-pure);
  transition: all 0.3s ease;
  font-family: 'Poppins', sans-serif;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--purple-accent);
  box-shadow: 0 0 20px var(--purple-glow);
  background: rgba(42, 26, 58, 0.5);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: rgba(255, 255, 255, 0.5);
  opacity: 0.6;
  font-size: calc(var(--font-base) - 3px + 3px);
  text-transform: none;
}

/* Button Container - centers the button */
.button-container {
  display: flex;
  justify-content: center;
  margin-top: 25px;
}

.submit-btn {
  background: linear-gradient(135deg, var(--purple-primary), var(--purple-light));
  color: var(--white-pure);
  border: none;
  padding: 12px 30px;
  border-radius: 50px;
  cursor: pointer;
  font-size: calc(var(--font-lg) - 3px + 3px);
  font-weight: bold;
  transition: all 0.3s ease;
  border: 2px solid var(--purple-pastel);
  box-shadow: 0 5px 0 var(--purple-deep), 0 0 20px var(--purple-glow);
  min-width: 200px;
  max-width: 250px;
  width: auto;
  text-transform: none;
  letter-spacing: 0.5px;
  white-space: nowrap;
}

/* Loading state - wider for "Logging Chaos..." */
.submit-btn.loading-state {
  min-width: 220px;
  padding: 12px 25px;
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 7px 0 var(--purple-deep), 0 0 30px var(--purple-accent);
  background: linear-gradient(135deg, var(--purple-light), var(--purple-accent));
}

.submit-btn:active:not(:disabled) {
  transform: translateY(3px);
  box-shadow: 0 2px 0 var(--purple-deep);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-spinner {
  display: inline-block;
  animation: spin 1s linear infinite;
  margin-right: 8px;
  color: var(--white-pure);
  font-size: calc(var(--font-base) - 3px + 3px);
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.error-message {
  color: #ffb3b3;
  background: rgba(255, 179, 179, 0.1);
  border: 1px solid #ffb3b3;
  border-radius: 10px;
  padding: 10px;
  margin: 15px 0;
  text-align: center;
  backdrop-filter: blur(5px);
  font-size: calc(var(--font-base) - 3px + 3px);
}

/* Success message - transparent with purple outline */
.success-message {
  background: transparent;
  color: var(--white-pure);
  border: 2px dashed var(--purple-accent);
  border-radius: 50px;
  padding: 10px 30px;
  margin-top: 15px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  animation: slideUp 0.3s ease;
  font-size: calc(var(--font-lg) - 3px + 3px);
  font-weight: bold;
  text-transform: none;
  letter-spacing: 0.5px;
  min-width: 200px;
  max-width: 250px;
  width: fit-content;
  white-space: nowrap;
  margin-left: auto;
  margin-right: auto;
  box-shadow: none;
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
}

.success-message:hover {
  border-color: var(--purple-primary);
  border-style: solid;
  box-shadow: 0 0 15px var(--purple-glow);
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.success-icon {
  font-size: calc(var(--font-lg) - 3px + 3px);
  animation: bounce 1s ease infinite;
  color: var(--purple-accent);
}

@keyframes bounce {
  0%, 100% { transform: scale(1) rotate(0deg); }
  50% { transform: scale(1.2) rotate(5deg); }
}

/* Messages Section */
.messages-container {
  background: rgba(42, 26, 58, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 30px;
  padding: 25px;
  border: 2px solid var(--purple-primary);
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 0 var(--purple-deep);
}

.messages-container::before {
  content: "✧";
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 80px;
  opacity: 0.1;
  color: var(--purple-accent);
  transform: rotate(-10deg);
  pointer-events: none;
  text-shadow: 0 0 20px var(--purple-glow);
}

.messages-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px dashed var(--purple-primary);
}

.messages-header h3 {
  color: var(--white-pure);
  font-size: calc(var(--font-xl) - 3px + 3px);
  margin: 0;
  text-transform: none;
  text-shadow: 0 0 8px var(--purple-glow);
}

.message-count {
  color: var(--white-pure);
  font-size: calc(var(--font-lg) - 3px + 3px);
  font-weight: bold;
  opacity: 0.8;
}

.loading-state {
  text-align: center;
  padding: 40px;
}

.loading-state p {
  color: var(--white-pure);
  font-size: calc(var(--font-base) - 3px + 3px);
}

.loading-spinner {
  font-size: 48px;
  animation: spin 2s linear infinite;
  color: var(--purple-accent);
  margin-bottom: 15px;
  text-shadow: 0 0 20px var(--purple-glow);
}

.empty-state {
  text-align: center;
  padding: 50px 20px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  border: 2px dashed var(--purple-primary);
  backdrop-filter: blur(5px);
}

.empty-illustration {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
}

.purple-star {
  font-size: 48px;
  animation: float 3s ease infinite;
  color: var(--purple-accent);
  text-shadow: 0 0 20px var(--purple-glow);
}

.purple-star:nth-child(2) {
  animation-delay: 0.5s;
  color: var(--purple-light);
}

.purple-star:nth-child(3) {
  animation-delay: 1s;
  color: var(--purple-pastel);
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(5deg); }
}

.empty-message {
  color: var(--white-pure);
  font-size: calc(var(--font-lg) - 3px + 3px);
  font-weight: 600;
  margin-bottom: 8px;
  text-shadow: 0 0 8px var(--purple-glow);
}

.empty-sub {
  color: rgba(255, 255, 255, 0.7);
  font-size: calc(var(--font-sm) - 3px + 3px);
  font-style: italic;
}

.message-card {
  background: rgba(0, 0, 0, 0.3);
  border: 2px solid var(--purple-primary);
  border-radius: 20px;
  padding: 18px;
  position: relative;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
}

.message-card:hover {
  transform: translateX(5px);
  border-color: var(--purple-accent);
  box-shadow: 0 5px 0 var(--purple-deep), 0 0 20px var(--purple-glow);
}

.message-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  flex-wrap: wrap;
  gap: 8px;
}

.message-author {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(0, 0, 0, 0.3);
  padding: 5px 15px;
  border-radius: 50px;
  border: 1px solid var(--purple-primary);
}

.author-avatar {
  font-size: calc(var(--font-base) - 3px + 3px);
  color: var(--purple-accent);
}

.author-name {
  color: var(--white-pure);
  font-size: calc(var(--font-base) - 3px + 3px);
  font-weight: 600;
}

.message-date {
  color: rgba(255, 255, 255, 0.7);
  font-size: calc(var(--font-sm) - 3px + 3px);
  background: rgba(0, 0, 0, 0.3);
  padding: 5px 12px;
  border-radius: 50px;
  border: 1px solid var(--purple-soft);
}

.message-content {
  background: rgba(0, 0, 0, 0.2);
  padding: 15px;
  border-radius: 15px;
  margin: 10px 0;
  line-height: 1.6;
  color: var(--white-pure);
  font-style: italic;
  border-left: 3px solid var(--purple-accent);
  font-size: calc(var(--font-base) - 3px + 3px);
}

.message-footer {
  display: flex;
  align-items: center;
  gap: 8px;
  padding-top: 8px;
  border-top: 1px dashed var(--purple-primary);
  font-size: calc(var(--font-sm) - 3px + 3px);
  color: rgba(255, 255, 255, 0.7);
}

.email-icon {
  color: var(--purple-accent);
  font-size: calc(var(--font-base) - 3px + 3px);
}

.message-email {
  word-break: break-all;
  color: rgba(255, 255, 255, 0.7);
  font-size: calc(var(--font-sm) - 3px + 3px);
}

.message-sticker {
  position: absolute;
  bottom: 5px;
  right: 5px;
  opacity: 0.2;
  font-size: calc(var(--font-lg) - 3px + 3px);
  color: var(--purple-accent);
}

/* Message animations */
.messages-enter-active,
.messages-leave-active {
  transition: all 0.3s ease;
}

.messages-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.messages-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .guestbook-header h2 {
    font-size: calc(var(--font-xl) - 3px + 3px);
  }
  
  .subtitle {
    font-size: calc(var(--font-base) - 3px + 3px);
  }
  
  .guestbook-form {
    padding: 20px;
  }
  
  .submit-btn {
    font-size: calc(var(--font-base) - 3px + 3px);
    padding: 10px 25px;
    min-width: 180px;
  }
  
  .submit-btn.loading-state {
    min-width: 200px;
  }
  
  .success-message {
    font-size: calc(var(--font-base) - 3px + 3px);
    padding: 8px 25px;
    min-width: 180px;
    max-width: 220px;
  }
  
  .messages-container {
    padding: 20px;
  }
  
  .messages-header h3 {
    font-size: calc(var(--font-lg) - 3px + 3px);
  }
  
  .message-count {
    font-size: calc(var(--font-base) - 3px + 3px);
  }
  
  .empty-message {
    font-size: calc(var(--font-base) - 3px + 3px);
  }
  
  .message-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .message-author,
  .message-date {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .empty-illustration {
    flex-direction: column;
    gap: 10px;
  }
  
  .purple-star {
    font-size: 36px;
  }
  
  .message-card {
    padding: 15px;
  }
  
  .message-content {
    padding: 12px;
    font-size: calc(var(--font-sm) - 3px + 3px);
  }
  
  .submit-btn {
    min-width: 160px;
    padding: 8px 20px;
  }
  
  .submit-btn.loading-state {
    min-width: 180px;
  }
  
  .success-message {
    font-size: calc(var(--font-sm) - 3px + 3px);
    padding: 6px 20px;
    min-width: 160px;
    max-width: 180px;
  }
}
</style>