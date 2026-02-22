<template>
  <div class="entry-card">
    <div class="entry-header">
      <span class="entry-name">{{ entry.name }}</span>
      <span class="entry-date">{{ formatDate(entry.created_at) }}</span>
    </div>
    
    <div class="entry-message">
      "{{ entry.message }}"
    </div>
    
    <div v-if="entry.email" class="entry-email">
      <span>📧</span> {{ entry.email }}
    </div>
    
    <div class="entry-stickers">
      <span>🎀</span>
      <span>🎁</span>
      <span>❤️</span>
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
        month: 'short', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }
      return date.toLocaleDateString('en-US', options)
    }
  }
}
</script>

<style scoped>
.entry-card {
  background: var(--kuromi-white);
  border: 3px solid var(--kuromi-lavender);
  border-radius: 25px;
  padding: 25px;
  margin-bottom: 20px;
  transition: all 0.3s ease;
  position: relative;
}

.entry-card:hover {
  transform: translateY(-5px);
  border-color: var(--kuromi-hot-pink);
  box-shadow: 0 10px 0 var(--kuromi-lavender);
}

.entry-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  flex-wrap: wrap;
  gap: 10px;
}

.entry-name {
  background: linear-gradient(45deg, var(--kuromi-hot-pink), var(--kuromi-lavender));
  color: white;
  padding: 8px 20px;
  border-radius: 50px;
  font-weight: bold;
  font-size: 16px;
  box-shadow: 0 3px 0 var(--kuromi-purple);
}

.entry-date {
  color: var(--text-light);
  font-size: 14px;
  background: var(--kuromi-gray);
  padding: 5px 15px;
  border-radius: 50px;
  border: 2px solid var(--kuromi-lavender);
}

.entry-message {
  background: var(--kuromi-off-white);
  padding: 20px;
  border-radius: 20px;
  line-height: 1.8;
  font-size: 16px;
  border-left: 5px solid var(--kuromi-hot-pink);
  margin: 15px 0;
  position: relative;
  font-style: italic;
}

.entry-message::before {
  content: "💬";
  position: absolute;
  bottom: 5px;
  right: 10px;
  opacity: 0.2;
  font-size: 24px;
}

.entry-email {
  font-size: 14px;
  color: var(--kuromi-purple);
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px;
  background: var(--kuromi-gray);
  border-radius: 15px;
  margin-top: 10px;
}

.entry-stickers {
  position: absolute;
  top: -10px;
  right: 20px;
  display: flex;
  gap: 5px;
  background: white;
  padding: 5px 10px;
  border-radius: 50px;
  border: 2px solid var(--kuromi-hot-pink);
  box-shadow: 0 3px 0 var(--kuromi-lavender);
}

.entry-stickers span {
  animation: sparkle 2s ease infinite;
  animation-delay: calc(var(--i) * 0.3s);
}

.entry-stickers span:nth-child(2) {
  animation-delay: 0.3s;
}

.entry-stickers span:nth-child(3) {
  animation-delay: 0.6s;
}

@keyframes sparkle {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}

@media (max-width: 480px) {
  .entry-card {
    padding: 20px;
  }
  
  .entry-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .entry-name, .entry-date {
    width: 100%;
    text-align: center;
  }
  
  .entry-stickers {
    position: static;
    justify-content: center;
    margin-top: 15px;
  }
}
</style>