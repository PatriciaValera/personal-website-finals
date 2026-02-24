<template>
  <div class="container">
    <div class="site-header">
      <h1>Riri's Lair</h1>
      <p class="site-subtitle">Kuromi inspired profile website</p>
    </div>
    
    <!-- Tab Navigation -->
    <div class="tab-navigation">
      <button 
        class="tab-btn" 
        :class="{ active: activeTab === 'profile' }"
        @click="activeTab = 'profile'"
      >
        <span class="tab-icon">👤</span>
        Profile
        <span class="tab-decor">☠</span>
      </button>
      <button 
        class="tab-btn" 
        :class="{ active: activeTab === 'guestbook' }"
        @click="activeTab = 'guestbook'"
      >
        <span class="tab-icon">📝</span>
        Mischief Log
        <span class="tab-decor">♡</span>
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
}

.site-header h1::after {
  content: "☠";
  font-size: 0.8em;
  margin-left: 10px;
  opacity: 0.7;
  color: var(--kuromi-purple);
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
  gap: 20px;
  margin-bottom: 30px;
  position: relative;
  z-index: 2;
}

.tab-btn {
  background: var(--kuromi-gray);
  border: 2px solid var(--kuromi-purple);
  color: var(--text-light);
  padding: 15px 40px;
  font-size: var(--font-lg);
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 5px 0 var(--kuromi-dark-purple);
}

.tab-btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: left 0.5s ease;
}

.tab-btn:hover::before {
  left: 100%;
}

.tab-btn:hover {
  transform: translateY(-2px);
  border-color: var(--kuromi-pink);
  box-shadow: 0 7px 0 var(--kuromi-dark-purple);
}

.tab-btn.active {
  background: linear-gradient(135deg, var(--kuromi-pink), var(--kuromi-purple));
  color: var(--kuromi-black);
  border-color: var(--kuromi-white);
  transform: translateY(-2px);
  box-shadow: 0 7px 0 var(--kuromi-dark-purple);
}

.tab-btn.active .tab-decor {
  opacity: 1;
  transform: scale(1);
}

.tab-icon {
  font-size: var(--font-xl);
}

.tab-decor {
  opacity: 0.5;
  transition: all 0.3s ease;
  font-size: var(--font-lg);
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
  }
  
  .site-subtitle {
    font-size: var(--font-base);
  }
  
  .tab-navigation {
    flex-direction: column;
    gap: 10px;
    padding: 0 20px;
  }
  
  .tab-btn {
    width: 100%;
    padding: 12px 20px;
    font-size: var(--font-base);
    justify-content: center;
  }
  
  .tab-icon {
    font-size: var(--font-lg);
  }
  
  .tab-decor {
    display: none;
  }
}

@media (max-width: 480px) {
  .tab-btn {
    padding: 10px 15px;
  }
}
</style>