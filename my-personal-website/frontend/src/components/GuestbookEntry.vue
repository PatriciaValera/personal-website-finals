<template>
  <div class="guestbook-entry">
    <div class="entry-decoration">
      <span class="decor-left">☠</span>
      <span class="decor-right">♡</span>
    </div>
    
    <div class="entry-content">
      <div class="entry-header">
        <div class="entry-author">
          <span class="author-icon">👤</span>
          <strong class="author-name">{{ entry.name }}</strong>
        </div>
        <div class="entry-date">
          <span class="date-icon">🕒</span>
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
      
      <div class="entry-sticker">
        <span class="sticker" v-for="n in 3" :key="n">✨</span>
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
.guestbook-entry {
  background: linear-gradient(135deg, var(--kuromi-gray), var(--kuromi-light-gray));
  border: 2px solid var(--kuromi-purple);
  border-radius: 25px;
  padding: 20px;
  position: relative;
  transition: all 0.3s ease;
  overflow: hidden;
}

.guestbook-entry:hover {
  transform: translateY(-3px) scale(1.02);
  border-color: var(--kuromi-pink);
  box-shadow: 0 8px 0 var(--kuromi-dark-purple);
}

.entry-decoration {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 5px 15px;
  opacity: 0.5;
  pointer-events: none;
}

.decor-left {
  color: var(--kuromi-pink);
  font-size: 14px;
  animation: bounce 2s ease infinite;
}

.decor-right {
  color: var(--kuromi-purple);
  font-size: 14px;
  animation: bounce 2s ease infinite 0.5s;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
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
  background: var(--kuromi-black);
  padding: 5px 15px;
  border-radius: 50px;
  border: 1px solid var(--kuromi-pink);
}

.author-icon {
  font-size: 16px;
}

.author-name {
  color: var(--kuromi-pink);
  font-size: 16px;
}

.entry-date {
  display: flex;
  align-items: center;
  gap: 5px;
  color: var(--text-muted);
  font-size: 14px;
  background: var(--kuromi-black);
  padding: 5px 15px;
  border-radius: 50px;
  border: 1px solid var(--kuromi-purple);
}

.date-icon {
  color: var(--kuromi-purple);
}

.entry-message {
  background: var(--kuromi-black);
  padding: 20px;
  border-radius: 20px;
  margin: 15px 0;
  line-height: 1.6;
  color: var(--text-light);
  font-style: italic;
  border-left: 4px solid var(--kuromi-pink);
  position: relative;
}

.entry-message::before {
  content: "☠";
  position: absolute;
  bottom: 5px;
  right: 10px;
  opacity: 0.1;
  font-size: 30px;
  color: var(--kuromi-pink);
  transform: rotate(10deg);
}

.entry-footer {
  display: flex;
  align-items: center;
  gap: 8px;
  padding-top: 10px;
  border-top: 1px dashed var(--kuromi-purple);
  font-size: 14px;
  color: var(--text-muted);
}

.email-icon {
  color: var(--kuromi-pink);
}

.entry-email {
  word-break: break-all;
}

.entry-sticker {
  position: absolute;
  bottom: 5px;
  right: 5px;
  opacity: 0.3;
  font-size: 12px;
}

.sticker {
  display: inline-block;
  animation: sparkle 3s ease infinite;
}

.sticker:nth-child(2) {
  animation-delay: 0.5s;
}

.sticker:nth-child(3) {
  animation-delay: 1s;
}

@keyframes sparkle {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.2); }
}

/* Responsive adjustments */
@media (max-width: 480px) {
  .guestbook-entry {
    padding: 15px;
  }
  
  .entry-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .entry-author, .entry-date {
    width: 100%;
    justify-content: center;
  }
  
  .entry-message {
    padding: 15px;
    font-size: 14px;
  }
  
  .entry-message::before {
    font-size: 20px;
  }
}
</style>