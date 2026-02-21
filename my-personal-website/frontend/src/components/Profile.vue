<template>
  <div class="profile-section">

    <div class="profile-header">
      <div class="profile-avatar">
        <img src="https://i.pravatar.cc/300?img=5" alt="Kuromi Style Avatar">
        <div class="avatar-caption">☠ くろみ ☠</div>
      </div>

      <div class="profile-info">
        <h2>Kuromi Chan</h2>
        <p class="title">〜 悪い子ちゃん (Bad Girl) 〜</p>
        <p class="bio">
          ✧ Punk rock princess with a cute twist! ✧<br>
          I love creating chaos with a smile~ 
          My favorite things include skulls, pink accessories, 
          and making new friends (even if I act tough!)
        </p>
        
        <div class="stats">
          <div class="stat-item">
            <span class="stat-value">25</span>
            <span class="stat-label">Projects</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">1337</span>
            <span class="stat-label">Followers</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">∞</span>
            <span class="stat-label">Cuteness</span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="profile-details">
      <div class="detail-card">
        <h3>✧ Skills & Spells ✧</h3>
        <div class="skills-grid">
          <div v-for="skill in skills" :key="skill.name" class="skill-item">
            <div class="skill-info">
              <span class="skill-name">{{ skill.name }}</span>
              <span class="skill-level">{{ skill.level }}%</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress" :style="{ width: skill.level + '%' }"></div>
            </div>
          </div>
      </div>
      
      <div class="detail-card">
        <h3>♡ Contact Info ♡</h3>
        <ul class="contact-list">
          <li>
            <span class="contact-icon">📧</span>
            <span>kuromi@dark-cute.com</span>
          </li>
          <li>
            <span class="contact-icon">🎵</span>
            <span>@kuromi_official</span>
          </li>
          <li>
            <span class="contact-icon">💀</span>
            <span>github.com/kuromi</span>
          </li>
          <li>
            <span class="contact-icon">🏰</span>
            <span>Based in Sanrio World</span>
          </li>
        </ul>

        <div class="favorites">
          <h4>Favorite things:</h4>
          <div class="favorite-tags">
            <span class="tag">Pink Skulls</span>
            <span class="tag">Black Lace</span>
            <span class="tag">Punk Music</span>
            <span class="tag">Rabbits</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data() {
    return {
      skills: [
        { name: 'Vue.js', level: 90 },
        { name: 'React', level: 85 },
        { name: 'Node.js', level: 88 },
        { name: 'Python', level: 75 },
        { name: 'TypeScript', level: 82 },
        { name: 'UI/UX Design', level: 95 }
      ]
    }
  }
}
</script>

<style scoped>
.profile-section {
  padding: 20px 0;
}

.profile-header {
  display: flex;
  gap: 40px;
  margin-bottom: 40px;
  flex-wrap: wrap;
  background: var(--kuromi-gray);
  padding: 30px;
  border-radius: 30px;
  border: 2px solid var(--kuromi-purple);
  position: relative;
}

.profile-avatar {
  position: relative;
  text-align: center;
}

.profile-avatar img {
  width: 180px;
  height: 180px;
  border-radius: 30px 30px 50% 50%;
  object-fit: cover;
  border: 4px solid var(--kuromi-pink);
  box-shadow: 0 8px 0 var(--kuromi-dark-purple);
}

.avatar-caption {
  margin-top: 10px;
  color: var(--kuromi-pink);
  font-weight: bold;
  font-size: 14px;
  letter-spacing: 2px;
}

.profile-info {
  flex: 1;


.profile-info h2 {
  margin-bottom: 5px;
  font-size: 32px;
}

.profile-info .title {
  color: var(--kuromi-purple);
  font-size: 16px;
  margin-bottom: 15px;
  font-style: italic;
}

.profile-info .bio {
  line-height: 1.8;
  color: var(--text-light);
  margin-bottom: 20px;
  padding: 15px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  border-left: 4px solid var(--kuromi-pink);
}

.stats {
  display: flex;
  gap: 30px;
  margin-top: 20px;
}

.stat-item {
  text-align: center;
}

.stat-value {
  display: block;
  font-size: 28px;
  font-weight: bold;
  color: var(--kuromi-pink);
  text-shadow: 2px 2px 0 var(--kuromi-dark-purple);
}

.stat-label {
  font-size: 12px;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.profile-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

.detail-card {
  background: var(--kuromi-gray);
  padding: 25px;
  border-radius: 25px;
  border: 2px solid var(--kuromi-pink);
  transition: transform 0.3s ease;
}

.detail-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 0 var(--kuromi-dark-purple);
}

.detail-card h3 {
  margin-bottom: 20px;
  font-size: 20px;
}

.skills-grid {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.skill-item {
  width: 100%;
}

.skill-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  color: var(--text-light);
}

.skill-name {
  font-weight: 600;
}

.skill-level {
  color: var(--kuromi-pink);
}

.skill-bar {
  width: 100%;
  height: 10px;
  background: var(--kuromi-black);
  border-radius: 10px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background: linear-gradient(90deg, var(--kuromi-pink), var(--kuromi-purple));
  border-radius: 10px;
  transition: width 1s ease;
}

.contact-list {
  list-style: none;
  margin-bottom: 20px;
}

.contact-list li {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 12px 0;
  border-bottom: 1px dashed var(--kuromi-purple);
}

.contact-icon {
  font-size: 20px;
  min-width: 30px;
}

.favorites h4 {
  color: var(--kuromi-pink);
  margin-bottom: 10px;
}

.favorite-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tag {
  background: var(--kuromi-black);
  color: var(--kuromi-pink);
  padding: 5px 15px;
  border-radius: 50px;
  font-size: 12px;
  border: 1px solid var(--kuromi-purple);
  transition: all 0.3s ease;

}

.tag:hover {
  background: var(--kuromi-purple);
  color: var(--kuromi-black);
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .profile-header {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 20px;
  }
  
  .profile-info .bio {
    text-align: left;

  }
  
  .stats {
    justify-content: center;
  }
  
  .profile-details {
    grid-template-columns: 1fr;
  }
}
</style>