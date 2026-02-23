<template>
  <div class="app-container">
    <!-- Kuromi themed background elements -->
    <div class="kuromi-bg">
      <div class="floating-skull" v-for="n in 8" :key="n">☠</div>
      <div class="floating-heart" v-for="n in 8" :key="n">♡</div>
      <div class="floating-ribbon" v-for="n in 4" :key="n">🎀</div>
    </div>
    
    <main class="main-content">
      <!-- LEFT SECTION - Profile Cards -->
      <section class="left-section">
        <!-- Main Profile Card - Kuromi Style -->
        <div class="profile-card kuromi-card">
          <div class="card-ribbon"></div>
          <div class="card-content">
            <h1 class="greeting">Hi! I'm</h1>
            <h2 class="name">Sheila Nicole Cheng</h2>
            
            <p class="description">
              I work across coding, design, and project coordination creating solutions that are both functional and visually refined. Comfortable below the surface, effective above it
            </p>
            
            <div class="quote-bubble kuromi-quote">
              <span class="quote-mark-left">☠</span>
              "Debugging ideas before they become problems."
              <span class="quote-mark-right">☠</span>
            </div>
            
            <div class="button-group">
              <button class="action-btn resources">
                <span class="btn-skull">☠</span>
                Resources
              </button>
              <button class="action-btn cv">
                Explore my CV
                <span class="btn-heart">♡</span>
              </button>
            </div>
          </div>
          <div class="card-skull-deco">☠</div>
        </div>

        <!-- Skills Cards Stack - Kuromi Style -->
        <div class="skills-stack">
          <!-- First Row of Skills -->
          <div class="skills-row">
            <div class="skill-card kuromi-skill" v-for="skill in firstRowSkills" :key="skill">
              <span class="skill-icon">☠</span>
              {{ skill }}
            </div>
          </div>
          
          <!-- Second Row of Skills -->
          <div class="skills-row">
            <div class="skill-card kuromi-skill with-plus" v-for="skill in secondRowSkills" :key="skill">
              {{ skill }} <span class="plus-icon">♡</span>
            </div>
          </div>
          
          <!-- Third Row of Skills -->
          <div class="skills-row">
            <div class="skill-card kuromi-skill with-plus" v-for="skill in thirdRowSkills" :key="skill">
              {{ skill }} <span class="plus-icon">🎀</span>
            </div>
          </div>
        </div>

        <!-- Guestbook Entries - Kuromi Message Board -->
        <div class="guestbook-entries">
          <div class="entries-header-kuromi">
            <span class="header-skull">☠</span>
            <h3>Mischief Messages</h3>
            <span class="header-skull">☠</span>
          </div>
          
          <div v-for="entry in guestbookEntries" :key="entry.id" class="message-card kuromi-message">
            <div class="message-ribbon"></div>
            <div class="message-header">
              <div class="author-with-icon">
                <span class="author-icon">👤</span>
                <strong class="message-author">{{ entry.author }}</strong>
              </div>
              <span class="message-time">{{ entry.time }}</span>
            </div>
            <p class="message-text">"{{ entry.text }}"</p>
            <div class="message-skull">☠</div>
          </div>
        </div>
      </section>

      <!-- RIGHT SECTION - Guestbook Form (Kuromi Style) -->
      <section class="right-section">
        <div class="guestbook-container kuromi-guestbook">
          <div class="guestbook-header">
            <span class="header-deco left">☠</span>
            <h3 class="guestbook-title">Leave a thought. Watch it float.</h3>
            <span class="header-deco right">♡</span>
          </div>
          
          <form @submit.prevent="submitMessage" class="guestbook-form kuromi-form">
            <div class="form-group">
              <label class="kuromi-label">
                <span class="label-icon">☠</span>
                Your Name
              </label>
              <input 
                type="text" 
                v-model="formData.name" 
                placeholder="e.g., Kuromi Fan"
                required
              >
            </div>
            
            <div class="form-group">
              <label class="kuromi-label">
                <span class="label-icon">♡</span>
                Your Email
              </label>
              <input 
                type="email" 
                v-model="formData.email" 
                placeholder="kuromi@cute.com"
              >
            </div>
            
            <div class="form-group">
              <label class="kuromi-label">
                <span class="label-icon">💬</span>
                Your Message
              </label>
              <textarea 
                v-model="formData.message" 
                placeholder="Write something adorable here... but make it wicked too"
                rows="4"
                required
              ></textarea>
            </div>
            
            <button type="submit" class="send-btn kuromi-send-btn" :disabled="sending">
              <span class="btn-skull-left">☠</span>
              {{ sending ? 'Brewing Chaos...' : 'Seal Your Chaos' }}
              <span class="btn-skull-right">☠</span>
            </button>
          </form>
          
          <div v-if="successMessage" class="success-toast kuromi-success">
            <span class="bow-icon">🎀</span>
            {{ successMessage }}
            <span class="bow-icon">🎀</span>
          </div>
          
          <!-- Kuromi themed footer -->
          <div class="nav-footer kuromi-footer">
            <a href="#" class="to-top">
              <span class="top-skull">☠</span>
              To the Top
              <span class="top-skull">☠</span>
            </a>
            <div class="footer-divider">
              <span class="divider-skull">☠</span>
              <span class="divider-heart">♡</span>
              <span class="divider-skull">☠</span>
            </div>
            <p class="credit">Designed & Developed by Sheila Nicole Cheng</p>
            <p class="disclaimer">No kuromi were harmed in the making of this website.</p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

