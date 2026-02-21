<template>
  <div class="raven-header">
    <div class="header-content">
      <div class="raven-icon">
        <span class="cloak">🔮</span>
        <span class="gem">⚡</span>
      </div>
      <div class="header-text">
        <h1>RAVEN</h1>
        <p class="subtitle">〜 あざみ (Azarath Metrion Zinthos) 〜</p>
      </div>
    </div>
    
    <div class="banner">
      <span class="banner-item" v-for="i in 5" :key="i">⚡</span>
      <span class="banner-text">✨ DARKNESS WITHIN ✨</span>
      <span class="banner-item" v-for="i in 5" :key="i">🔮</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RavenHeader'
}
</script>

<style scoped>
.raven-header {
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

.raven-icon {
  position: relative;
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #2c1a4d, #4a1d6d);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #8a6de0;
}

.cloak {
  position: absolute;
  top: -15px;
  font-size: 45px;
  filter: drop-shadow(0 0 5px #b19cd9);
}

.gem {
  font-size: 40px;
  color: #b19cd9;
  animation: glow 3s ease infinite;
}

@keyframes glow {
  0%, 100% { opacity: 0.8; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.1); color: #c084fc; }
}

.header-text {
  text-align: left;
}

.header-text h1 {
  margin-bottom: 5px;
  font-size: 36px;
  color: #b19cd9;
  letter-spacing: 3px;
  font-weight: 700;
  text-transform: uppercase;
}

.subtitle {
  color: #9370db;
  font-size: 14px;
  opacity: 0.9;
  font-style: italic;
}

.banner {
  background: #1a1025;
  padding: 12px;
  border-radius: 30px;
  margin-top: 20px;
  text-align: center;
  border: 2px dashed #9370db;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
}

.banner-item {
  color: #b19cd9;
  font-size: 18px;
  animation: sparkle 2.5s ease infinite;
}

.banner-text {
  color: #c084fc;
  font-weight: bold;
  font-size: 14px;
  letter-spacing: 3px;
}

@keyframes sparkle {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.2); color: #c084fc; }
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