<template>
  <div class="rose-header">
    <div class="magic-sparkles">
      <span v-for="n in 8" :key="n" class="sparkle">✨</span>
    </div>
    
    <div class="header-content">
      <div class="rose-icon">
        <div class="crown">👑</div>
        <div class="glass-slipper">👠</div>
        <div class="pumpkin">🎃</div>
      </div>
      
      <div class="header-text">
        <h1>Rose Cinderella's Story</h1>
        <p class="subtitle">〜 Granddaughter of Cinderella 〜</p>
        <p class="catchphrase">"Pumpkin Seeds! ✨"</p>
      </div>
    </div>
    
    <div class="story-banner">
      <span class="banner-item" v-for="i in 3" :key="i">👠</span>
      <span class="banner-text">Welcome to My Fairy Tale Journey</span>
      <span class="banner-item" v-for="i in 3" :key="i">🎃</span>
    </div>
    
    <!-- Magic pumpkin carriage animation -->
    <div class="pumpkin-carriage">
      <span class="carriage">🎃</span>
      <span class="wheels">✨</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoseHeader'
}
</script>

<style scoped>
.rose-header {
  margin-bottom: 30px;
  position: relative;
}

.magic-sparkles {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.sparkle {
  position: absolute;
  color: var(--fairy-gold);
  font-size: 20px;
  animation: twinkle 3s ease infinite;
}

.sparkle:nth-child(1) { top: 10%; left: 5%; animation-delay: 0s; }
.sparkle:nth-child(2) { top: 20%; right: 10%; animation-delay: 0.4s; }
.sparkle:nth-child(3) { bottom: 30%; left: 15%; animation-delay: 0.8s; }
.sparkle:nth-child(4) { top: 40%; right: 20%; animation-delay: 1.2s; }
.sparkle:nth-child(5) { bottom: 10%; left: 25%; animation-delay: 1.6s; }
.sparkle:nth-child(6) { top: 60%; right: 5%; animation-delay: 2.0s; }
.sparkle:nth-child(7) { bottom: 20%; right: 30%; animation-delay: 2.4s; }
.sparkle:nth-child(8) { top: 70%; left: 30%; animation-delay: 2.8s; }

@keyframes twinkle {
  0%, 100% { opacity: 0.3; transform: scale(0.8); }
  50% { opacity: 1; transform: scale(1.2); color: var(--fairy-gold); }
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  background: linear-gradient(135deg, rgba(255, 182, 193, 0.2), rgba(255, 255, 255, 0.5));
  padding: 30px;
  border-radius: 60px;
  border: 2px dashed var(--rose-pink);
}

.rose-icon {
  position: relative;
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, var(--rose-pink), var(--cinderella-blue));
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 4px solid var(--fairy-gold);
  box-shadow: 0 8px 0 var(--pumpkin-orange);
  animation: bounce 3s ease infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.crown {
  position: absolute;
  top: -25px;
  font-size: 40px;
  filter: drop-shadow(0 4px 0 var(--fairy-gold));
  animation: crownFloat 3s ease infinite;
}

@keyframes crownFloat {
  0%, 100% { transform: rotate(-5deg); }
  50% { transform: rotate(5deg) translateY(-3px); }
}

.glass-slipper {
  position: absolute;
  bottom: -15px;
  left: -10px;
  font-size: 35px;
  transform: rotate(-20deg);
  animation: slipperShine 4s ease infinite;
}

@keyframes slipperShine {
  0%, 100% { opacity: 0.8; transform: rotate(-20deg) scale(1); }
  50% { opacity: 1; transform: rotate(-15deg) scale(1.1); }
}

.pumpkin {
  position: absolute;
  bottom: -15px;
  right: -10px;
  font-size: 40px;
  transform: rotate(15deg);
  animation: pumpkinGlow 4s ease infinite;
}

@keyframes pumpkinGlow {
  0%, 100% { filter: drop-shadow(0 0 5px var(--pumpkin-orange)); }
  50% { filter: drop-shadow(0 0 20px var(--pumpkin-glow)); }
}

.header-text {
  text-align: left;
}

.header-text h1 {
  margin-bottom: 5px;
  font-size: 42px;
  background: linear-gradient(135deg, var(--rose-magenta), var(--magic-purple));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.subtitle {
  color: var(--magic-purple);
  font-size: 18px;
  font-style: italic;
  margin-bottom: 5px;
}

.catchphrase {
  color: var(--pumpkin-orange);
  font-size: 20px;
  font-weight: bold;
  text-shadow: 2px 2px 0 var(--fairy-gold);
  animation: phrasePop 2s ease infinite;
}

@keyframes phrasePop {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.story-banner {
  background: linear-gradient(135deg, var(--rose-pink), var(--cinderella-blue));
  padding: 15px;
  border-radius: 50px;
  margin-top: 20px;
  text-align: center;
  border: 3px solid var(--fairy-gold);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  box-shadow: 0 5px 0 var(--pumpkin-orange);
}

.banner-item {
  color: var(--fairy-gold);
  font-size: 24px;
  animation: bounce 2s ease infinite;
}

.banner-text {
  color: white;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 2px;
  text-shadow: 2px 2px 0 var(--pumpkin-orange);
}

.pumpkin-carriage {
  position: absolute;
  bottom: -30px;
  right: 20px;
  display: flex;
  gap: 5px;
  animation: carriageRoll 10s linear infinite;
}

@keyframes carriageRoll {
  from { transform: translateX(0); }
  to { transform: translateX(-20px); }
}

.carriage {
  font-size: 40px;
  filter: drop-shadow(0 0 10px var(--pumpkin-glow));
}

.wheels {
  font-size: 30px;
  animation: spin 3s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    text-align: center;
    padding: 20px;
  }
  
  .header-text {
    text-align: center;
  }
  
  .header-text h1 {
    font-size: 32px;
  }
  
  .pumpkin-carriage {
    display: none;
  }
}
</style>