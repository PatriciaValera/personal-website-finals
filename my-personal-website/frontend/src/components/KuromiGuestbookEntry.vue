<template>
  <div class="kuromi-guestbook-entry">
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'KuromiGuestbookEntry',
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
.kuromi-guestbook-entry {
  background: white;
  border: 2px solid #ff9eb5;
  border-radius: 20px;
  padding: 20px;
  position: relative;
  transition: all 0.3s ease;
  box-shadow: 0 3px 10px rgba(255, 158, 181, 0.2);
}

.kuromi-guestbook-entry:hover {
  transform: translateY(-3px);
  border-color: #b28bff;
  box-shadow: 0 5px 15px rgba(178, 139, 255, 0.3);
}

.entry-decoration {
  position: absolute;
  top: 5px;
  left: 15px;
  right: 15px;
  display: flex;
  justify-content: space-between;
  opacity: 0.3;
  pointer-events: none;
}

.decor-left {
  color: #ff9eb5;
  font-size: 14px;
  animation: bounce 2s ease infinite;
}

.decor-right {
  color: #b28bff;
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
  background: #fff0f3;
  padding: 5px 15px;
  border-radius: 50px;
  border: 1px solid #ff9eb5;
}

.author-icon {
  font-size: 14px;
  color: #d45e7e;
}

.author-name {
  color: #d45e7e;
  font-size: 14px;
  font-weight: 600;
}

.entry-date {
  display: flex;
  align-items: center;
  gap: 5px;
  color: #8a6fd9;
  font-size: 12px;
  background: #f0e8ff;
  padding: 5px 15px;
  border-radius: 50px;
  border: 1px solid #b28bff;
}

.date-icon {
  color: #8a6fd9;
  font-size: 12px;
}

.entry-message {
  background: #fff0f3;
  padding: 20px;
  border-radius: 15px;
  margin: 15px 0;
  line-height: 1.6;
  color: #333333;
  font-style: italic;
  border-left: 4px solid #ff9eb5;
  position: relative;
  font-size: 14px;
}

.entry-message::before {
  content: "☠";
  position: absolute;
  bottom: 5px;
  right: 10px;
  opacity: 0.1;
  font-size: 30px;
  color: #ff9eb5;
  transform: rotate(10deg);
}

.entry-footer {
  display: flex;
  align-items: center;
  gap: 8px;
  padding-top: 10px;
  border-top: 1px dashed #ff9eb5;
  font-size: 12px;
  color: #777777;
}

.email-icon {
  color: #8a6fd9;
}

.entry-email {
  word-break: break-all;
}

@media (max-width: 768px) {
  .kuromi-guestbook-entry {
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
}
</style>