<template>
  <div class="guestbook-section">
    <div class="magic-portal">
      <span class="portal-left">👠</span>
      <span class="portal-right">🎃</span>
    </div>
    
    <div class="guestbook-header">
      <h2>✧ The Royal Guestbook ✧</h2>
      <p class="subtitle">Leave a message in Cinderella's granddaughter's guestbook!</p>
      <p class="fairy-note">"Every message is like a fairy tale come true!" - Rose</p>
    </div>
    
    <form @submit.prevent="submitEntry" class="guestbook-form">
      <div class="magic-circle">
        <div class="form-row">
          <div class="form-group">
            <label for="name">
              <span class="label-icon">👑</span>
              Your Name *
            </label>
            <input 
              type="text" 
              id="name" 
              v-model="formData.name" 
              required
              placeholder="e.g., Fairy Tale Friend"
              class="magic-input"
            >
          </div>
          
          <div class="form-group">
            <label for="email">
              <span class="label-icon">💌</span>
              Email (optional)
            </label>
            <input 
              type="email" 
              id="email" 
              v-model="formData.email"
              placeholder="your@story.com"
              class="magic-input"
            >
          </div>
        </div>
        
        <div class="form-group">
          <label for="message">
            <span class="label-icon">📖</span>
            Your Fairy Tale Message *