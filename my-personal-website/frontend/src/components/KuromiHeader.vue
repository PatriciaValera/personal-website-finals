<template>
  <div class="kuromi-header">
    <div class="header-content">
      <h1>Kuromi's Lair</h1>
      <div class="header-icons">
        <span class="icon">☠</span>
        <span class="icon">♡</span>
        <span class="icon">☠</span>
      </div>
    </div>
    <p class="subtitle">〜 悪い子ちゃんのプロフィール 〜</p>
    
    <div class="divider">
      <span class="divider-icon">🎀</span>
      <span class="divider-text">welcome to my world</span>
      <span class="divider-icon">🍄</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KuromiHeader'
}
</script>

<style scoped>
.kuromi-header {
  text-align: center;
  margin-bottom: 40px;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
  margin-bottom: 5px;
}

.header-content h1 {
  margin-bottom: 0;
  font-size: 32px;
}

.header-icons {
  display: flex;
  gap: 8px;
}

.icon {
  color: var(--kuromi-pink);
  font-size: 20px;
  animation: float 3s ease infinite;
}

.icon:nth-child(2) {
  color: var(--kuromi-purple);
  animation-delay: 0.5s;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}

.subtitle {
  color: var(--kuromi-skull);
  font-size: 14px;
  margin-bottom: 20px;
  letter-spacing: 1px;
}

.divider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
}

.divider-icon {
  font-size: 18px;
  opacity: 0.7;
}

.divider-text {
  color: var(--kuromi-purple);
  font-size: 13px;
  text-transform: lowercase;
  letter-spacing: 2px;
}

@media (max-width: 480px) {
  .header-content h1 {
    font-size: 26px;
  }
  
  .divider {
    gap: 10px;
  }
}
</style>