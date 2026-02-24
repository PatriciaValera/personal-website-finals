<template>
  <div class="container">
    <!-- Tab Navigation -->
    <div class="tab-navigation">
      <button 
        class="tab-btn" 
        :class="{ active: activeTab === 'profile' }"
        @click="activeTab = 'profile'"
      >
        PROFILE
      </button>
      <button 
        class="tab-btn" 
        :class="{ active: activeTab === 'guestbook' }"
        @click="activeTab = 'guestbook'"
      >
        GUESTBOOK
      </button>
    </div>
    
    <!-- Tab Content -->
    <transition name="fade" mode="out-in">
      <div :key="activeTab" class="tab-content">
        <Profile v-if="activeTab === 'profile'" />
        <Guestbook v-else-if="activeTab === 'guestbook'" />
      </div>
    </transition>
    
    <div class="footer">
      <p>Made with <span class="heart-outline">♡</span> in purple</p>
      <p class="small">✦ purple dreams ✦</p>
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
  },
  data() {
    return {
      activeTab: 'profile'
    }
  },
  methods: {
    switchTab(tab) {
      this.activeTab = tab
    }
  }
}
</script>

<style scoped>
/* Tab Navigation */
.tab-navigation {
  display: flex;
  justify-content: center;
  gap: 0;
  margin-bottom: 30px; /* Increased from 15px to 30px for better spacing */
  position: relative;
  z-index: 2;
  border-bottom: 2px solid var(--purple-primary);
  padding-bottom: 2px;
}

.tab-btn {
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.6);
  padding: 8px 35px;
  font-size: var(--font-lg);
  font-weight: 600;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  text-transform: uppercase;
  font-family: 'Quicksand', sans-serif;
}

.tab-btn::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, var(--purple-primary), var(--purple-accent));
  transform: scaleX(0);
  transition: transform 0.3s ease;
  border-radius: 3px 3px 0 0;
  box-shadow: 0 0 10px var(--purple-glow);
}

.tab-btn:hover {
  color: var(--white-pure);
  text-shadow: 0 0 8px var(--purple-accent);
}

.tab-btn.active {
  color: var(--white-pure);
}

.tab-btn.active::after {
  transform: scaleX(1);
}

.tab-content {
  min-height: 400px;
  position: relative;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.footer {
  text-align: center;
  margin-top: 35px;
  padding-top: 15px;
  border-top: 2px dashed var(--purple-primary);
  color: rgba(255, 255, 255, 0.7);
}

.heart-outline {
  color: transparent;
  font-size: var(--font-xl);
  animation: pulse 1.5s ease infinite;
  display: inline-block;
  text-shadow: 
    0 0 0 var(--purple-accent),
    0 0 10px var(--purple-glow);
  -webkit-text-stroke: 2px var(--purple-accent);
  text-stroke: 2px var(--purple-accent);
  margin: 0 2px;
}

@keyframes pulse {
  0%, 100% { 
    transform: scale(1);
    text-shadow: 
      0 0 0 var(--purple-accent),
      0 0 10px var(--purple-glow);
  }
  50% { 
    transform: scale(1.2);
    text-shadow: 
      0 0 0 var(--purple-accent),
      0 0 20px var(--purple-glow);
  }
}

.small {
  font-size: var(--font-sm);
  opacity: 0.7;
  color: rgba(255, 255, 255, 0.7);
}

/* Responsive Design */
@media (max-width: 768px) {
  .tab-navigation {
    flex-direction: column;
    gap: 5px;
    border-bottom: none;
    padding-bottom: 0;
    margin-bottom: 20px; /* Adjusted for mobile */
  }
  
  .tab-btn {
    width: 100%;
    padding: 8px 15px;
    font-size: var(--font-base);
    border: 2px solid var(--purple-primary);
    border-radius: 45px;
    margin-bottom: 3px;
  }
  
  .tab-btn::after {
    display: none;
  }
  
  .tab-btn.active {
    background: linear-gradient(135deg, var(--purple-primary), var(--purple-light));
    color: var(--white-pure);
    border-color: var(--purple-pastel);
    box-shadow: 0 0 15px var(--purple-glow);
  }
  
  .tab-btn:hover {
    background: rgba(107, 63, 140, 0.2);
  }
}

@media (max-width: 480px) {
  .tab-btn {
    padding: 8px 12px;
    font-size: var(--font-sm);
  }
}
</style>