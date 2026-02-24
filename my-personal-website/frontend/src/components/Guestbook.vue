<template>
  <div class="guestbook-section">
    <div class="magic-portal">
      <span class="portal-left">👠</span>
      <span class="portal-right">🎃</span>
    </div>
    
    <div class="guestbook-header">
      <h2>✧ The Royal Guestbook ✧</h2>
      <p class="subtitle">Leave a message in Cinderella's granddaughter's guestbook!</p>
      <p class="fairy-note">"Every message is like a fairy tale come true!" - Rose</p>
    </div>
    
    <form @submit.prevent="submitEntry" class="guestbook-form">
      <div class="magic-circle">
        <div class="form-row">
          <div class="form-group">
            <label for="name">
              <span class="label-icon">👑</span>
              Your Name *
            </label>
            <input 
              type="text" 
              id="name" 
              v-model="formData.name" 
              required
              placeholder="e.g., Fairy Tale Friend"
              class="magic-input"
            >
          </div>
          
          <div class="form-group">
            <label for="email">
              <span class="label-icon">💌</span>
              Email (optional)
            </label>
            <input 
              type="email" 
              id="email" 
              v-model="formData.email"
              placeholder="your@story.com"
              class="magic-input"
            >
          </div>
        </div>
        
        <div class="form-group">
          <label for="message">
            <span class="label-icon">📖</span>
            Your Fairy Tale Message *
          </label>
          <textarea 
            id="message" 
            v-model="formData.message" 
            required
            rows="4"
            placeholder="Write your magical message..."
            class="magic-textarea"
          ></textarea>
        </div>
        
        <div class="pumpkin-decoration">
          <span v-for="n in 3" :key="n" class="mini-pumpkin">🎃</span>
        </div>
      </div>
      
      <div v-if="error" class="error-message">
        <span class="error-icon">😢</span>
        {{ error }}
      </div>
      <div v-if="success" class="success-message">
        <span class="success-icon">✨</span>
        {{ success }}
        <span class="success-icon">✨</span>
      </div>
      
      <button type="submit" class="btn magic-btn" :disabled="loading">
        <span v-if="loading">✨ Casting Spell... ✨</span>
        <span v-else>👠 Send Message 👠</span>
      </button>
    </form>
    
    <div class="entries-container">
      <div class="entries-header">
        <h3>✧ Fairy Tale Messages ✧</h3>
        <div class="magical-counter">
          <span class="counter-icon">📚</span>
          <span class="counter-number">{{ entries.length }} Stories</span>
        </div>
      </div>
      
      <!-- Loading state -->
      <div v-if="entriesLoading" class="loading-state">
        <div class="magic-spell">
          <span class="spell-orb">✨</span>
          <span class="spell-orb">🎃</span>
          <span class="spell-orb">👠</span>
        </div>
        <p>Summoning messages from FairyTale Land...</p>
      </div>
      
      <!-- Empty state -->
      <div v-else-if="entries.length === 0" class="no-entries">
        <div class="empty-illustration">
          <span class="empty-emoji">📖</span>
          <span class="empty-emoji">✨</span>
        </div>
        <p>The guestbook is empty... Be the first to write your fairy tale!</p>
        <p class="empty-sub">(Grandma Cinderella would love to read your message!)</p>
      </div>
      
      <!-- Entries list -->
      <transition-group name="fairy-tale" tag="div" class="entries-list">
        <GuestbookEntry 
          v-for="entry in entries" 
          :key="entry.id" 
          :entry="entry"
        />
      </transition-group>
    </div>
    
    <!-- Fairy tale book decoration -->
    <div class="fairy-book">
      <span class="book">📘</span>
      <span class="quill">✍️</span>
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
        this.error = 'Failed to summon guestbook entries'
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
        
        this.success = '✨ Message added to the fairy tale book! ✨'
        
        setTimeout(() => {
          this.success = null
        }, 3000)
      } catch (err) {
        this.error = err.response?.data?.message || 'Failed to add your story'
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
  position: relative;
}

.magic-portal {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  font-size: 30px;
  opacity: 0.3;
  pointer-events: none;
}

.portal-left {
  animation: portalFloat 4s ease infinite;
}

.portal-right {
  animation: portalFloat 4s ease infinite reverse;
}

@keyframes portalFloat {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(5deg); }
}

.guestbook-header {
  text-align: center;
  margin-bottom: 30px;
}

.subtitle {
  color: var(--magic-purple);
  font-size: 18px;
  margin-bottom: 10px;
}

