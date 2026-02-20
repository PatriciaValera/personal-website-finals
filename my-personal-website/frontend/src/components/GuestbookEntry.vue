<template>
  <div class="guestbook-entry">
    <div class="entry-header">
      <strong class="entry-name">{{ entry.name }}</strong>
      <span class="entry-date">{{ formatDate(entry.created_at) }}</span>
    </div>
    <p class="entry-message">{{ entry.message }}</p>
    <p v-if="entry.email" class="entry-email">{{ entry.email }}</p>
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
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    }
  }
}
</script>

<style scoped>
.guestbook-entry {
  background: var(--secondary-color);
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 15px;
  transition: transform 0.2s ease;
}

.guestbook-entry:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.entry-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  flex-wrap: wrap;
  gap: 10px;
}

.entry-name {
  font-size: 16px;
  color: var(--primary-color);
}

.entry-date {
  font-size: 14px;
  color: #666;
}

.entry-message {
  line-height: 1.6;
  margin-bottom: 10px;
}

.entry-email {
  font-size: 14px;
  color: #666;
  font-style: italic;
}

@media (max-width: 480px) {
  .entry-header {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>