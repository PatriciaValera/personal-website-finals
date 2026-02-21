<template>
  <div class="app-container">
    <AoRunHeader />
    <AoRunProfile />
    
    <div class="divider">
      <span class="divider-text">🌀 DRAGON QUEEN'S GUESTBOOK 🌀</span>
    </div>
    
    <AoRunGuestbook />
    
    <footer class="footer">
      <div class="footer-content">
        <p>© 2024 AO RUN • Dragon Queen of the West Sea</p>
        <p class="small">Made with <span class="heart">💜</span> for all Ne Zha fans</p>
        <div class="footer-icons">
          <span class="footer-icon">💜</span>
          <span class="footer-icon">🌀</span>
          <span class="footer-icon">🐉</span>
        </div>
        <p class="small quote">〜 有兴趣做个交易吗,大哥～？ 〜</p>
      </div>
    </footer>
  </div>
</template>

<script>
import AoRunHeader from './components/AoRunHeader.vue'
import AoRunProfile from './components/AoRunProfile.vue'
import AoRunGuestbook from './components/AoRunGuestbook.vue'

export default {
  name: 'App',
  components: {
    AoRunHeader,
    AoRunProfile,
    AoRunGuestbook
  }
}
</script>

<style>
/* Global styles for Ao Run theme */
:root {
  --aorun-purple-dark: #1a1025;
  --aorun-purple-medium: #2d1b4a;
  --aorun-purple-light: #4a2b6e;
  --aorun-lavender: #9370db;
  --aorun-lilac: #b8a9d4;
  --aorun-glow: #e6d9ff;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #0a0710 0%, #1a1025 100%);
  min-height: 100vh;
  color: var(--aorun-glow);
  position: relative;
}

body::before {
  content: "🌀";
  position: fixed;
  bottom: 20px;
  left: 20px;
  font-size: 100px;
  opacity: 0.03;
  color: var(--aorun-lavender);
  transform: rotate(-10deg);
  pointer-events: none;
  z-index: 0;
}

body::after {
  content: "💜";
  position: fixed;
  top: 20px;
  right: 20px;
  font-size: 120px;
  opacity: 0.03;
  color: var(--aorun-lilac);
  transform: rotate(10deg);
  pointer-events: none;
  z-index: 0;
}

#app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  z-index: 1;
}

.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
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
  background: linear-gradient(90deg, transparent, var(--aorun-lavender), var(--aorun-purple-light), transparent);
}

.divider::before {
  left: 0;
}

.divider::after {
  right: 0;
}

.divider-text {
  background: var(--aorun-purple-dark);
  padding: 0 20px;
  color: var(--aorun-glow);
  font-weight: bold;
  font-size: 18px;
  position: relative;
  z-index: 1;
  text-shadow: 0 0 10px var(--aorun-lavender);
}

.footer {
  margin-top: 50px;
  padding: 30px 20px;
  background: linear-gradient(180deg, var(--aorun-purple-medium) 0%, var(--aorun-purple-dark) 100%);
  border-top: 3px solid var(--aorun-lavender);
  text-align: center;
  color: var(--aorun-glow);
  position: relative;
  overflow: hidden;
  border-radius: 20px 20px 0 0;
}

.footer::before {
  content: "🌀💜🌀💜🌀";
  position: absolute;
  top: 10px;
  left: 0;
  right: 0;
  font-size: 12px;
  color: var(--aorun-lilac);
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
  margin: 5px 0;
  color: var(--aorun-lilac);
}

.footer .small {
  font-size: 12px;
  opacity: 0.8;
}

.footer .quote {
  margin-top: 15px;
  font-style: italic;
  color: var(--aorun-lavender);
  font-size: 14px;
}

.heart {
  color: var(--aorun-lavender);
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
  color: var(--aorun-lilac);
  animation: float 3s ease infinite;
}

.footer-icon:nth-child(2) {
  animation-delay: 0.5s;
  color: var(--aorun-lavender);
}

.footer-icon:nth-child(3) {
  animation-delay: 1s;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

/* Responsive Design */
@media (max-width: 768px) {
  #app {
    padding: 10px;
  }

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
    padding: 0 10px;
  }
  
  .footer-icons {
    gap: 15px;
  }
  
  .footer-icon {
    font-size: 16px;
  }
  
  body::before,
  body::after {
    font-size: 60px;
  }
}
</style>