<template>
  <div class="inosuke-header">
    <div class="header-content">
      <div class="boar-mask">
        <div class="mask-eyes">
          <span class="eye-left">👀</span>
          <span class="eye-right">👀</span>
        </div>
        <div class="mask-tusks">
          <span class="tusk-left">⬜</span>
          <span class="tusk-right">⬜</span>
        </div>
        <div class="mask-face">🐗</div>
      </div>
      
      <div class="header-text">
        <h1>INOSUKE HASHIBIRA</h1>
        <p class="subtitle">〜 猪突猛進！ (Boar Rush!) 〜</p>
      </div>
    </div>
    
    <div class="banner">
      <span class="banner-item" v-for="i in 3" :key="i">⚔️</span>
      <span class="banner-text">WILD BOAR • DEMON SLAYER • BEAST BREATHING</span>
      <span class="banner-item" v-for="i in 3" :key="i">⚔️</span>
    </div>
    
    <div class="signature-move">
      <span class="move-text">獣の呼吸 壱ノ型 穿ち抜く</span>
      <span class="move-effect">⚡</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InosukeHeader'
}
</script>

<style scoped>
.inosuke-header {
  margin-bottom: 30px;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
}

.boar-mask {
  position: relative;
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, var(--inosuke-gray), var(--inosuke-black));
  border-radius: 50% 50% 40% 40%;
  border: 4px solid var(--inosuke-blue);
  box-shadow: 0 8px 0 var(--inosuke-dark-blue);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: snort 3s ease infinite;
}

@keyframes snort {
  0%, 100% { transform: scale(1); }
  95% { transform: scale(1.05); }
  96% { transform: scale(0.95); }
  97% { transform: scale(1.02); }
}

.mask-eyes {
  position: absolute;
  top: 30px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  padding: 0 15px;
}

.eye-left, .eye-right {
  font-size: 25px;
  filter: drop-shadow(0 2px 2px var(--inosuke-blue));
  animation: glare 4s ease infinite;
}

@keyframes glare {
  0%, 100% { transform: scale(1); opacity: 1; }
  98% { transform: scale(1.2); opacity: 0.8; }
}

.mask-tusks {
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  padding: 0 10px;
}

.tusk-left, .tusk-right {
  font-size: 30px;
  transform: rotate(10deg);
  color: var(--inosuke-beige);
  filter: drop-shadow(2px 2px 0 var(--inosuke-brown));
}

.tusk-right {
  transform: rotate(-10deg);
}

.mask-face {
  font-size: 50px;
  transform: rotate(-5deg);
}

.header-text {
  text-align: left;
}

.header-text h1 {
  margin-bottom: 5px;
  font-size: 42px;
  color: var(--inosuke-blue);
  text-shadow: 
    4px 4px 0 var(--inosuke-dark-blue),
    2px 2px 0 var(--inosuke-beige);
}

.subtitle {
  color: var(--inosuke-beige);
  font-size: 18px;
  opacity: 0.9;
  font-style: italic;
}

.banner {
  background: var(--inosuke-gray);
  padding: 15px;
  margin: 20px 0;
  text-align: center;
  border-left: 5px solid var(--inosuke-blue);
  border-right: 5px solid var(--inosuke-blue);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
  position: relative;
}

.banner::before, .banner::after {
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  background: var(--inosuke-blue);
  transform: rotate(45deg);
}

.banner::before {
  top: -10px;
  left: 20px;
}

.banner::after {
  bottom: -10px;
  right: 20px;
}

.banner-item {
  color: var(--inosuke-blue);
  font-size: 24px;
  animation: shake 0.5s ease infinite;
}

@keyframes shake {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(10deg); }
  75% { transform: rotate(-10deg); }
}

.banner-text {
  color: var(--inosuke-beige);
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 2px;
  font-family: 'Bangers', cursive;
}

.signature-move {
  text-align: center;
  padding: 10px;
  background: rgba(74, 124, 156, 0.2);
  border-radius: 0 20px 0 20px;
  margin-top: 15px;
  border: 1px dashed var(--inosuke-blue);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.move-text {
  color: var(--inosuke-light-blue);
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  font-family: 'Bangers', cursive;
  letter-spacing: 2px;
}

.move-effect {
  color: var(--inosuke-beige);
  font-size: 24px;
  animation: spark 1s ease infinite;
}

@keyframes spark {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.3); }
}

@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    gap: 15px;
  }
  
  .header-text {
    text-align: center;
  }
  
  .header-text h1 {
    font-size: 32px;
  }
  
  .banner {
    padding: 10px;
    gap: 8px;
  }
  
  .banner-text {
    font-size: 14px;
  }
  
  .move-text {
    font-size: 14px;
  }
}
</style>