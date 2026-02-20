<template>
  <div class="profile-section">
    <div class="profile-header">
      <div class="profile-avatar">
        <img src="https://via.placeholder.com/180" alt="Profile Picture">
      </div>
      <div class="profile-info">
        <h2>KUROMI VIBE</h2>
        <p class="title">★ FULL STACK REBEL ★</p>
        <p class="bio">
          "Fun times, messy times... all of it. I'll show everyone me giving it my all,
          no holding back! Because I know my efforts can give someone out there the 
          courage to chase their own stuff, yeah?"
        </p>
        <p class="bio" style="margin-top: 15px; color: var(--kuromi-pink);">
          Tokyo Dome → Madison Square Garden → Grammys → World Tour
        </p>
      </div>
    </div>
    
    <div class="profile-details">
      <div class="detail-item">
        <h3>★ SKILLS I ROCK ★</h3>
        <ul class="skills-list">
          <li v-for="skill in skills" :key="skill">{{ skill }}</li>
        </ul>
      </div>
      
      <div class="detail-item">
        <h3>★ CONNECT ★</h3>
        <p>📧 kuromi.vibes@example.com</p>
        <p>🔗 github.com/kuromi-dev</p>
        <p>💼 linkedin.com/in/kuromi-coder</p>
        <p>🎸 instagram.com/kuromi.codes</p>
      </div>
    </div>
    
    <div class="quote">
      "Keep your eyes on me—my rise is just getting started!"
    </div>
  </div>
</template>