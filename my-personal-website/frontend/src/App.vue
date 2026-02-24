<template>
  <div class="container">
    <div class="site-header">
      <h1>Riri's Lair <span class="fish-emoji">🎀</span></h1>
      <p class="site-subtitle">Kuromi inspired profile website</p>
    </div>
    
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
        MISCHIEF LOG
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
      <p>Made with <span class="heart">♡</span> for Kuromi</p>
      <p class="small">☠ 悪い子ちゃん ☠</p>
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
      activeTab: 'profile' // 'profile' or 'guestbook'
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
  color: var(--kuromi-pink);
  font-size: var(--font-xxxl);
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.site-header h1::after {
  display: none; /* Remove the skull that was there */
}

.fish-emoji {
  font-size: var(--font-xxl);
  display: inline-block;
  animation: swim 3s ease infinite;
}

@keyframes swim {
  0%, 100% { transform: translateX(0) rotate(0deg); }
  25% { transform: translateX(3px) rotate(5deg); }
  75% { transform: translateX(-3px) rotate(-5deg); }
}

.site-subtitle {
  color: var(--kuromi-purple);
  font-size: var(--font-lg);
  font-style: italic;
}

/* Tab Navigation */
.tab-navigation {
  display: flex;
  justify-content: center;
  gap: 0;
  margin-bottom: 30px;
  position: relative;
  z-index: 2;
  border-bottom: 2px solid var(--kuromi-purple);
  padding-bottom: 2px;
}

.tab-btn {
  background: transparent;
  border: none;
  color: var(--text-muted);
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
  background: linear-gradient(90deg, var(--kuromi-pink), var(--kuromi-purple));
  transform: scaleX(0);
  transition: transform 0.3s ease;
  border-radius: 3px 3px 0 0;
}

.tab-btn:hover {
  color: var(--kuromi-pink);
}

.tab-btn.active {
  color: var(--kuromi-pink);
}

.tab-btn.active::after {
  transform: scaleX(1);
}

.tab-content {
  min-height: 400px;
  position: relative;
}

/* Tab Transition */
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
  border-top: 2px dashed var(--kuromi-purple);
  color: var(--text-muted);
}

.heart {
  color: var(--kuromi-pink);
  font-size: var(--font-xl);
  animation: heartbeat 1.5s ease infinite;
  display: inline-block;
}

.small {
  font-size: var(--font-sm);
  opacity: 0.7;
}

@keyframes heartbeat {
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
  
  .fish-emoji {
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
  }
  
  .tab-btn {
    width: 100%;
    padding: 12px 20px;
    font-size: var(--font-base);
    border: 2px solid var(--kuromi-purple);
    border-radius: 50px;
    margin-bottom: 5px;
  }
  
  .tab-btn::after {
    display: none;
  }
  
  .tab-btn.active {
    background: linear-gradient(135deg, var(--kuromi-pink), var(--kuromi-purple));
    color: var(--kuromi-black);
    border-color: var(--kuromi-white);
  }
  
  .tab-btn:hover {
    background: rgba(255, 158, 181, 0.1);
  }
  
  .tab-btn.active:hover {
    background: linear-gradient(135deg, var(--kuromi-pink), var(--kuromi-purple));
  }
}

@media (max-width: 480px) {
  .tab-btn {
    padding: 10px 15px;
    font-size: var(--font-sm);
  }
}
</style>