export default {
  name: 'App',
  setup() {
    // Skills data (preserved)
    const firstRowSkills = ['Web Dev', 'UI/UX', 'Data Analysis', 'System Design', 'Visual Design', 'Problem Solving']
    const secondRowSkills = ['Web Development +', 'UI / UX Design +']
    const thirdRowSkills = ['Python Applications +', 'Illustrations +']
    
    // Guestbook entries (preserved)
    const guestbookEntries = ref([
      { id: 1, author: 'oh hello', time: '2m ago', text: 'simple angel! dope ❤️' },
      { id: 2, author: 'The Fish', time: '15m ago', text: 'who owned the aquarium' },
      { id: 3, author: 'hahahah', time: '1h ago', text: 'yo wh' },
      { id: 4, author: 'riri', time: '2h ago', text: 'ay/avit, na/papalitan ng color' },
      { id: 5, author: 'Shurlee', time: '3h ago', text: 'Hello, Im under the water please help' }
    ])
    
    // Form data
    const formData = reactive({
      name: '',
      email: '',
      message: ''
    })
    
    const sending = ref(false)
    const successMessage = ref('')
    
    // Submit message to backend
    const submitMessage = async () => {
      sending.value = true
      try {
        await axios.post(`${API_BASE_URL}/api/guestbook`, formData)
        
        guestbookEntries.value.unshift({
          id: Date.now(),
          author: formData.name,
          time: 'just now',
          text: formData.message
        })
        
        formData.name = ''
        formData.email = ''
        formData.message = ''
        
        successMessage.value = 'Chaos sealed successfully!'
        setTimeout(() => {
          successMessage.value = ''
        }, 3000)
        
      } catch (error) {
        console.error('Error submitting message:', error)
        successMessage.value = 'Something went wrong. Try again!'
        setTimeout(() => {
          successMessage.value = ''
        }, 3000)
      } finally {
        sending.value = false
      }
    }
    
    return {
      firstRowSkills,
      secondRowSkills,
      thirdRowSkills,
      guestbookEntries,
      formData,
      sending,
      successMessage,
      submitMessage
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --kuromi-black: #1a1a1a;
  --kuromi-pink: #ff9eb5;
  --kuromi-purple: #b28bff;
  --kuromi-dark-purple: #8a6fd9;
  --kuromi-white: #ffffff;
  --kuromi-gray: #2d2d2d;
  --kuromi-light-gray: #3d3d3d;
  --text-light: #e0e0e0;
  --text-muted: #b0b0b0;
}

.app-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a2e 0%, #2a1a3a 100%);
  position: relative;
  overflow-x: hidden;
  padding: 20px;
}

/* Kuromi Floating Elements */
.kuromi-bg {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 0;
}

.floating-skull, .floating-heart, .floating-ribbon {
  position: absolute;
  animation: floatKuromi 8s infinite ease-in-out;
  opacity: 0.1;
}

.floating-skull {
  color: var(--kuromi-pink);
  font-size: 40px;
}

.floating-heart {
  color: var(--kuromi-purple);
  font-size: 30px;
}

.floating-ribbon {
  color: var(--kuromi-pink);
  font-size: 35px;
}

.floating-skull:nth-child(1) { top: 10%; left: 5%; animation-duration: 7s; }
.floating-skull:nth-child(2) { top: 30%; right: 10%; animation-duration: 9s; }
.floating-skull:nth-child(3) { bottom: 20%; left: 15%; animation-duration: 8s; }
.floating-skull:nth-child(4) { bottom: 40%; right: 20%; animation-duration: 10s; }
.floating-skull:nth-child(5) { top: 60%; left: 25%; animation-duration: 7.5s; }
.floating-skull:nth-child(6) { top: 15%; right: 30%; animation-duration: 8.5s; }
.floating-skull:nth-child(7) { bottom: 60%; left: 40%; animation-duration: 9.5s; }
.floating-skull:nth-child(8) { bottom: 10%; right: 40%; animation-duration: 8s; }

.floating-heart:nth-child(9) { top: 20%; left: 20%; animation-duration: 8s; }
.floating-heart:nth-child(10) { top: 40%; right: 15%; animation-duration: 9s; }
.floating-heart:nth-child(11) { bottom: 30%; left: 30%; animation-duration: 7s; }
.floating-heart:nth-child(12) { bottom: 50%; right: 25%; animation-duration: 8.5s; }
.floating-heart:nth-child(13) { top: 70%; left: 45%; animation-duration: 9s; }
.floating-heart:nth-child(14) { top: 5%; right: 45%; animation-duration: 7.5s; }
.floating-heart:nth-child(15) { bottom: 70%; left: 55%; animation-duration: 8.2s; }
.floating-heart:nth-child(16) { bottom: 15%; right: 55%; animation-duration: 9.3s; }

.floating-ribbon:nth-child(17) { top: 25%; left: 60%; animation-duration: 8s; }
.floating-ribbon:nth-child(18) { top: 55%; right: 60%; animation-duration: 9s; }
.floating-ribbon:nth-child(19) { bottom: 45%; left: 70%; animation-duration: 7.5s; }
.floating-ribbon:nth-child(20) { bottom: 25%; right: 70%; animation-duration: 8.8s; }

@keyframes floatKuromi {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
}

.main-content {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 30px;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

/* Left Section */
.left-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Kuromi Profile Card */
.kuromi-card {
  background: rgba(26, 26, 26, 0.9);
  backdrop-filter: blur(10px);
  border: 3px solid var(--kuromi-pink);
  border-radius: 30px 30px 30px 30px;
  padding: 30px;
  position: relative;
  box-shadow: 0 10px 0 var(--kuromi-dark-purple);
  overflow: hidden;
}

.kuromi-card::before {
  content: "☠☠☠";
  position: absolute;
  top: -10px;
  right: -10px;
  font-size: 60px;
  opacity: 0.1;
  color: var(--kuromi-pink);
  transform: rotate(15deg);
}

.kuromi-card::after {
  content: "♡♡♡";
  position: absolute;
  bottom: -10px;
  left: -10px;
  font-size: 60px;
  opacity: 0.1;
  color: var(--kuromi-purple);
  transform: rotate(-15deg);
}

.card-ribbon {
  position: absolute;
  top: 20px;
  left: -30px;
  width: 100px;
  height: 30px;
  background: linear-gradient(90deg, var(--kuromi-pink), var(--kuromi-purple));
  transform: rotate(-45deg);
  opacity: 0.3;
}

.card-skull-deco {
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 40px;
  opacity: 0.2;
  color: var(--kuromi-pink);
  animation: skullSpin 10s linear infinite;
}

@keyframes skullSpin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.greeting {
  color: var(--kuromi-pink);
  font-size: 24px;
  margin-bottom: 5px;
  font-family: 'Quicksand', sans-serif;
  position: relative;
  display: inline-block;
}

.name {
  color: var(--kuromi-purple);
  font-size: 36px;
  margin-bottom: 20px;
  font-family: 'Quicksand', sans-serif;
  text-shadow: 3px 3px 0 var(--kuromi-dark-purple);
  position: relative;
}

.description {
  color: var(--text-light);
  line-height: 1.6;
  margin-bottom: 20px;
  font-size: 16px;
  background: rgba(0, 0, 0, 0.3);
  padding: 15px;
  border-radius: 20px;
  border-left: 4px solid var(--kuromi-pink);
}

/* Kuromi Quote Bubble */
.kuromi-quote {
  background: rgba(178, 139, 255, 0.2);
  border: 2px dashed var(--kuromi-purple);
  border-radius: 50px;
  padding: 15px 25px;
  margin-bottom: 25px;
  color: var(--kuromi-pink);
  font-style: italic;
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.quote-mark-left, .quote-mark-right {
  font-size: 20px;
  color: var(--kuromi-purple);
  animation: bounce 1s ease infinite;
}

.quote-mark-left {
  animation-delay: 0.2s;
}

.quote-mark-right {
  animation-delay: 0.4s;
}

@keyframes bounce {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}

/* Buttons */
.button-group {
  display: flex;
  gap: 15px;
}

.action-btn {
  padding: 12px 30px;
  border: none;
  border-radius: 50px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.resources {
  background: transparent;
  border: 2px solid var(--kuromi-pink);
  color: var(--kuromi-pink);
}

.resources:hover {
  background: var(--kuromi-pink);
  color: var(--kuromi-black);
  transform: translateY(-2px);
  box-shadow: 0 5px 0 var(--kuromi-dark-purple);
}

.cv {
  background: linear-gradient(135deg, var(--kuromi-pink), var(--kuromi-purple));
  color: var(--kuromi-black);
  border: 2px solid white;
  box-shadow: 0 5px 0 var(--kuromi-dark-purple);
}

.cv:hover {
  transform: translateY(-2px);
  box-shadow: 0 7px 0 var(--kuromi-dark-purple);
}

.btn-skull, .btn-heart {
  font-size: 18px;
  animation: pulse 1.5s ease infinite;
}

.btn-heart {
  animation-delay: 0.3s;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

/* Skills Stack */
.skills-stack {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.skills-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.kuromi-skill {
  background: rgba(45, 45, 45, 0.9);
  backdrop-filter: blur(5px);
  border: 1px solid var(--kuromi-purple);
  border-radius: 20px;
  padding: 10px 20px;
  color: var(--text-light);
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: 0 4px 0 var(--kuromi-dark-purple);
  display: flex;
  align-items: center;
  gap: 8px;
}

.kuromi-skill:hover {
  transform: translateY(-2px) rotate(0.5deg);
  border-color: var(--kuromi-pink);
  background: rgba(178, 139, 255, 0.2);
}

.skill-icon {
  color: var(--kuromi-pink);
  font-size: 14px;
}

.with-plus {
  background: rgba(178, 139, 255, 0.15);
  border: 2px solid var(--kuromi-pink);
}

.plus-icon {
  color: var(--kuromi-pink);
  font-size: 16px;
  font-weight: bold;
  animation: sparkle 1.5s ease infinite;
}

@keyframes sparkle {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); color: var(--kuromi-purple); }
}

/* Guestbook Entries */
.guestbook-entries {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 10px;
}

.entries-header-kuromi {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: 10px;
}

.entries-header-kuromi h3 {
  color: var(--kuromi-pink);
  font-size: 20px;
  font-family: 'Quicksand', sans-serif;
}

.header-skull {
  color: var(--kuromi-purple);
  font-size: 24px;
  animation: wiggle 2s ease infinite;
}

@keyframes wiggle {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(10deg); }
  75% { transform: rotate(-10deg); }
}

.kuromi-message {
  background: rgba(26, 26, 26, 0.8);
  backdrop-filter: blur(5px);
  border: 2px solid var(--kuromi-pink);
  border-radius: 20px;
  padding: 20px;
  position: relative;
  transition: all 0.3s ease;
  border-left: 6px solid var(--kuromi-purple);
  overflow: hidden;
}

.kuromi-message:hover {
  transform: translateY(-3px) rotate(0.5deg);
  box-shadow: 0 8px 0 var(--kuromi-dark-purple);
}

.message-ribbon {
  position: absolute;
  top: 10px;
  right: -20px;
  width: 60px;
  height: 20px;
  background: linear-gradient(135deg, var(--kuromi-pink), var(--kuromi-purple));
  transform: rotate(45deg);
  opacity: 0.3;
}

.message-skull {
  position: absolute;
  bottom: 5px;
  left: 5px;
  font-size: 30px;
  opacity: 0.1;
  color: var(--kuromi-pink);
  transform: rotate(-10deg);
}

.message-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.author-with-icon {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(0, 0, 0, 0.3);
  padding: 5px 15px;
  border-radius: 50px;
}

.author-icon {
  color: var(--kuromi-pink);
}

.message-author {
  color: var(--kuromi-pink);
  font-size: 16px;
}

.message-time {
  color: var(--text-muted);
  font-size: 12px;
  background: rgba(0, 0, 0, 0.3);
  padding: 3px 10px;
  border-radius: 20px;
}

.message-text {
  color: var(--text-light);
  font-size: 14px;
  line-height: 1.5;
  font-style: italic;
  padding-left: 15px;
  border-left: 2px dashed var(--kuromi-purple);
}

/* Right Section */
.right-section {
  position: sticky;
  top: 20px;
  height: fit-content;
}

.kuromi-guestbook {
  background: rgba(26, 26, 26, 0.95);
  backdrop-filter: blur(10px);
  border: 3px solid var(--kuromi-purple);
  border-radius: 30px;
  padding: 30px;
  box-shadow: 0 10px 0 var(--kuromi-dark-purple);
  position: relative;
  overflow: hidden;
}

.kuromi-guestbook::before {
  content: "☠";
  position: absolute;
  top: -20px;
  left: -20px;
  font-size: 100px;
  opacity: 0.1;
  color: var(--kuromi-pink);
  transform: rotate(15deg);
}

.kuromi-guestbook::after {
  content: "♡";
  position: absolute;
  bottom: -30px;
  right: -30px;
  font-size: 120px;
  opacity: 0.1;
  color: var(--kuromi-purple);
  transform: rotate(-15deg);
}

.guestbook-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: 30px;
}

.header-deco {
  font-size: 30px;
  animation: spinSlow 3s linear infinite;
}

.header-deco.left {
  color: var(--kuromi-pink);
}

.header-deco.right {
  color: var(--kuromi-purple);
}

@keyframes spinSlow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.guestbook-title {
  color: var(--kuromi-pink);
  font-size: 24px;
  text-align: center;
  font-family: 'Quicksand', sans-serif;
  text-shadow: 2px 2px 0 var(--kuromi-dark-purple);
}

/* Form */
.kuromi-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 30px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.kuromi-label {
  color: var(--kuromi-pink);
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  gap: 5px;
}

.label-icon {
  color: var(--kuromi-purple);
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 15px;
  background: rgba(45, 45, 45, 0.9);
  border: 2px solid var(--kuromi-purple);
  border-radius: 25px;
  color: var(--text-light);
  font-size: 16px;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--kuromi-pink);
  box-shadow: 0 0 15px rgba(255, 158, 181, 0.3);
  background: rgba(61, 61, 61, 0.9);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: var(--text-muted);
  opacity: 0.5;
  font-style: italic;
}

/* Send Button */
.kuromi-send-btn {
  background: linear-gradient(135deg, var(--kuromi-pink), var(--kuromi-purple));
  color: var(--kuromi-black);
  border: none;
  padding: 15px;
  border-radius: 50px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid white;
  box-shadow: 0 5px 0 var(--kuromi-dark-purple);
  text-transform: uppercase;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  position: relative;
  overflow: hidden;
}

.kuromi-send-btn::before {
  content: "☠☠☠";
  position: absolute;
  left: -50px;
  opacity: 0;
  transition: 0.3s;
}

.kuromi-send-btn::after {
  content: "♡♡♡";
  position: absolute;
  right: -50px;
  opacity: 0;
  transition: 0.3s;
}

.kuromi-send-btn:hover::before {
  left: 20px;
  opacity: 0.3;
}

.kuromi-send-btn:hover::after {
  right: 20px;
  opacity: 0.3;
}

.kuromi-send-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 7px 0 var(--kuromi-dark-purple);
}

