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
    
    <div class="site-header">
      <h1>Riri's Realm <span class="star-icon">✧</span></h1>
      <p class="site-subtitle">purple aesthetic profile</p>
    </div>
    
    <!-- Tab Content -->
    <transition name="fade" mode="out-in">
      <div :key="activeTab" class="tab-content">
        <Profile v-if="activeTab === 'profile'" />
        <Guestbook v-else-if="activeTab === 'guestbook'" />
      </div>
    </transition>
    
    <div class="footer">
      <p>Made with <span class="heart">✧</span> in purple</p>
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
  }
}
</script>

<style scoped>
.site-header {
  text-align: center;
  margin-bottom: 30px;
}

.site-header h1 {
  margin-bottom: 5px;
  color: var(--white-pure); /* White text */
  font-size: var(--font-xxxl);
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.site-header h1::after {
  display: none;
}

.star-icon {
  font-size: var(--font-xxl);
  display: inline-block;
  animation: twinkle 2s ease infinite;
  color: var(--purple-accent);
  text-shadow: 0 0 15px var(--purple-glow);
}

@keyframes twinkle {
  0%, 100% { opacity: 0.8; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.2); text-shadow: 0 0 25px var(--purple-accent); }
}

.site-subtitle {
  color: var(--white-pure); /* White text */
  font-size: var(--font-lg);
  font-style: italic;
  text-shadow: 0 0 8px var(--purple-glow);
}

/* Tab Navigation */
.tab-navigation {
  display: flex;
  justify-content: center;
  gap: 0;
  margin-bottom: 20px;
  position: relative;
  z-index: 2;
  border-bottom: 2px solid var(--purple-primary);
  padding-bottom: 2px;
}

.tab-btn {
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.6); /* White with opacity */
  padding: 12px 40px;
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
  color: var(--white-pure); /* White text */
  text-shadow: 0 0 8px var(--purple-accent);
}

.tab-btn.active {
  color: var(--white-pure); /* White text */
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
  margin-top: 40px;
  padding-top: 20px;
  border-top: 2px dashed var(--purple-primary);
  color: rgba(255, 255, 255, 0.7); /* White with opacity */
}

.heart {
  color: var(--purple-accent);
  font-size: var(--font-xl);
  animation: pulse 1.5s ease infinite;
  display: inline-block;
  text-shadow: 0 0 10px var(--purple-glow);
}

.small {
  font-size: var(--font-sm);
  opacity: 0.7;
  color: rgba(255, 255, 255, 0.7); /* White with opacity */
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}

/* Responsive Design */
@media (max-width: 768px) {
  .site-header h1 {
    font-size: var(--font-xxl);
    flex-direction: column;
    gap: 5px;
  }
  
  .star-icon {
    font-size: var(--font-xl);
  }
  
  .site-subtitle {
    font-size: var(--font-base);
  }
  
  .tab-navigation {
    flex-direction: column;
    gap: 5px;
    border-bottom: none;
    padding-bottom: 0;
    margin-bottom: 15px;
  }
  
  .tab-btn {
    width: 100%;
    padding: 12px 20px;
    font-size: var(--font-base);
    border: 2px solid var(--purple-primary);
    border-radius: 50px;
    margin-bottom: 5px;
  }
  
  .tab-btn::after {
    display: none;
  }
  
  .tab-btn.active {
    background: linear-gradient(135deg, var(--purple-primary), var(--purple-light));
    color: var(--white-pure); /* White text */
    border-color: var(--purple-pastel);
    box-shadow: 0 0 15px var(--purple-glow);
  }
  
  .tab-btn:hover {
    background: rgba(107, 63, 140, 0.2);
  }
}

@media (max-width: 480px) {
  .tab-btn {
    padding: 10px 15px;
    font-size: var(--font-sm);
  }
}
</style>