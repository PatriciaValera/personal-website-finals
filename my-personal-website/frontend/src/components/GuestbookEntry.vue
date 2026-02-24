<template>
  <div class="guestbook-entry">
    <div class="entry-decoration">
      <span class="decor-left">⚔️</span>
      <span class="decor-right">🐗</span>
    </div>
    
    <div class="entry-content">
      <div class="entry-header">
        <div class="entry-author">
          <span class="author-icon">👤</span>
          <strong class="author-name">{{ entry.name }}</strong>
          <span v-if="isStrongName(entry.name)" class="strong-badge">Strong! 💪</span>
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
      
      <div class="entry-reaction">
        <button class="reaction-btn" @click="react('strong')">
          ⚔️ <span>{{ reactions.strong }}</span>
        </button>
        <button class="reaction-btn" @click="react('boar')">
          🐗 <span>{{ reactions.boar }}</span>
        </button>
        <button class="reaction-btn" @click="react('wild')">
          🌪️ <span>{{ reactions.wild }}</span>
        </button>
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
  data() {
    return {
      reactions: {
        strong: Math.floor(Math.random() * 10) + 1,
        boar: Math.floor(Math.random() * 8) + 1,
        wild: Math.floor(Math.random() * 12) + 1
      }
    }
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString)
      const options = {  
        month: 'short', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }
      return date.toLocaleDateString('en-US', options)
    },
    isStrongName(name) {
      // Randomly decide if name sounds strong to Inosuke
      const strongNames = ['tanjiro', 'giyu', 'rengoku', 'zenitsu', 'inosuke']
      return strongNames.some(strongName => 
        name.toLowerCase().includes(strongName)
      )
    },
    react(type) {
      this.reactions[type]++
      // Inosuke snorts in approval
      this.$emit('reaction', { type, name: this.entry.name })
    }
  }
}
</script>

<style scoped>
.guestbook-entry {
  background: linear-gradient(135deg, var(--inosuke-gray), var(--inosuke-black));
  border: 2px solid var(--inosuke-blue);
  border-radius: 0 40px 0 40px;
  padding: 25px;
  position: relative;
  transition: all 0.3s ease;
  overflow: hidden;
  box-shadow: 5px 5px 0 var(--inosuke-dark-blue);
}

.guestbook-entry:hover {
  transform: translate(-3px, -3px);
  box-shadow: 8px 8px 0 var(--inosuke-dark-blue);
  border-color: var(--inosuke-beige);
}

.entry-decoration {
  position: absolute;
  top: 5px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  opacity: 0.3;
  pointer-events: none;
  font-size: 20px;
}

.decor-left {
  color: var(--inosuke-blue);
  animation: slashLeft 2s ease infinite;
}

.decor-right {
  color: var(--inosuke-beige);
  animation: slashRight 2s ease infinite;
}

@keyframes slashLeft {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-10deg) scale(1.2); }
}

@keyframes slashRight {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(10deg) scale(1.2); }
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
  gap: 10px;
  background: var(--inosuke-black);
  padding: 5px 20px;
  border-radius: 0 20px 0 20px;
  border: 1px solid var(--inosuke-blue);
}

.author-icon {
  font-size: 18px;
}

.author-name {
  color: var(--inosuke-beige);
  font-size: 16px;
  font-weight: bold;
}

.strong-badge {
  background: linear-gradient(135deg, var(--inosuke-blue), var(--inosuke-dark-blue));
  color: var(--text-light);
  padding: 3px 10px;
  border-radius: 0 10px 0 10px;
  font-size: 12px;
  font-weight: bold;
  border: 1px solid var(--inosuke-beige);
  animation: pulse 1.5s ease infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.entry-date {
  display: flex;
  align-items: center;
  gap: 5px;
  color: var(--text-muted);
  font-size: 14px;
  background: var(--inosuke-black);
  padding: 5px 15px;
  border-radius: 20px 0 20px 0;
  border: 1px solid var(--inosuke-beige);
}

.date-icon {
  color: var(--inosuke-light-blue);
}

.entry-message {
  background: var(--inosuke-black);
  padding: 20px;
  border-radius: 0 30px 0 30px;
  margin: 15px 0;
  line-height: 1.6;
  color: var(--text-light);
  border-left: 5px solid var(--inosuke-blue);
  border-bottom: 2px solid var(--inosuke-beige);
  position: relative;
  font-size: 16px;
}

.entry-message::before {
  content: "⚔️";
  position: absolute;
  bottom: 5px;
  right: 10px;
  opacity: 0.2;
  font-size: 30px;
  transform: rotate(15deg);
}

.entry-footer {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
  border-top: 1px dashed var(--inosuke-blue);
  margin-top: 10px;
  font-size: 14px;
  color: var(--text-muted);
}

.email-icon {
  color: var(--inosuke-beige);
}

.entry-email {
  word-break: break-all;
}

.entry-reaction {
  display: flex;
  gap: 10px;
  margin-top: 15px;
  justify-content: flex-end;
}

.reaction-btn {
  background: var(--inosuke-black);
  border: 1px solid var(--inosuke-blue);
  color: var(--text-light);
  padding: 5px 12px;
  border-radius: 0 15px 0 15px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 5px;
}

.reaction-btn:hover {
  background: var(--inosuke-blue);
  transform: translateY(-2px);
  border-color: var(--inosuke-beige);
}

.reaction-btn span {
  font-weight: bold;
  color: var(--inosuke-beige);
}

.reaction-btn:hover span {
  color: var(--text-light);
}

@media (max-width: 480px) {
  .guestbook-entry {
    padding: 15px;
  }
  
  .entry-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .entry-author {
    width: 100%;
    justify-content: center;
  }
  
  .entry-date {
    width: 100%;
    justify-content: center;
  }
  
  .entry-message {
    padding: 15px;
    font-size: 14px;
  }
  
  .entry-reaction {
    justify-content: center;
    flex-wrap: wrap;
  }
}
</style>