<template>
  <div class="guestbook-section">
    <div class="guestbook-header">
      <h2>guestbook</h2>
      <p class="subtitle">leave a message for me ✧</p>
    </div>
    
    <div class="guestbook-card">
      <div class="purple-bg"></div>
      <form @submit.prevent="submitEntry" class="guestbook-form">
        <div class="form-group">
          <label for="name">
            <span class="label-icon">✧</span>
            your name
          </label>
          <input 
            type="text" 
            id="name" 
            v-model="formData.name" 
            required
            placeholder="enter your name"
          >
        </div>
        
        <div class="form-group">
          <label for="message">
            <span class="label-icon">✦</span>
            write a message...
          </label>
          <textarea 
            id="message" 
            v-model="formData.message" 
            required
            rows="4"
            placeholder="what would you like to say?"
          ></textarea>
        </div>
        
        <div v-if="error" class="error-message">
          <span class="error-icon">⚠️</span>
          {{ error }}
        </div>
        
        <button type="submit" class="share-btn" :disabled="loading">
          <span v-if="loading">
            <span class="btn-spinner">✧</span>
            sharing...
          </span>
          <span v-else>
            share message
            <span class="btn-icon">✦</span>
          </span>
        </button>
        
        <div v-if="success" class="success-message">
          <span class="success-icon">✧</span>
          {{ success }}
        </div>
      </form>
    </div>
    
    <div class="messages-container">
      <div class="messages-header">
        <h3>recent messages</h3>
        <span class="message-count">({{ entries.length }})</span>
      </div>
      
      <div v-if="entriesLoading" class="loading-state">
        <div class="loading-spinner">✧</div>
        <p>summoning messages...</p>
      </div>
      
      <div v-else-if="entries.length === 0" class="empty-state">
        <div class="empty-illustration">
          <span class="purple-star">✧</span>
          <span class="purple-star">✦</span>
          <span class="purple-star">✧</span>
        </div>
        <p class="empty-message">the realm is quiet... be the first to speak!</p>
        <p class="empty-sub">(your message will appear here)</p>
      </div>
      
      <transition-group name="messages" tag="div" class="messages-list">
        <div v-for="entry in entries" :key="entry.id" class="message-card">
          <div class="message-header">
            <div class="message-author">
              <span class="author-avatar">✧</span>
              <strong class="author-name">{{ entry.name }}</strong>
            </div>
            <span class="message-date">{{ formatDate(entry.created_at) }}</span>
          </div>
          <div class="message-content">
            "{{ entry.message }}"
          </div>
          <div v-if="entry.email" class="message-footer">
            <span class="email-icon">📧</span>
            <span class="message-email">{{ entry.email }}</span>
          </div>
          <div class="message-sticker">
            <span>✦</span>
          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
// Script remains the same
</script>

<style scoped>
/* All spacing values reduced by 5px */
.guestbook-section {
  padding: 15px 0; /* Reduced by 5px */
  max-width: 800px;
  margin: 0 auto;
}

.guestbook-header {
  text-align: center;
  margin-bottom: 20px; /* Reduced by 5px */
}

.guestbook-header h2 {
  font-size: var(--font-xxl);
  color: var(--white-pure);
  margin-bottom: 3px; /* Reduced by 2px */
  text-transform: lowercase;
}

.guestbook-header h2::after {
  content: "✦";
  font-size: 0.7em;
  margin-left: 6px; /* Reduced by 2px */
  opacity: 0.8;
  color: var(--purple-accent);
}

.subtitle {
  color: var(--white-pure);
  font-size: var(--font-lg);
  font-style: italic;
  opacity: 0.9;
}

/* Guestbook Card */
.guestbook-card {
  position: relative;
  border-radius: 25px; /* Reduced by 5px */
  overflow: hidden;
  margin-bottom: 35px; /* Reduced by 5px */
  box-shadow: 0 8px 0 var(--purple-deep), 0 0 30px var(--purple-glow); /* Reduced shadow offset */
}

