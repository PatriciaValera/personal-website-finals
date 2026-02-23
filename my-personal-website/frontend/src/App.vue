<template>
  <div class="container">
    <KuromiHeader />
    
    <Profile />
    
    <div class="divider">
      <span class="divider-text">✧ Riri's Mischief Log ✧</span>
    </div>
    
    <Guestbook />
    
    <div class="footer">
      <p>Made with <span class="heart">♡</span> for Kuromi</p>
      <p class="small">☠ 悪い子ちゃん ☠</p>
    </div>
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
  }
}
</script>

<style scoped>
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
  font-size: 20px;
  animation: heartbeat 1.5s ease infinite;
}

.small {
  font-size: 12px;
  opacity: 0.7;
}

@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}
</style>