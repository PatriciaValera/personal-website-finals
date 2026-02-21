<template>
  <div class="app-container">
    <KuromiHeader />
    <KuromiProfile />
    
    <div class="divider">
      <span class="divider-text">✧ GUESTBOOK ✧</span>
    </div>
    
    <KuromiGuestbook />
    
    <footer class="footer">
      <div class="footer-content">
        <p>© 2024 KUROMI • 悪い子ちゃん</p>
        <p class="small">Made with <span class="heart">♡</span> by Kuromi</p>
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
import KuromiProfile from './components/KuromiProfile.vue'
import KuromiGuestbook from './components/KuromiGuestbook.vue'

export default {
  name: 'App',
  components: {
    KuromiHeader,
    KuromiProfile,
    KuromiGuestbook
  }
}
</script>

<style>
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
  background: linear-gradient(90deg, transparent, #ff9eb5, #b28bff, transparent);
}

.divider::before {
  left: 0;
}

.divider::after {
  right: 0;
}

.divider-text {
  background: white;
  padding: 0 20px;
  color: #d45e7e;
  font-weight: bold;
  font-size: 18px;
  position: relative;
  z-index: 1;
}

.footer {
  margin-top: 50px;
  padding: 30px 20px;
  background: #fff0f3;
  border-top: 3px solid #ff9eb5;
  text-align: center;
  color: #333333;
  border-radius: 20px 20px 0 0;
}

.footer p {
  margin: 5px 0;
}

.footer .small {
  font-size: 12px;
  color: #8a6fd9;
}

.heart {
  color: #ff9eb5;
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
  color: #d45e7e;
  animation: float 3s ease infinite;
}

.footer-icon:nth-child(2) {
  animation-delay: 0.5s;
  color: #8a6fd9;
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

@media (max-width: 480px) {
  .divider-text {
    font-size: 14px;
    padding: 0 10px;
  }
}
</style>