.guestbook-form {
  position: relative;
  z-index: 1;
  background: rgba(26, 10, 30, 0.7);
  backdrop-filter: blur(10px);
  padding: 25px; /* Reduced by 5px */
  border: 2px solid var(--purple-primary);
  border-radius: 25px; /* Reduced by 5px */
}

.form-group {
  margin-bottom: 15px; /* Reduced by 5px */
}

.form-group label {
  display: block;
  margin-bottom: 5px; /* Reduced by 3px */
  color: var(--white-pure);
  font-weight: 600;
  font-size: var(--font-base);
  text-transform: lowercase;
  letter-spacing: 0.5px;
}

.label-icon {
  margin-right: 6px; /* Reduced by 2px */
  color: var(--purple-accent);
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 8px 12px; /* Reduced from 12px 15px */
  background: rgba(0, 0, 0, 0.3);
  border: 2px solid var(--purple-primary);
  border-radius: 12px; /* Reduced by 3px */
  font-size: var(--font-base);
  color: var(--white-pure);
  transition: all 0.3s ease;
  font-family: 'Poppins', sans-serif;
}

.share-btn {
  background: linear-gradient(135deg, var(--purple-primary), var(--purple-light));
  color: var(--white-pure);
  border: none;
  padding: 10px 25px; /* Reduced from 14px 30px */
  border-radius: 45px; /* Reduced by 5px */
  cursor: pointer;
  font-size: var(--font-lg);
  font-weight: bold;
  transition: all 0.3s ease;
  border: 2px solid var(--purple-pastel);
  box-shadow: 0 4px 0 var(--purple-deep), 0 0 20px var(--purple-glow); /* Reduced shadow offset */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px; /* Reduced by 2px */
  position: relative;
  overflow: hidden;
  text-transform: lowercase;
}

/* Messages Section */
.messages-container {
  background: rgba(42, 26, 58, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 25px; /* Reduced by 5px */
  padding: 20px; /* Reduced by 5px */
  border: 2px solid var(--purple-primary);
  position: relative;
  overflow: hidden;
  box-shadow: 0 6px 0 var(--purple-deep); /* Reduced shadow offset */
}

.messages-container::before {
  content: "✧";
  position: absolute;
  bottom: 8px; /* Adjusted */
  right: 8px; /* Adjusted */
  font-size: 70px; /* Reduced by 10px */
  opacity: 0.1;
  color: var(--purple-accent);
  transform: rotate(-10deg);
  pointer-events: none;
  text-shadow: 0 0 20px var(--purple-glow);
}

.messages-header {
  display: flex;
  align-items: center;
  gap: 8px; /* Reduced by 2px */
  margin-bottom: 15px; /* Reduced by 5px */
  padding-bottom: 8px; /* Reduced by 2px */
  border-bottom: 2px dashed var(--purple-primary);
}

.messages-header h3 {
  color: var(--white-pure);
  font-size: var(--font-xl);
  margin: 0;
  text-transform: lowercase;
}

.message-count {
  color: var(--white-pure);
  font-size: var(--font-lg);
  font-weight: bold;
  opacity: 0.8;
}

.loading-state {
  text-align: center;
  padding: 35px; /* Reduced by 5px */
}

.loading-spinner {
  font-size: 42px; /* Reduced by 6px */
  animation: spin 2s linear infinite;
  color: var(--purple-accent);
  margin-bottom: 10px; /* Reduced by 5px */
  text-shadow: 0 0 20px var(--purple-glow);
}

.empty-state {
  text-align: center;
  padding: 40px 15px; /* Reduced from 50px 20px */
  background: rgba(0, 0, 0, 0.2);
  border-radius: 15px; /* Reduced by 5px */
  border: 2px dashed var(--purple-primary);
  backdrop-filter: blur(5px);
}

.empty-illustration {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px; /* Reduced by 3px */
  margin-bottom: 15px; /* Reduced by 5px */
}

.purple-star {
  font-size: 42px; /* Reduced by 6px */
  animation: float 3s ease infinite;
  color: var(--purple-accent);
  text-shadow: 0 0 20px var(--purple-glow);
}

.empty-message {
  color: var(--white-pure);
  font-size: var(--font-lg);
  font-weight: 600;
  margin-bottom: 5px; /* Reduced by 3px */
}

.empty-sub {
  color: rgba(255, 255, 255, 0.7);
  font-size: var(--font-sm);
  font-style: italic;
}

.messages-list {
  display: flex;
  flex-direction: column;
  gap: 12px; /* Reduced by 3px */
}

.message-card {
  background: rgba(0, 0, 0, 0.3);
  border: 2px solid var(--purple-primary);
  border-radius: 15px; /* Reduced by 5px */
  padding: 15px; /* Reduced by 3px */
  position: relative;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
}

.message-card:hover {
  transform: translateX(3px); /* Reduced by 2px */
  border-color: var(--purple-accent);
  box-shadow: 0 4px 0 var(--purple-deep), 0 0 20px var(--purple-glow); /* Reduced shadow offset */
}

.message-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px; /* Reduced by 4px */
  flex-wrap: wrap;
  gap: 6px; /* Reduced by 2px */
}

