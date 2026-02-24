<template>
  <div class="fairy-tale-entry">
    <div class="entry-ribbon">
      <span class="ribbon-left">👑</span>
      <span class="ribbon-right">✨</span>
    </div>
    
    <div class="entry-content">
      <div class="entry-header">
        <div class="entry-author">
          <span class="author-crown">👸</span>
          <div class="author-info">
            <strong class="author-name">{{ entry.name }}</strong>
            <span class="fairy-badge">Fairy Tale Friend</span>
          </div>
        </div>
        
        <div class="entry-time">
          <span class="time-icon">⏰</span>
          <span class="time-text">{{ formatDate(entry.created_at) }}</span>
        </div>
      </div>
      
      <div class="message-box">
        <div class="message-decoration">
          <span class="quote-left">"</span>
          <span class="quote-right">"</span>
        </div>
        <p class="entry-message">{{ entry.message }}</p>
        <div class="magic-seal">
          <span class="seal-icon">✨</span>
        </div>
      </div>
      
      <div v-if="entry.email" class="entry-footer">
        <span class="footer-icon">💌</span>
        <span class="footer-email">{{ entry.email }}</span>
        <span class="magic-sparkle">✨</span>
      </div>
      
      <div class="pumpkin-stamp">
        <span class="stamp">🎃</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GuestbookEntry',
  props: {
    entry: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString)
      const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      }
      return date.toLocaleDateString('en-US', options)
    }
  }
}
</script>

<style scoped>
.fairy-tale-entry {
  background: white;
  border: 3px solid var(--rose-pink);
  border-radius: 30px;
  margin-bottom: 20px;
  position: relative;
  transition: all 0.3s ease;
  overflow: hidden;
}

.fairy-tale-entry:hover {
  transform: translateY(-5px) scale(1.02);
  border-color: var(--pumpkin-orange);
  box-shadow: 
    0 10px 0 var(--pumpkin-orange),
    0 0 30px rgba(255, 215, 0, 0.2);
}

.entry-ribbon {
  position: absolute;
  top: 10px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  font-size: 18px;
  color: var(--fairy-gold);
  opacity: 0.5;
  pointer-events: none;
}

.ribbon-left {
  animation: ribbonFloat 3s ease infinite;
}

.ribbon-right {
  animation: ribbonFloat 3s ease infinite reverse;
}

@keyframes ribbonFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}

.entry-content {
  padding: 25px;
  position: relative;
  z-index: 1;
}

.entry-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 15px;
}

.entry-author {
  display: flex;
  align-items: center;
  gap: 15px;
  background: linear-gradient(135deg, var(--rose-pink), var(--cinderella-blue));
  padding: 8px 20px;
  border-radius: 50px;
  border: 2px solid var(--fairy-gold);
}

.author-crown {
  font-size: 24px;
  animation: crownWobble 3s ease infinite;
}

@keyframes crownWobble {
  0%, 100% { transform: rotate(-5deg); }
  50% { transform: rotate(5deg); }
}

.author-info {
  display: flex;
  flex-direction: column;
}

.author-name {
  color: white;
  font-size: 18px;
  text-shadow: 1px 1px 0 var(--pumpkin-orange);
}

.fairy-badge {
  font-size: 11px;
  color: var(--fairy-gold);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.entry-time {
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--cinderella-blue);
  padding: 8px 15px;
  border-radius: 50px;
  border: 2px solid white;
  color: white;
  font-size: 14px;
}

.time-icon {
  font-size: 16px;
}

.message-box {
  background: linear-gradient(135deg, #fff9f9, #fff0f5);
  padding: 25px;
  border-radius: 30px;
  margin: 15px 0;
  position: relative;
  border: 2px dashed var(--rose-pink);
}

.message-decoration {
  position: absolute;
  top: 5px;
  left: 15px;
  right: 15px;
  display: flex;
  justify-content: space-between;
  font-size: 40px;
  color: var(--rose-pink);
  opacity: 0.2;
  pointer-events: none;
}

.quote-left, .quote-right {
  font-family: serif;
  font-size: 60px;
}

.entry-message {
  position: relative;
  z-index: 1;
  line-height: 1.8;
  font-size: 16px;
  color: var(--text-dark);
  padding: 10px 0;
}

.magic-seal {
  position: absolute;
  bottom: 10px;
  right: 15px;
}

.seal-icon {
  font-size: 24px;
  opacity: 0.3;
  animation: sparkleRotate 4s linear infinite;
}

@keyframes sparkleRotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.entry-footer {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-top: 15px;
  border-top: 2px dashed var(--rose-pink);
  font-size: 14px;
  color: var(--magic-purple);
  flex-wrap: wrap;
}

.footer-icon {
  font-size: 18px;
}

.footer-email {
  word-break: break-all;
  flex: 1;
}

.magic-sparkle {
  font-size: 16px;
  animation: sparkle 2s ease infinite;
}

.pumpkin-stamp {
  position: absolute;
  bottom: 10px;
  right: 15px;
  opacity: 0.1;
}

.stamp {
  font-size: 50px;
  transform: rotate(-10deg);
  transition: all 0.3s ease;
}

.fairy-tale-entry:hover .stamp {
  opacity: 0.3;
  transform: rotate(-5deg) scale(1.1);
}

/* Animation for new entries */
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fairy-tale-entry {
  animation: slideIn 0.5s ease-out;
}

@media (max-width: 480px) {
  .entry-content {
    padding: 15px;
  }
  
  .entry-header {
    flex-direction: column;
    align-items: stretch;
  }
  
  .entry-author {
    width: 100%;
    justify-content: center;
  }
  
  .entry-time {
    width: 100%;
    justify-content: center;
  }
  
  .message-box {
    padding: 15px;
  }
  
  .message-decoration {
    font-size: 30px;
  }
  
  .pumpkin-stamp {
    display: none;
  }
}
</style>