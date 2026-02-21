<template>
  <div class="bloom-header">
    <div class="header-content">
      <div class="bloom-icon">
        <span class="flames">🔥</span>
        <span class="dragon">🐉</span>
      </div>
      <div class="header-text">
        <h1>BLOOM</h1>
        <p class="subtitle">〜 Fairy of the Dragon Flame 〜</p>
      </div>
    </div>
    
    <div class="banner">
      <span class="banner-item" v-for="i in 5" :key="i">🔥</span>
      <span class="banner-text">✨ MAGIX AWAITS ✨</span>
      <span class="banner-item" v-for="i in 5" :key="i">✨</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BloomHeader'
}
</script>

<style scoped>
.bloom-header {
  margin-bottom: 30px;
  font-family: 'Poppins', sans-serif;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.bloom-icon {
  position: relative;
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #ff7b24, #ff4500);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #ffd700;
}

.flame {
  position: absolute;
  top: -15px;
  font-size: 45px;
  animation: flicker 1.5s ease infinite;
}

.dragon {
  font-size: 40px;
  color: #ffd700;
  animation: breathe 3s ease infinite;
}

@keyframes flicker {
  0%, 100% { transform: scale(1) rotate(-5deg); opacity: 0.9; }
  50% { transform: scale(1.2) rotate(5deg); opacity: 1; }
}

@keyframes breathe {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.header-text {
  text-align: left;
}

.header-text h1 {
  margin-bottom: 5px;
  font-size: 36px;
  color: #ff7b24;
  letter-spacing: 2px;
  font-weight: 700;
  text-transform: uppercase;
  text-shadow: 2px 2px 0 #ff4500;
}

.subtitle {
  color: #ffaa33;
  font-size: 14px;
  opacity: 0.9;
  font-style: italic;
}

.banner {
  background: #2b1e0f;
  padding: 12px;
  border-radius: 30px;
  margin-top: 20px;
  text-align: center;
  border: 2px dashed #ff7b24;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
}

.banner-item {
  color: #ff7b24;
  font-size: 18px;
  animation: sparkle 2.5s ease infinite;
}

.banner-text {
  color: #ffd700;
  font-weight: bold;
  font-size: 14px;
  letter-spacing: 2px;
}

@keyframes sparkle {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.2); color: #ffd700; }
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
}
</style>