<template>
  <div class="aorun-header">
    <div class="header-content">
      <div class="aorun-icon">
        <span class="claws">💅</span>
        <span class="dragon">🐉</span>
      </div>
      <div class="header-text">
        <h1>AO RUN</h1>
        <p class="subtitle">〜 西海竜王 • Dragon Queen of the West 〜</p>
      </div>
    </div>
    
    <div class="banner">
      <span class="banner-item" v-for="i in 5" :key="i">💜</span>
      <span class="banner-text">✨ SKY-SPLITTING CLAWS ✨</span>
      <span class="banner-item" v-for="i in 5" :key="i">🌀</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AoRunHeader'
}
</script>

<style scoped>
.aorun-header {
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

.aorun-icon {
  position: relative;
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #2d1b4a, #4a2b6e);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #b8a9d4;
  box-shadow: 0 0 15px rgba(138, 43, 226, 0.3);
}

.claws {
  position: absolute;
  top: -10px;
  right: -10px;
  font-size: 35px;
  transform: rotate(15deg);
  animation: clawGlow 3s ease infinite;
}

.dragon {
  font-size: 45px;
  color: #c3b1e6;
  filter: drop-shadow(0 0 8px #9370db);
  animation: float 4s ease infinite;
}

@keyframes clawGlow {
  0%, 100% { opacity: 0.7; transform: rotate(15deg) scale(1); }
  50% { opacity: 1; transform: rotate(25deg) scale(1.2); }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

.header-text {
  text-align: left;
}

.header-text h1 {
  margin-bottom: 5px;
  font-size: 36px;
  color: #e6d9ff;
  letter-spacing: 3px;
  font-weight: 700;
  text-transform: uppercase;
  text-shadow: 2px 2px 0 #4a2b6e;
}

.subtitle {
  color: #b8a9d4;
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
  color: #b8a9d4;
  font-size: 18px;
  animation: sparkle 2.5s ease infinite;
}

.banner-text {
  color: #e6d9ff;
  font-weight: bold;
  font-size: 14px;
  letter-spacing: 2px;
}

@keyframes sparkle {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.2); color: #d8bfd8; }
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