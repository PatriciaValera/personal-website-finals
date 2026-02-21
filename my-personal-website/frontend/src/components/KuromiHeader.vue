<template>
  <header class="kuromi-header">
    <!-- Top bar with logo and language selector -->
    <div class="top-bar">
      <div class="logo-container">
        <h1 class="logo">
          <span class="logo-icon">☠</span>
          KUROMI
          <span class="logo-icon">♡</span>
        </h1>
      </div>
      
      <div class="language-selector">
        <button class="lang-btn" :class="{ active: currentLang === 'jp' }" @click="setLang('jp')">
          JP
        </button>
        <span class="lang-separator">|</span>
        <button class="lang-btn" :class="{ active: currentLang === 'en' }" @click="setLang('en')">
          EN
        </button>
      </div>
    </div>

    <!-- Navigation Menu -->
    <nav class="nav-menu">
      <button 
        v-for="item in navItems" 
        :key="item.label"
        class="nav-item"
        :class="{ active: currentNav === item.label.toLowerCase() }"
        @click="setNav(item.label.toLowerCase())"
      >
        {{ item.label }}
        <span v-if="item.hasLive" class="live-badge">LIVE</span>
      </button>
    </nav>

    <!-- Mobile Menu Button (visible only on mobile) -->
    <button class="mobile-menu-btn" @click="toggleMobileMenu" v-if="isMobile">
      <span class="menu-icon">☰</span>
    </button>

    <!-- Mobile Navigation Dropdown -->
    <div v-if="isMobile && mobileMenuOpen" class="mobile-nav">
      <button 
        v-for="item in navItems" 
        :key="item.label"
        class="mobile-nav-item"
        @click="selectMobileNav(item.label.toLowerCase())"
      >
        {{ item.label }}
        <span v-if="item.hasLive" class="live-badge">LIVE</span>
      </button>
    </div>

    <!-- Decorative banner -->
    <div class="header-banner">
      <div class="banner-content">
        <span class="banner-text" v-for="i in 3" :key="i">
          ✧  KUROMI OFFICIAL  ✧
        </span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'KuromiHeader',
  data() {
    return {
      currentLang: 'en',
      currentNav: 'top',
      mobileMenuOpen: false,
      isMobile: window.innerWidth <= 768,
      navItems: [
        { label: 'TOP', hasLive: false },
        { label: 'NEWS', hasLive: false },
        { label: 'LIVE & SCHEDULE', hasLive: true },
        { label: 'WORKS', hasLive: false },
        { label: 'SHOP', hasLive: false }
      ]
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    setLang(lang) {
      this.currentLang = lang
      this.$emit('language-change', lang)
    },
    setNav(nav) {
      this.currentNav = nav
      if (this.isMobile) {
        this.mobileMenuOpen = false
      }
      this.$emit('nav-change', nav)
    },
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen
    },
    selectMobileNav(nav) {
      this.setNav(nav)
      this.mobileMenuOpen = false
    },
    handleResize() {
      this.isMobile = window.innerWidth <= 768
      if (!this.isMobile) {
        this.mobileMenuOpen = false
      }
    }
  }
}
</script>

<style scoped>
.kuromi-header {
  background: linear-gradient(180deg, var(--kuromi-black) 0%, var(--kuromi-gray) 100%);
  border-bottom: 3px solid var(--kuromi-pink);
  position: relative;
  margin-bottom: 30px;
  width: 100%;
}

/* Top Bar Styles */
.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  border-bottom: 1px solid var(--kuromi-purple);
  flex-wrap: wrap;
  gap: 15px;
}

.logo-container {
  flex: 1;
}

.logo {
  font-size: 32px;
  font-weight: 700;
  color: var(--kuromi-pink);
  letter-spacing: 2px;
  display: inline-block;
  margin: 0;
  font-family: 'Quicksand', sans-serif;
}

.logo-icon {
  display: inline-block;
  margin: 0 10px;
  font-size: 28px;
  animation: bounce 2s ease infinite;
}

.logo-icon:first-child {
  animation-delay: 0s;
}

