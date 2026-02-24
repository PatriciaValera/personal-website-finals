<template>
  <div class="container">
    <div class="site-header">
      <h1>Riri's Lair</h1>
      <p class="site-subtitle">Kuromi inspired profile website</p>
    </div>
    
    <Profile />
    
    <div class="divider">
      <span class="divider-text">✧ GUESTBOOK ✧</span>
    </div>
    
    <Guestbook />
    
    <div class="footer">
      <p>Made with <span class="heart">♡</span> for Kuromi</p>
      <p class="small">☠ 悪い子ちゃん ☠</p>
    </div>
  </div>
</template>

<script>
import Profile from './components/Profile.vue'
import Guestbook from './components/Guestbook.vue'

export default {
  name: 'App',
  components: {
    Profile,
    Guestbook
  }
}
</script>

<style scoped>
.site-header {
  text-align: center;
  margin-bottom: 30px;
}

.site-header h1 {
  margin-bottom: 5px;
  color: var(--kuromi-pink);
}

.site-header h1::after {
  content: "☠";
  font-size: 0.8em;
  margin-left: 10px;
  opacity: 0.7;
  color: var(--kuromi-purple);
}

.site-subtitle {
  color: var(--kuromi-purple);
  font-size: var(--font-lg);
  font-style: italic;
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
  font-size: var(--font-lg);
}

.footer {
  text-align: center;
  margin-top: 40px;
  padding-top: 20px;
  border-top: 2px dashed var(--kuromi-purple);
  color: var(--text-muted);
}

.heart {
  color: var(--kuromi-pink);
  font-size: var(--font-xl);
  animation: heartbeat 1.5s ease infinite;
  display: inline-block;
}

.small {
  font-size: var(--font-sm);
  opacity: 0.7;
}

@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}

@media (max-width: 768px) {
  .site-header h1 {
    font-size: var(--font-xxl);
  }
  
  .site-subtitle {
    font-size: var(--font-base);
  }
  
  .divider-text {
    font-size: var(--font-base);
  }
}
</style>