.kuromi-send-btn:active {
  transform: translateY(5px);
  box-shadow: 0 2px 0 var(--kuromi-dark-purple);
}

.kuromi-send-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}

.btn-skull-left, .btn-skull-right {
  font-size: 20px;
  animation: pulseSkull 1.5s ease infinite;
}

.btn-skull-left {
  animation-delay: 0.2s;
}

.btn-skull-right {
  animation-delay: 0.4s;
}

@keyframes pulseSkull {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2) rotate(10deg); }
}

/* Success Toast */
.kuromi-success {
  background: rgba(178, 139, 255, 0.2);
  border: 2px solid var(--kuromi-purple);
  color: var(--kuromi-purple);
  padding: 15px;
  border-radius: 50px;
  text-align: center;
  margin-bottom: 20px;
  animation: slideIn 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-weight: 500;
}

.bow-icon {
  font-size: 20px;
  animation: bowBounce 1s ease infinite;
}

@keyframes bowBounce {
  0%, 100% { transform: scale(1) rotate(0deg); }
  50% { transform: scale(1.2) rotate(5deg); }
}

/* Footer */
.kuromi-footer {
  text-align: center;
  margin-top: 30px;
}

.to-top {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--kuromi-pink);
  text-decoration: none;
  font-size: 16px;
  margin-bottom: 15px;
  transition: all 0.3s ease;
  padding: 8px 20px;
  border-radius: 50px;
  background: rgba(0, 0, 0, 0.3);
}

