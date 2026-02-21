<template>
  <div class="kuromi-profile">
    <!-- Header Section -->
    <div class="profile-header">
      <h1>Kuromi's Lair</h1>
      <p class="subtitle">悪い子ちゃんのプロフィール</p>
    </div>

    <hr class="divider" />

    <!-- Profile Main Section -->
    <div class="profile-main">
      <div class="profile-image">
        <div class="image-placeholder">
          <span class="placeholder-icon">☠</span>
        </div>
      </div>

      <div class="profile-info">
        <h2>Kuromi Chan</h2>
        <p class="bad-girl">悪い子ちゃん (Bad Girl)</p>

        <!-- Bio -->
        <ul class="bio-list">
          <li>🐸 Punk rock princess with a cute twist! ❤️</li>
          <li>I love creating chaos with a smile~ My favorite things include skulls, pink accessories, and making new friends (even if I act tough!)</li>
        </ul>

        <!-- Stats -->
        <div class="stats">
          <div class="stat-item">
            <span class="stat-number">25</span>
            <span class="stat-label">PROJECTS</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">1337</span>
            <span class="stat-label">FOLLOWERS</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">∞</span>
            <span class="stat-label">CUTENESS</span>
          </div>
        </div>

        <hr class="section-divider" />

        <!-- Skills Section -->
        <div class="skills-section">
          <h3>Skills & Spells ⚔️</h3>
          <div class="skill-item">
            <span class="skill-name">Vue.js</span>
            <span class="skill-percent">90%</span>
          </div>
          <div class="skill-item">
            <span class="skill-name">React</span>
            <span class="skill-percent">85%</span>
          </div>
          <div class="skill-item">
            <span class="skill-name">Node.js</span>
            <span class="skill-percent">88%</span>
          </div>
          <div class="skill-item">
            <span class="skill-name">Python</span>
            <span class="skill-percent">75%</span>
          </div>
          <div class="skill-item">
            <span class="skill-name">TypeScript</span>
            <span class="skill-percent">82%</span>
          </div>
        </div>

        <hr class="section-divider" />

        <!-- Contact Section -->
        <div class="contact-section">
          <h3>Contact Info 💬</h3>
          <div class="contact-item">📧 kuromi@dark-cute.com</div>
          <div class="contact-item">🐦 @kuromi_official</div>
          <div class="contact-item">💻 github.com/kuromi</div>
          <div class="contact-item">🏰 Based in Sanrio World</div>
        </div>
        
        <hr class="section-divider" />
        
        <!-- Favorite Things -->
        <div class="favorites-section">
          <h3>Favorite Things ♡</h3>
          <div class="favorite-tags">
            <span class="tag">Pink Skulls</span>
            <span class="tag">Black Lace</span>
            <span class="tag">Punk Music</span>
            <span class="tag">Rabbits</span>
            <span class="tag">My Melody (sometimes)</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KuromiProfile'
}
</script>

<style scoped>
.kuromi-profile {
  padding: 20px;
  color: #333333;
  max-width: 900px;
  margin: 0 auto;
  background: white;
  border-radius: 20px;
  border: 3px solid #ff9eb5;
  font-family: 'Poppins', sans-serif;
}

.profile-header {
  text-align: left;
  margin-bottom: 10px;
}

.profile-header h1 {
  font-size: 32px;
  color: #d45e7e;
  margin: 0;
  font-weight: 700;
  letter-spacing: 1px;
}

.profile-header h1::after {
  display: none;
}

.profile-header .subtitle {
  color: #8a6fd9;
  font-size: 16px;
  margin: 5px 0 0 0;
}

.divider {
  border: none;
  border-top: 2px solid #ff9eb5;
  margin: 15px 0 25px 0;
}

.profile-main {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
}

.profile-image {
  flex: 0 0 200px;
}

.image-placeholder {
  width: 200px;
  height: 200px;
  background: linear-gradient(135deg, #ff9eb5, #b28bff);
  border: 4px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 0 #8a6fd9;
}

.placeholder-icon {
  font-size: 80px;
  color: white;
  animation: bounce 3s ease infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.profile-info {
  flex: 1;
  min-width: 300px;
}

.profile-info h2 {
  font-size: 24px;
  color: #d45e7e;
  margin: 0 0 5px 0;
  font-weight: 600;
}

.bad-girl {
  color: #8a6fd9;
  font-size: 14px;
  margin: 0 0 20px 0;
  font-style: italic;
}

.bio-list {
  list-style: none;
  padding: 0;
  margin: 0 0 25px 0;
}

.bio-list li {
  margin-bottom: 12px;
  line-height: 1.6;
  font-size: 14px;
  padding-left: 5px;
  border-left: 4px solid #ff9eb5;
  background: #fff0f3;
  padding: 8px 12px;
  border-radius: 0 8px 8px 0;
  color: #333333;
}

.stats {
  display: flex;
  gap: 30px;
  margin: 20px 0;
  padding: 15px;
  background: #fff0f3;
  border-radius: 15px;
  flex-wrap: wrap;
}

.stat-item {
  display: flex;
  flex-direction: column;
}

.stat-number {
  font-size: 28px;
  font-weight: 700;
  color: #d45e7e;
  line-height: 1.2;
}

.stat-label {
  font-size: 11px;
  color: #8a6fd9;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-weight: 600;
}

.section-divider {
  border: none;
  border-top: 2px dashed #ff9eb5;
  margin: 25px 0;
}

.skills-section h3,
.contact-section h3,
.favorites-section h3 {
  color: #d45e7e;
  font-size: 20px;
  margin: 0 0 15px 0;
  font-weight: 600;
}

.skill-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  font-size: 14px;
  border-bottom: 1px dotted #ff9eb5;
  padding: 8px 5px;
  color: #333333;
}

.skill-name {
  color: #333333;
  font-weight: 500;
}

.skill-percent {
  color: #8a6fd9;
  font-weight: 600;
  background: #fff0f3;
  padding: 2px 8px;
  border-radius: 12px;
}

.contact-item {
  margin-bottom: 12px;
  font-size: 14px;
  color: #333333;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: #fff0f3;
  border-radius: 8px;
}

.favorite-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tag {
  background: #fff0f3;
  color: #d45e7e;
  padding: 5px 15px;
  border-radius: 50px;
  font-size: 12px;
  border: 1px solid #ff9eb5;
  font-weight: 500;
  transition: all 0.3s ease;
}

.tag:hover {
  background: #ff9eb5;
  color: white;
  transform: scale(1.05);
}

/* Responsive */
@media (max-width: 768px) {
  .profile-main {
    flex-direction: column;
    align-items: center;
  }
  
  .profile-image {
    flex: 0 0 auto;
  }
  
  .stats {
    justify-content: center;
  }
  
  .profile-header h1 {
    font-size: 28px;
  }
}

@media (max-width: 480px) {
  .kuromi-profile {
    padding: 15px;
  }
  
  .profile-header h1 {
    font-size: 24px;
  }
  
  .image-placeholder {
    width: 150px;
    height: 150px;
  }
  
  .placeholder-icon {
    font-size: 60px;
  }
  
  .stats {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 15px;
  }
  
  .stat-item {
    align-items: center;
  }
}
</style>