.logo-icon:last-child {
  animation-delay: 1s;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

/* Language Selector */
.language-selector {
  display: flex;
  align-items: center;
  gap: 5px;
  background: var(--kuromi-light-gray);
  padding: 5px 15px;
  border-radius: 30px;
  border: 2px solid var(--kuromi-pink);
}

.lang-btn {
  background: none;
  border: none;
  color: var(--text-muted);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 20px;
  transition: all 0.3s ease;
  font-family: 'Poppins', sans-serif;
}

.lang-btn.active {
  color: var(--kuromi-pink);
  background: var(--kuromi-black);
}

.lang-btn:hover {
  color: var(--kuromi-pink);
  transform: scale(1.1);
}

.lang-separator {
  color: var(--kuromi-purple);
  font-weight: bold;
}

/* Navigation Menu */
.nav-menu {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 10px 20px;
  background: var(--kuromi-gray);
  flex-wrap: wrap;
}

.nav-item {
  background: none;
  border: none;
  color: var(--text-light);
  font-size: 14px;
  font-weight: 600;
  padding: 10px 20px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  font-family: 'Poppins', sans-serif;
  letter-spacing: 0.5px;
  border-radius: 25px;
}

.nav-item:hover {
  color: var(--kuromi-pink);
  background: var(--kuromi-black);
  transform: translateY(-2px);
}

.nav-item.active {
  color: var(--kuromi-pink);
  background: var(--kuromi-black);
}

.nav-item.active::after {
  content: "☠";
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 12px;
  color: var(--kuromi-pink);
  animation: bounce 1s ease infinite;
}

.live-badge {
  background: var(--kuromi-pink);
  color: var(--kuromi-black);
  font-size: 10px;
  padding: 2px 6px;
  border-radius: 10px;
  margin-left: 5px;
  font-weight: bold;
  animation: pulse 1.5s ease infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

/* Mobile Menu Button */
.mobile-menu-btn {
  display: none;
  position: absolute;
  top: 20px;
  right: 20px;
  background: var(--kuromi-pink);
  border: 2px solid var(--kuromi-white);
  color: var(--kuromi-black);
  font-size: 24px;
  padding: 8px 15px;
  border-radius: 15px;
  cursor: pointer;
  z-index: 100;
}

.menu-icon {
  display: block;
  font-size: 24px;
}

/* Mobile Navigation */
.mobile-nav {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: var(--kuromi-gray);
  border-bottom: 3px solid var(--kuromi-pink);
  padding: 10px;
  z-index: 99;
  animation: slideDown 0.3s ease;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.mobile-nav-item {
  width: 100%;
  background: var(--kuromi-black);
  border: 1px solid var(--kuromi-purple);
  color: var(--text-light);
  font-size: 16px;
  font-weight: 600;
  padding: 15px;
  margin: 5px 0;
  border-radius: 15px;
  cursor: pointer;
  text-align: left;
  transition: all 0.3s ease;
}

.mobile-nav-item:hover {
  background: var(--kuromi-pink);
  color: var(--kuromi-black);
  transform: translateX(5px);
}

/* Header Banner */
.header-banner {
  background: linear-gradient(90deg, var(--kuromi-pink), var(--kuromi-purple));
  padding: 8px 0;
  overflow: hidden;
  white-space: nowrap;
  border-top: 2px solid var(--kuromi-white);
  border-bottom: 2px solid var(--kuromi-white);
}

.banner-content {
  display: inline-block;
  animation: scrollBanner 20s linear infinite;
}

.banner-text {
  color: var(--kuromi-black);
  font-weight: bold;
  font-size: 14px;
  margin: 0 30px;
  letter-spacing: 2px;
}

@keyframes scrollBanner {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* Responsive Design */
@media (max-width: 768px) {
  .top-bar {
    padding: 15px;
    flex-direction: column;
    text-align: center;
    padding-right: 60px;
  }

  .logo {
    font-size: 24px;
  }

  .logo-icon {
    font-size: 20px;
  }

  .nav-menu {
    display: none;
  }

  .mobile-menu-btn {
    display: block;
  }

  .language-selector {
    align-self: center;
  }

  .header-banner {
    padding: 5px 0;
  }

  .banner-text {
    font-size: 12px;
    margin: 0 15px;
  }
}

@media (max-width: 480px) {
  .logo {
    font-size: 20px;
  }

  .logo-icon {
    font-size: 16px;
    margin: 0 5px;
  }

  .language-selector {
    padding: 3px 10px;
  }

  .lang-btn {
    font-size: 12px;
    padding: 3px 8px;
  }

  .mobile-menu-btn {
    top: 15px;
    right: 15px;
    padding: 5px 12px;
    font-size: 20px;
  }
}
</style>