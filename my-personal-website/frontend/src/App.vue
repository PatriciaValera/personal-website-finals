<template>
  <div class="app-container">
    <KuromiHeader 
      @language-change="handleLanguageChange"
      @nav-change="handleNavChange"
    />
    
    <main class="main-content">
      <Profile />
      
      <div class="divider">
        <span class="divider-text">✧ GUESTBOOK ✧</span>
      </div>
      
      <Guestbook />
    </main>
    
    <footer class="footer">
      <div class="footer-content">
        <p>© 2024 KUROMI OFFICIAL. All rights reserved.</p>
        <p class="small">Designed with <span class="heart">♡</span> for Kuromi fans</p>
        <div class="footer-icons">
          <span class="footer-icon">☠</span>
          <span class="footer-icon">♡</span>
          <span class="footer-icon">👿</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import KuromiHeader from './components/KuromiHeader.vue'
import Profile from './components/Profile.vue'
import Guestbook from './components/Guestbook.vue'

export default {
  name: 'App',
  components: {
    KuromiHeader,
    Profile,
    Guestbook
  },
  methods: {
    handleLanguageChange(lang) {
      console.log('Language changed to:', lang)
      // Here you can implement actual language switching logic
      // For now, we'll just log it
      if (lang === 'jp') {
        document.documentElement.style.setProperty('--font-family', "'Noto Sans JP', sans-serif")
      } else {
        document.documentElement.style.setProperty('--font-family', "'Poppins', sans-serif")
      }
    },
    handleNavChange(nav) {
      console.log('Navigation changed to:', nav)
      // Here you can implement navigation logic
      // For now, we'll just scroll to different sections
      const sections = {
        'top': 'header',
        'news': 'profile-section',
        'live & schedule': 'guestbook-section',
        'works': 'profile-section',
        'shop': 'footer'
      }
      
      const sectionId = sections[nav]
      if (sectionId) {
        const element = document.querySelector(sectionId === 'header' ? '.kuromi-header' : 
                        sectionId === 'profile-section' ? '.profile-section' : 
                        sectionId === 'guestbook-section' ? '.guestbook-section' : 'footer')
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
  }
}
</script>

<style>
/* Add Japanese font support */
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap');

.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding: 0 20px;
}

.divider {
  margin: 40px 0;
  text-align: center;
  position: relative;
}

.divider::before,
.divider::after {
  content: "";
  position: absolute;
  top: 50%;
  width: 30%;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--kuromi-pink), var(--kuromi-purple), transparent);
}

.divider::before {
  left: 0;
}

.divider::after {
  right: 0;
}

.divider-text {
  background: var(--kuromi-black);
  padding: 0 20px;
  color: var(--kuromi-pink);
  font-weight: bold;
  font-size: 18px;
  text-shadow: 1px 1px 0 var(--kuromi-purple);
  position: relative;
  z-index: 1;
}

.footer {
  margin-top: 50px;
  padding: 30px 20px;
  background: linear-gradient(180deg, var(--kuromi-gray) 0%, var(--kuromi-black) 100%);
  border-top: 3px solid var(--kuromi-pink);
  text-align: center;
  position: relative;
  overflow: hidden;
}

.footer::before {
  content: "☠♡☠♡☠";
  position: absolute;
  top: 10px;
  left: 0;
  right: 0;
  font-size: 12px;
  color: var(--kuromi-purple);
  opacity: 0.3;
  letter-spacing: 5px;
  animation: slide 20s linear infinite;
}

@keyframes slide {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.footer-content {
  position: relative;
  z-index: 1;
}

.footer p {
  color: var(--text-muted);
  margin: 5px 0;
}

.footer .small {
  font-size: 12px;
}

.heart {
  color: var(--kuromi-pink);
  animation: heartbeat 1.5s ease infinite;
  display: inline-block;
}

@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}

.footer-icons {
  margin-top: 15px;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.footer-icon {
  font-size: 20px;
  color: var(--kuromi-purple);
  animation: float 3s ease infinite;
}

.footer-icon:nth-child(2) {
  animation-delay: 0.5s;
  color: var(--kuromi-pink);
}

.footer-icon:nth-child(3) {
  animation-delay: 1s;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .divider::before,
  .divider::after {
    width: 20%;
  }
  
  .divider-text {
    font-size: 16px;
  }
  
  .footer {
    padding: 20px 15px;
  }
}

@media (max-width: 480px) {
  .divider::before,
  .divider::after {
    width: 15%;
  }
  
  .divider-text {
    font-size: 14px;
  }
  
  .footer-icons {
    gap: 15px;
  }
  
  .footer-icon {
    font-size: 16px;
  }
}
</style>