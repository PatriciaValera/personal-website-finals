<template>
  <div class="container">
    <InosukeHeader />
    
    <Profile />
    
    <div class="divider">
      <span class="divider-text">⚔️ BEAST BREATHING TECHNIQUE ⚔️</span>
    </div>
    
    <Guestbook />
    
    <div class="footer">
      <p>⚔️ 猪突猛進！ (Boar Rush!) ⚔️</p>
      <div class="footer-signature">
        <span>🐗 Inosuke Hashibira 🐗</span>
        <span class="demon-slayer">Demon Slayer Corps</span>
      </div>
      <p class="small">"I'm the strongest! ...Did anyone bring food?"</p>
    </div>
  </div>
</template>

<script>
import InosukeHeader from './components/InosukeHeader.vue'
import Profile from './components/Profile.vue'
import Guestbook from './components/Guestbook.vue'

export default {
  name: 'App',
  components: {
    InosukeHeader,
    Profile,
    Guestbook
  }
}
</script>

<style scoped>
.divider {
  margin: 50px 0;
  text-align: center;
  position: relative;
}

.divider::before,
.divider::after {
  content: "";
  position: absolute;
  top: 50%;
  width: 35%;
  height: 3px;
  background: linear-gradient(90deg, 
    transparent, 
    var(--inosuke-blue), 
    var(--inosuke-beige), 
    var(--inosuke-blue), 
    transparent
  );
}

.divider::before {
  left: 0;
}

.divider::after {
  right: 0;
}

.divider-text {
  background: var(--inosuke-black);
  padding: 10px 30px;
  color: var(--inosuke-beige);
  font-weight: bold;
  font-size: 18px;
  font-family: 'Bangers', cursive;
  letter-spacing: 2px;
  border: 2px solid var(--inosuke-blue);
  border-radius: 0 30px 0 30px;
  box-shadow: 5px 5px 0 var(--inosuke-dark-blue);
}

.footer {
  text-align: center;
  margin-top: 50px;
  padding: 30px 20px 20px;
  border-top: 3px solid var(--inosuke-blue);
  color: var(--text-muted);
  position: relative;
}

.footer::before {
  content: "⚔️";
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--inosuke-black);
  padding: 0 20px;
  font-size: 30px;
  color: var(--inosuke-beige);
}

.footer-signature {
  margin: 15px 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 18px;
  color: var(--inosuke-light-blue);
  font-weight: bold;
}

.demon-slayer {
  font-size: 14px;
  color: var(--inosuke-beige);
  letter-spacing: 2px;
}

.small {
  font-size: 14px;
  opacity: 0.7;
  font-style: italic;
  margin-top: 10px;
}

@media (max-width: 768px) {
  .divider::before,
  .divider::after {
    width: 25%;
  }
  
  .divider-text {
    font-size: 14px;
    padding: 8px 15px;
  }
}
</style>