<template>
  <!-- Background skull decorations -->
  <div class="skull-bg"></div>
  <div class="skull-decoration">
    <span>☠️</span>
    <span>☠️</span>
    <span>☠️</span>
    <span>☠️</span>
    <span>☠️</span>
  </div>

  <div class="container">
    <!-- Header -->
    <div class="header">
      <h1>My Profile & Guestbook</h1>
      <p class="header-subtitle">
        Leave a message for me! <span class="emoji">❤️</span>
      </p>
    </div>

    <!-- Divider with skull -->
    <div class="divider">
      <span class="divider-line"></span>
      <span class="divider-emoji">☠️</span>
      <span class="divider-line"></span>
    </div>

    <!-- Profile Section -->
    <div class="profile-card">
      <div class="profile-header">
        <div class="profile-avatar">
          <img src="https://i.pravatar.cc/300?img=5" alt="Kuromi Profile">
        </div>
        <div class="profile-info">
          <h2>Kuromi Chan</h2>
          <div class="profile-bio">
            <p>❤️ 悪い子ちゃん (Bad Girl) but actually super sweet! ❤️</p>
            <p>I love coding, cute things, and making new friends!</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Guestbook Section -->
    <div class="guestbook-section">
      <div class="guestbook-header">
        <h2>SIGN THE GUESTBOOK</h2>
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
            {{ loading ? 'SIGNING... ☠️' : 'SIGN GUESTBOOK ☠️' }}
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
          <p>Loading messages... ☠️</p>
        </div>

        <div v-else-if="entries.length === 0" class="empty-state">
          <p>No messages yet! Be the first to sign! ☠️❤️</p>
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
        
        this.success = 'Message added successfully! ☠️❤️'
        
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
  text-shadow: 0 0 15px var(--glow-pink);
}

.emoji {
  font-size: 28px;
  margin: 0 5px;
  filter: drop-shadow(0 0 10px var(--kuromi-hot-pink));
}

.button-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

@media (max-width: 768px) {
  .header-subtitle {
    font-size: 20px;
  }
}
</style>