.message-author {
  display: flex;
  align-items: center;
  gap: 6px; /* Reduced by 2px */
  background: rgba(0, 0, 0, 0.3);
  padding: 4px 12px; /* Reduced from 5px 15px */
  border-radius: 45px; /* Reduced by 5px */
  border: 1px solid var(--purple-primary);
}

.author-avatar {
  font-size: var(--font-sm); /* Reduced */
  color: var(--purple-accent);
}

.author-name {
  color: var(--white-pure);
  font-size: var(--font-sm); /* Reduced */
  font-weight: 600;
}

.message-date {
  color: rgba(255, 255, 255, 0.7);
  font-size: var(--font-xs); /* Reduced */
  background: rgba(0, 0, 0, 0.3);
  padding: 4px 10px; /* Reduced */
  border-radius: 45px; /* Reduced by 5px */
  border: 1px solid var(--purple-soft);
}

.message-content {
  background: rgba(0, 0, 0, 0.2);
  padding: 12px; /* Reduced by 3px */
  border-radius: 12px; /* Reduced by 3px */
  margin: 8px 0; /* Reduced by 2px */
  line-height: 1.6;
  color: var(--white-pure);
  font-style: italic;
  border-left: 3px solid var(--purple-accent);
  font-size: var(--font-base);
}

.message-footer {
  display: flex;
  align-items: center;
  gap: 6px; /* Reduced by 2px */
  padding-top: 6px; /* Reduced by 2px */
  border-top: 1px dashed var(--purple-primary);
  font-size: var(--font-sm); /* Reduced */
  color: rgba(255, 255, 255, 0.7);
}

.email-icon {
  color: var(--purple-accent);
}

.message-email {
  word-break: break-all;
  color: rgba(255, 255, 255, 0.7);
}

.message-sticker {
  position: absolute;
  bottom: 3px; /* Adjusted */
  right: 3px; /* Adjusted */
  opacity: 0.2;
  font-size: var(--font-base); /* Reduced */
  color: var(--purple-accent);
}

/* Responsive Design */
@media (max-width: 768px) {
  .guestbook-header h2 {
    font-size: var(--font-xl);
  }
  
  .subtitle {
    font-size: var(--font-base);
  }
  
  .guestbook-form {
    padding: 15px; /* Reduced */
  }
  
  .share-btn {
    font-size: var(--font-base);
    padding: 8px 15px; /* Reduced */
  }
  
  .messages-container {
    padding: 15px; /* Reduced */
  }
  
  .messages-header h3 {
    font-size: var(--font-lg);
  }
  
  .message-count {
    font-size: var(--font-base);
  }
  
  .empty-message {
    font-size: var(--font-base);
  }
  
  .message-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .message-author,
  .message-date {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .empty-illustration {
    flex-direction: column;
    gap: 8px; /* Reduced */
  }
  
  .purple-star {
    font-size: 30px; /* Reduced */
  }
  
  .message-card {
    padding: 12px; /* Reduced */
  }
  
  .message-content {
    padding: 10px; /* Reduced */
    font-size: var(--font-sm);
  }
}
</style>