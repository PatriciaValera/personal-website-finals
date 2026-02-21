<template>
  <div class="app-container">
    <BloomHeader />
    <BloomProfile />
    
    <div class="divider">
      <span class="divider-text">✧ MAGICAL GUESTBOOK ✧</span>
    </div>
    
    <BloomGuestbook />
    
    <footer class="footer">
      <div class="footer-content">
        <p>© 2024 BLOOM • Fairy of the Dragon Flame</p>
        <p class="small">Made with <span class="heart">🔥</span> for all Winx fans</p>
        <div class="footer-icons">
          <span class="footer-icon">🔥</span>
          <span class="footer-icon">✨</span>
          <span class="footer-icon">🐉</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import BloomHeader from './components/BloomHeader.vue'
import BloomProfile from './components/BloomProfile.vue'
import BloomGuestbook from './components/BloomGuestbook.vue'

export default {
  name: 'App',
  components: {
    BloomHeader,
    BloomProfile,
    BloomGuestbook
  }
}
</script>

<style>
/* Add to your existing styles */
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
  background: linear-gradient(90deg, transparent, #ff7b24, #ff4500, transparent);
}

.divider::before {
  left: 0;
}

.divider::after {
  right: 0;
}

.divider-text {
  background: #fff4e6;
  padding: 0 20px;
  color: #ff4500;
  font-weight: bold;
  font-size: 18px;
  position: relative;
  z-index: 1;
}

.footer {
  margin-top: 50px;
  padding: 30px 20px;
  background: #2b1e0f;
  border-top: 3px solid #ff7b24;
  text-align: center;
  color: white;
}

.footer p {
  margin: 5px 0;
}

.footer .small {
  font-size: 12px;
  opacity: 0.8;
}

.heart {
  color: #ff7b24;
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
  color: #ffaa33;
  animation: float 3s ease infinite;
}

.footer-icon:nth-child(2) {
  animation-delay: 0.5s;
  color: #ff7b24;
}

.footer-icon:nth-child(3) {
  animation-delay: 1s;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

@media (max-width: 768px) {
  .divider::before,
  .divider::after {
    width: 20%;
  }
  
  .divider-text {
    font-size: 16px;
  }
}
</style>