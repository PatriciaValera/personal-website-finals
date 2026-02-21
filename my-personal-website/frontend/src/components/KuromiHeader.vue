<template>
  <div class="kuromi-header">
    <div class="header-content">
      <div class="kuromi-icon">
        <span class="ears">👿</span>
        <span class="face">☠</span>
      </div>
      <div class="header-text">
        <h1>Kuromi's Lair</h1>
        <p class="subtitle">〜 悪い子ちゃんのプロフィール 〜</p>
      </div>
    </div>
    
    <div class="banner">
      <span class="banner-item" v-for="i in 5" :key="i">♡</span>
      <span class="banner-text">WELCOME TO MY DARK & CUTE WORLD</span>
      <span class="banner-item" v-for="i in 5" :key="i">☠</span>
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
  margin-bottom: 30px;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.kuromi-icon {
  position: relative;
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, var(--kuromi-pink), var(--kuromi-purple));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid var(--kuromi-white);
  box-shadow: 0 5px 0 var(--kuromi-dark-purple);
}

.ears {
  position: absolute;
  top: -20px;
  font-size: 40px;
  filter: drop-shadow(0 2px 0 var(--kuromi-dark-purple));
}

.face {
  font-size: 50px;
  transform: rotate(-10deg);
}

.header-text {
  text-align: left;
}

.header-text h1 {
  margin-bottom: 5px;
  font-size: 36px;
}

.subtitle {
  color: var(--kuromi-pink);
  font-size: 16px;
  opacity: 0.8;
}

.banner {
  background: var(--kuromi-gray);
  padding: 15px;
  border-radius: 50px;
  margin-top: 20px;
  text-align: center;
  border: 2px dashed var(--kuromi-pink);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
}

.banner-item {
  color: var(--kuromi-pink);
  font-size: 20px;
  animation: sparkle 2s ease infinite;
}

.banner-text {
  color: var(--kuromi-purple);
  font-weight: bold;
  font-size: 14px;
  letter-spacing: 2px;
}

@keyframes sparkle {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.2); color: var(--kuromi-purple); }
}

@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    text-align: center;
  }
  
  .header-text {
    text-align: center;
  }
  
  .header-text h1 {
    font-size: 28px;
  }
  
  .banner {
    gap: 8px;
  }
}
</style>