.to-top:hover {
  transform: translateY(-2px);
  background: rgba(255, 158, 181, 0.2);
}

.top-skull {
  font-size: 16px;
  animation: wiggleSmall 2s ease infinite;
}

.top-skull:first-child {
  animation-delay: 0.2s;
}

.top-skull:last-child {
  animation-delay: 0.4s;
}

@keyframes wiggleSmall {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(5deg); }
  75% { transform: rotate(-5deg); }
}

.footer-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 15px 0;
}

.divider-skull {
  color: var(--kuromi-pink);
  font-size: 14px;
  animation: pulse 1.5s ease infinite;
}

.divider-heart {
  color: var(--kuromi-purple);
  font-size: 16px;
  animation: pulse 1.5s ease infinite 0.3s;
}

.credit {
  color: var(--text-muted);
  font-size: 14px;
  margin-bottom: 5px;
}

.disclaimer {
  color: var(--kuromi-pink);
  font-size: 12px;
  font-style: italic;
  opacity: 0.8;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .main-content {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .right-section {
    position: static;
  }
  
  .name {
    font-size: 28px;
  }
  
  .button-group {
    flex-direction: column;
  }
  
  .action-btn {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .app-container {
    padding: 10px;
  }
  
  .kuromi-card {
    padding: 20px;
  }
  
  .greeting {
    font-size: 20px;
  }
  
  .name {
    font-size: 24px;
  }
  
  .guestbook-title {
    font-size: 20px;
  }
  
  .kuromi-quote {
    flex-direction: column;
    gap: 5px;
  }
  
  .floating-skull, .floating-heart, .floating-ribbon {
    font-size: 20px;
  }
}

@media (max-width: 480px) {
  .skills-row {
    justify-content: center;
  }
  
  .kuromi-skill {
    width: 100%;
    justify-content: center;
  }
  
  .message-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
  
  .guestbook-header {
    flex-direction: column;
    gap: 10px;
  }
  
  .kuromi-send-btn {
    font-size: 16px;
    padding: 12px;
  }
  
  .kuromi-send-btn::before,
  .kuromi-send-btn::after {
    display: none;
  }
}
</style>