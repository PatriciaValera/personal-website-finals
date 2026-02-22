<template>
  <div class="container">
    <!-- Header with emojis -->
    <div class="header">
      <h1>My Profile & Guestbook</h1>
      <p class="header-subtitle">
        Leave a message for me! <span class="emoji">🎁❤️</span>
      </p>
    </div>

    <!-- Profile Section -->
    <div class="profile-card">
      <div class="profile-header">
        <div class="profile-avatar">
          <img src="https://i.pravatar.cc/300?img=5" alt="Profile Picture">
        </div>
        <div class="profile-info">
          <h2>Kuromi Chan</h2>
          <p class="profile-title">✨ Professional Daydreamer ✨</p>
          <div class="profile-bio">
            <p>♡ 悪い子ちゃん (Bad Girl) but actually super sweet! ♡</p>
            <p>I love coding, cute things, and making new friends!</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Divider with emojis -->
    <div class="divider">
      <span class="divider-line"></span>
      <span class="divider-emoji">🎀</span>
      <span class="divider-line"></span>
    </div>

    <!-- Guestbook Section -->
    <div class="guestbook-section">
      <div class="guestbook-header">
        <h2>SIGN THE GUESTBOOK</h2>
        <p class="subtitle">
          <span>🎁</span> Leave your mark! <span>❤️</span>
        </p>
      </div>

      <!-- Guestbook Form -->
      <form @submit.prevent="submitEntry" class="guestbook-form">
        <div class="form-group">
          <label>YOUR NAME:</label>
          <input 
            type="text" 
            v-model="formData.name" 
            placeholder="Enter your name"
            required
          >
        </div>

        <div class="form-group">
          <label>YOUR MESSAGE:</label>
          <textarea 
            v-model="formData.message" 
            placeholder="Write your message here..."
            rows="4"
            required
          ></textarea>
        </div>

        <div v-if="error" class="error-message">{{ error }}</div>
        <div v-if="success" class="success-message">{{ success }}</div>

        <div class="button-container">
          <button type="submit" class="btn" :disabled="loading">
            {{ loading ? 'SIGNING...' : 'SIGN GUESTBOOK' }}
          </button>
        </div>
      </form>

      <!-- Guestbook Entries -->
      <div class="entries-container">
        <div class="entries-title">
          <h3>Recent Messages</h3>
          <span class="entry-count">{{ entries.length }}</span>
        </div>

        <div v-if="entriesLoading" class="loading-state">
          <p>Loading messages... 🎀</p>
        </div>

        <div v-else-if="entries.length === 0" class="empty-state">
          <p>No messages yet! Be the first to sign! 🎁</p>
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
  </div>
</template>

<script>
import axios from 'axios'
import GuestbookEntry from './components/GuestbookEntry.vue'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

export default {
  name: 'App',
  components: {
    GuestbookEntry
  },
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
        
        this.formData = {
          name: '',
          message: ''
        }
        
        this.success = 'Message added successfully! 🎁❤️'
        
        setTimeout(() => {
          this.success = null
        }, 3000)
      } catch (err) {
        this.error = 'Failed to submit entry. Please try again!'
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
.header {
  text-align: center;
  margin-bottom: 30px;
}

.header-subtitle {
  font-size: 24px;
  color: var(--kuromi-hot-pink);
  margin-top: 10px;
}

.emoji {
  font-size: 28px;
  margin: 0 5px;
}

.divider {
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 30px 0;
}

.divider-line {
  flex: 1;
  height: 3px;
  background: linear-gradient(90deg, transparent, var(--kuromi-hot-pink), var(--kuromi-lavender), transparent);
}

.divider-emoji {
  font-size: 30px;
  color: var(--kuromi-hot-pink);
  animation: bounce 2s ease infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

.button-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.loading-state, .empty-state {
  text-align: center;
  padding: 40px;
  background: var(--kuromi-off-white);
  border-radius: 30px;
  border: 3px dashed var(--kuromi-lavender);
  color: var(--text-light);
  font-size: 18px;
}

@media (max-width: 768px) {
  .header-subtitle {
    font-size: 20px;
  }
  
  .divider-emoji {
    font-size: 24px;
  }
}
</style>