<template>
  <div class="bloom-guestbook-entry">
    <div class="entry-decoration">
      <span class="decor-left">🔥</span>
      <span class="decor-right">✨</span>
    </div>
    
    <div class="entry-content">
      <div class="entry-header">
        <div class="entry-author">
          <span class="author-icon">👤</span>
          <strong class="author-name">{{ entry.name }}</strong>
          <span v-if="isWinxMember(entry.name)" class="winx-badge">WINX</span>
        </div>
        <div class="entry-date">
          <span class="date-icon">⏰</span>
          {{ formatDate(entry.created_at) }}
        </div>
      </div>
      
      <div class="entry-message">
        "{{ entry.message }}"
      </div>
      
      <div v-if="entry.email" class="entry-footer">
        <span class="email-icon">📧</span>
        <span class="entry-email">{{ entry.email }}</span>
      </div>
      
      <div class="entry-transformation">
        <span class="transformation-tag" :class="getRandomTransformation()">
          {{ getRandomTransformation() }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BloomGuestbookEntry',
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
        month: 'short', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }
      return date.toLocaleDateString('en-US', options)
    },
    
    isWinxMember(name) {
      const winxNames = ['stella', 'flora', 'musa', 'tecna', 'aisha', 'bloom', 'layla']
      return winxNames.includes(name.toLowerCase())
    },
    
    getRandomTransformation() {
      const transformations = ['Believix', 'Enchantix', 'Charmix', 'Bloomix', 'Sirenix', 'Harmonix', 'Mythix']
      const randomIndex = Math.floor(Math.random() * transformations.length)
      return transformations[randomIndex]
    }
  }
}
</script>

<style scoped>
.bloom-guestbook-entry {
  background: #fff4e6;
  border: 2px solid #ffaa33;
  border-radius: 20px;
  padding: 20px;
  position: relative;
  transition: all 0.3s ease;
}

.bloom-guestbook-entry:hover {
  transform: translateY(-3px);
  border-color: #ff7b24;
  background: #fff9f0;
}

.entry-decoration {
  position: absolute;
  top: 5px;
  left: 15px;
  right: 15px;
  display: flex;
  justify-content: space-between;
  opacity: 0.5;
  pointer-events: none;
}

.decor-left {
  color: #ff4500;
  font-size: 14px;
  animation: flameFlicker 2s ease infinite;
}

.decor-right {
  color: #ffd700;
  font-size: 14px;
  animation: sparkle 2s ease infinite 0.5s;
}

@keyframes flameFlicker {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.2); }
}

@keyframes sparkle {
  0%, 100% { opacity: 0.5; transform: rotate(0deg); }
  50% { opacity: 1; transform: rotate(10deg); }
}

.entry-content {
  position: relative;
  z-index: 1;
}

.entry-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  flex-wrap: wrap;
  gap: 10px;
}

.entry-author {
  display: flex;
  align-items: center;
  gap: 8px;
  background: white;
  padding: 5px 15px;
  border-radius: 50px;
  border: 1px solid #ffaa33;
}

.author-icon {
  font-size: 14px;
}

.author-name {
  color: #ff4500;
  font-size: 14px;
  font-weight: 600;
}

.winx-badge {
  background: #ff7b24;
  color: white;
  font-size: 10px;
  padding: 2px 6px;
  border-radius: 10px;
  font-weight: bold;
  margin-left: 5px;
  animation: glow 2s ease infinite;
}

@keyframes glow {
  0%, 100% { opacity: 0.8; }
  50% { opacity: 1; background: #ff4500; }
}

.entry-date {
  display: flex;
  align-items: center;
  gap: 5px;
  color: #666;
  font-size: 12px;
  background: white;
  padding: 5px 15px;
  border-radius: 50px;
  border: 1px solid #ffaa33;
}

.date-icon {
  color: #ff7b24;
  font-size: 12px;
}

.entry-message {
  background: white;
  padding: 20px;
  border-radius: 15px;
  margin: 15px 0;
  line-height: 1.6;
  color: #333;
  font-style: italic;
  border-left: 4px solid #ff4500;
  position: relative;
  font-size: 14px;
}

.entry-message::before {
  content: "🔥";
  position: absolute;
  bottom: 5px;
  right: 10px;
  opacity: 0.1;
  font-size: 30px;
  color: #ff4500;
}

.entry-footer {
  display: flex;
  align-items: center;
  gap: 8px;
  padding-top: 10px;
  border-top: 1px dashed #ffaa33;
  font-size: 12px;
  color: #666;
}

.email-icon {
  color: #ff7b24;
}

.entry-email {
  word-break: break-all;
}

.entry-transformation {
  position: absolute;
  bottom: 5px;
  right: 5px;
}

.transformation-tag {
  font-size: 10px;
  padding: 3px 8px;
  border-radius: 12px;
  font-weight: 600;
  text-transform: uppercase;
  background: #ffd700;
  color: #ff4500;
  border: 1px solid #ff7b24;
  opacity: 0.7;
}

.transformation-tag.Believix {
  background: #ffd700;
  color: #ff4500;
}

.transformation-tag.Enchantix {
  background: #98fb98;
  color: #228b22;
}

.transformation-tag.Bloomix {
  background: #ff7b24;
  color: white;
}

.transformation-tag.Sirenix {
  background: #87ceeb;
  color: #00008b;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .bloom-guestbook-entry {
    padding: 15px;
  }
  
  .entry-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .entry-author, .entry-date {
    width: 100%;
  }
  
  .entry-message {
    padding: 15px;
    font-size: 13px;
  }
  
  .entry-message::before {
    font-size: 20px;
  }
}

@media (max-width: 480px) {
  .entry-message {
    padding: 12px;
    font-size: 12px;
  }
  
  .entry-footer {
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
  }
  
  .transformation-tag {
    font-size: 8px;
    padding: 2px 6px;
  }
}
</style>