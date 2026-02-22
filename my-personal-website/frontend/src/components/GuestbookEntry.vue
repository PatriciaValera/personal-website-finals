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
    
    <div class="entry-skulls">
      <span>☠️</span>
      <span>❤️</span>
      <span>☠️</span>
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
  background: rgba(26, 26, 26, 0.8);
  backdrop-filter: blur(10px);
  border: 2px solid var(--kuromi-purple);
  border-radius: 25px;
  padding: 25px;
  margin-bottom: 20px;
  transition: all 0.3s ease;
  position: relative;
  box-shadow: 0 5px 15px var(--shadow-dark);
}

.entry-card:hover {
  transform: translateY(-5px);
  border-color: var(--kuromi-hot-pink);
  box-shadow: 
    0 10px 0 var(--kuromi-dark-gray),
    0 0 40px var(--glow-pink);
}

.entry-card::before {
  content: "☠️";
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  opacity: 0.2;
  color: var(--kuromi-hot-pink);
  transform: rotate(10deg);
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
  background: linear-gradient(135deg, var(--kuromi-hot-pink), var(--kuromi-neon-purple));
  color: var(--kuromi-white);
  padding: 8px 20px;
  border-radius: 50px;
  font-weight: bold;
  font-size: 16px;
  box-shadow: 0 3px 0 var(--kuromi-dark-gray);
  text-shadow: 0 0 10px var(--glow-pink);
}

.entry-date {
  color: var(--text-muted);
  font-size: 14px;
  background: rgba(42, 42, 42, 0.8);
  padding: 5px 15px;
  border-radius: 50px;
  border: 1px solid var(--kuromi-purple);
}

.entry-message {
  background: rgba(42, 42, 42, 0.5);
  backdrop-filter: blur(5px);
  padding: 20px;
  border-radius: 20px;
  line-height: 1.8;
  font-size: 16px;
  border-left: 4px solid var(--kuromi-hot-pink);
  margin: 15px 0;
  position: relative;
  font-style: italic;
  color: var(--text-light);
}

.entry-message::before {
  content: "☠️";
  position: absolute;
  bottom: 5px;
  right: 10px;
  opacity: 0.1;
  font-size: 30px;
  color: var(--kuromi-hot-pink);
}

.entry-email {
  font-size: 14px;
  color: var(--kuromi-light-purple);
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px;
  background: rgba(10, 10, 10, 0.5);
  border-radius: 15px;
  margin-top: 10px;
  border: 1px solid var(--kuromi-purple);
}

.entry-skulls {
  position: absolute;
  bottom: 5px;
  right: 15px;
  display: flex;
  gap: 5px;
  opacity: 0.3;
  font-size: 16px;
}

.entry-skulls span {
  animation: glow 3s infinite;
}

.entry-skulls span:nth-child(2) {
  animation-delay: 1s;
}

.entry-skulls span:nth-child(3) {
  animation-delay: 2s;
}

@keyframes glow {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.8; text-shadow: 0 0 10px var(--kuromi-hot-pink); }
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
  
  .entry-skulls {
    position: static;
    justify-content: center;
    margin-top: 15px;
  }
}
</style>