<template>
  <div class="aorun-guestbook-entry">
    <div class="entry-decoration">
      <span class="decor-left">💜</span>
      <span class="decor-right">🌀</span>
    </div>
    
    <div class="entry-content">
      <div class="entry-header">
        <div class="entry-author">
          <span class="author-icon">👤</span>
          <strong class="author-name">{{ entry.name }}</strong>
          <span v-if="isDragonClan(entry.name)" class="dragon-badge">🐉</span>
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
      
      <div class="entry-dimension">
        <span class="dimension-tag" :class="getRandomDimension()">
          {{ getRandomDimension() }} Dimension
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AoRunGuestbookEntry',
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
    
    isDragonClan(name) {
      const dragonNames = ['ao', 'dragon', 'long', '龙']
      const lowerName = name.toLowerCase()
      return dragonNames.some(dragon => lowerName.includes(dragon))
    },
    
    getRandomDimension() {
      const dimensions = ['Western Sea', 'Eastern Sea', 'Southern Sea', 'Northern Sea', 'Chentang Pass', 'Heavenly']
      const randomIndex = Math.floor(Math.random() * dimensions.length)
      return dimensions[randomIndex]
    }
  }
}
</script>

<style scoped>
.aorun-guestbook-entry {
  background: linear-gradient(135deg, #2d1b4a, #1a1025);
  border: 2px solid #9370db;
  border-radius: 20px;
  padding: 20px;
  position: relative;
  transition: all 0.3s ease;
  box-shadow: 0 0 15px rgba(147, 112, 219, 0.2);
}

.aorun-guestbook-entry:hover {
  transform: translateY(-3px);
  border-color: #b8a9d4;
  box-shadow: 0 0 25px rgba(147, 112, 219, 0.4);
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
  color: #b8a9d4;
  font-size: 14px;
  animation: pulse 2s ease infinite;
}

.decor-right {
  color: #9370db;
  font-size: 14px;
  animation: spin 3s linear infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.2); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
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
  background: #1a1025;
  padding: 5px 15px;
  border-radius: 50px;
  border: 1px solid #9370db;
}

.author-icon {
  font-size: 14px;
  color: #b8a9d4;
}

.author-name {
  color: #e6d9ff;
  font-size: 14px;
  font-weight: 600;
}

.dragon-badge {
  background: #4a2b6e;
  color: #b8a9d4;
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 10px;
  margin-left: 5px;
  animation: glow 2s ease infinite;
}

@keyframes glow {
  0%, 100% { opacity: 0.8; }
  50% { opacity: 1; filter: drop-shadow(0 0 5px #9370db); }
}

.entry-date {
  display: flex;
  align-items: center;
  gap: 5px;
  color: #b8a9d4;
  font-size: 12px;
  background: #1a1025;
  padding: 5px 15px;
  border-radius: 50px;
  border: 1px solid #4a2b6e;
}

.date-icon {
  color: #9370db;
  font-size: 12px;
}

.entry-message {
  background: #1a1025;
  padding: 20px;
  border-radius: 15px;
  margin: 15px 0;
  line-height: 1.6;
  color: #e6d9ff;
  font-style: italic;
  border-left: 4px solid #9370db;
  position: relative;
  font-size: 14px;
}

.entry-message::before {
  content: "🌀";
  position: absolute;
  bottom: 5px;
  right: 10px;
  opacity: 0.1;
  font-size: 30px;
  color: #b8a9d4;
  transform: rotate(10deg);
}

.entry-footer {
  display: flex;
  align-items: center;
  gap: 8px;
  padding-top: 10px;
  border-top: 1px dashed #4a2b6e;
  font-size: 12px;
  color: #b8a9d4;
}

.email-icon {
  color: #9370db;
}

.entry-email {
  word-break: break-all;
}

.entry-dimension {
  position: absolute;
  bottom: 5px;
  right: 5px;
}

.dimension-tag {
  font-size: 10px;
  padding: 3px 8px;
  border-radius: 12px;
  font-weight: 600;
  text-transform: uppercase;
  background: #4a2b6e;
  color: #e6d9ff;
  border: 1px solid #9370db;
  opacity: 0.7;
}

.dimension-tag.Western {
  background: #4a2b6e;
  color: #b8a9d4;
}

.dimension-tag.Eastern {
  background: #2d1b4a;
  color: #9370db;
}

.dimension-tag.Southern {
  background: #6b4b8a;
  color: #e6d9ff;
}

.dimension-tag.Northern {
  background: #1a1025;
  color: #b8a9d4;
  border-color: #9370db;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .aorun-guestbook-entry {
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
  
  .dimension-tag {
    font-size: 8px;
    padding: 2px 6px;
  }
  
  .entry-decoration {
    font-size: 10px;
  }
}
</style>