.fairy-note {
  color: var(--pumpkin-orange);
  font-style: italic;
  font-size: 16px;
  background: rgba(255, 182, 193, 0.2);
  display: inline-block;
  padding: 8px 20px;
  border-radius: 50px;
  border: 1px dashed var(--rose-pink);
}

.guestbook-form {
  max-width: 700px;
  margin: 0 auto 40px;
  position: relative;
}

.magic-circle {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 240, 245, 0.9));
  padding: 40px;
  border-radius: 60px;
  border: 4px solid var(--rose-pink);
  box-shadow: 
    0 10px 0 var(--pumpkin-orange),
    inset 0 0 30px rgba(255, 215, 0, 0.2);
  position: relative;
  overflow: hidden;
}

.magic-circle::before {
  content: "👠";
  position: absolute;
  top: -20px;
  left: -20px;
  font-size: 80px;
  opacity: 0.1;
  transform: rotate(-15deg);
}

.magic-circle::after {
  content: "🎃";
  position: absolute;
  bottom: -20px;
  right: -20px;
  font-size: 80px;
  opacity: 0.1;
  transform: rotate(15deg);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
}

.label-icon {
  margin-right: 5px;
  font-size: 18px;
}

.magic-input, .magic-textarea {
  width: 100%;
  padding: 15px 20px;
  border: 3px solid var(--rose-pink);
  border-radius: 50px;
  font-size: 16px;
  transition: all 0.3s ease;
  background: white;
}

.magic-textarea {
  border-radius: 30px;
  resize: vertical;
}

.magic-input:focus, .magic-textarea:focus {
  outline: none;
  border-color: var(--pumpkin-orange);
  box-shadow: 0 0 20px rgba(255, 140, 66, 0.3);
  transform: scale(1.02);
}

.pumpkin-decoration {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.mini-pumpkin {
  font-size: 30px;
  animation: pumpkinBob 2s ease infinite;
}

.mini-pumpkin:nth-child(2) {
  animation-delay: 0.3s;
}

.mini-pumpkin:nth-child(3) {
  animation-delay: 0.6s;
}

@keyframes pumpkinBob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

.magic-btn {
  width: 100%;
  margin-top: 20px;
  font-size: 18px;
  padding: 15px;
  background: linear-gradient(135deg, var(--rose-pink), var(--pumpkin-orange));
}

.entries-container {
  margin-top: 40px;
}

.entries-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 10px;
  padding: 0 10px;
}

.magical-counter {
  background: var(--rose-pink);
  padding: 8px 20px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  gap: 8px;
  border: 2px solid var(--fairy-gold);
  color: white;
  font-weight: bold;
}

.counter-icon {
  font-size: 20px;
}

.loading-state {
  text-align: center;
  padding: 60px;
  background: white;
  border-radius: 30px;
  border: 3px dashed var(--rose-pink);
}

.magic-spell {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;
}

.spell-orb {
  font-size: 40px;
  animation: spellOrb 1.5s ease infinite;
}

.spell-orb:nth-child(2) {
  animation-delay: 0.3s;
}

.spell-orb:nth-child(3) {
  animation-delay: 0.6s;
}

@keyframes spellOrb {
  0%, 100% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.3); opacity: 1; }
}

.no-entries {
  text-align: center;
  padding: 60px;
  background: white;
  border-radius: 30px;
  border: 3px dashed var(--pumpkin-orange);
}

.empty-illustration {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
}

.empty-emoji {
  font-size: 60px;
  animation: float 3s ease infinite;
}

.empty-emoji:nth-child(2) {
  animation-delay: 0.5s;
}

.empty-sub {
  color: var(--pumpkin-orange);
  margin-top: 10px;
  font-style: italic;
}

.fairy-book {
  position: absolute;
  bottom: 20px;
  left: 20px;
  display: flex;
  gap: 5px;
  opacity: 0.3;
  font-size: 40px;
  animation: bookFloat 5s ease infinite;
}

@keyframes bookFloat {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(-10px); }
}

.fairy-tale-enter-active,
.fairy-tale-leave-active {
  transition: all 0.5s ease;
}

.fairy-tale-enter-from {
  opacity: 0;
  transform: translateY(30px) scale(0.8);
}

.fairy-tale-leave-to {
  opacity: 0;
  transform: translateY(-30px) scale(0.8);
}

@media (max-width: 768px) {
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .magic-circle {
    padding: 25px;
  }
  
  .magic-portal {
    display: none;
  }
  
  .fairy-book {
    display: none;
  }
}
</style>