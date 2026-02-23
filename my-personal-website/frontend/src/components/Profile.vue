<template>
  <div class="profile-section">
    <div class="profile-header">
      <div class="profile-avatar">
        <img src="https://i.pravatar.cc/300?img=5" alt="Kuromi Style Avatar">
        <div class="avatar-caption">☠ Riri ☠</div>
      </div>
      
      <div class="profile-info">
        <h2>Kuromi Chan</h2>
        <p class="title">～悪い子ちゃん (Bad Girl) ～</p>
        <div class="bio-box">
          <p class="bio">
            Yo, I'm <span class="highlight">Patricia Marie Valera</span><br>
            I live for juicy stories and a bit of chaos—gossip is my guilty pleasure. 
            Curiosity keeps me lurking, always sniffing out what's going on. Life's way 
            more fun when you stir things up, laugh loud, and make memories that stick. 
            I'm not bold, but I've got my own kind of mischief~ <span class="heart">💕</span>
          </p>
        </div>
        
        <div class="stats">
          <div class="stat-item">
            <span class="stat-value">25</span>
            <span class="stat-label">PROJECTS</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">1337</span>
            <span class="stat-label">FOLLOWERS</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">∞</span>
            <span class="stat-label">CUTENESS</span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="profile-details">
      <div class="detail-card skills-card">
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
      </div>
      
      <div class="detail-card contact-card">
        <h3>♡ Contact Info ♡</h3>
        <ul class="contact-list">
          <li>
            <span class="contact-icon">📧</span>
            <a href="mailto:pdvalera@student.apc.edu.ph" class="contact-link">pdvalera@student.apc.edu.ph</a>
          </li>
          <li>
            <span class="contact-icon">💀</span>
            <a href="https://github.com/PatriciaValera" target="_blank" class="contact-link">github.com/PatriciaValera</a>
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
        { name: 'UI/UX Design', level: 95 },
        { name: 'Node.js', level: 80 },
        { name: 'Python', level: 75 }
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
  gap: 50px;
  margin-bottom: 40px;
  flex-wrap: wrap;
  background: var(--kuromi-gray);
  padding: 35px;
  border-radius: 30px;
  border: 2px solid var(--kuromi-purple);
  position: relative;
}

.profile-avatar {
  position: relative;
  text-align: center;
}

.profile-avatar img {
  width: 200px;
  height: 200px;
  border-radius: 30px 30px 50% 50%;
  object-fit: cover;
  border: 4px solid var(--kuromi-pink);
  box-shadow: 0 8px 0 var(--kuromi-dark-purple);
}

.avatar-caption {
  margin-top: 12px;
  color: var(--kuromi-pink);
  font-weight: bold;
  font-size: var(--font-base);
  letter-spacing: 2px;
}

.profile-info {
  flex: 1;
}

.profile-info h2 {
  margin-bottom: 5px;
  font-size: var(--font-xxl);
}

.profile-info .title {
  color: var(--kuromi-purple);
  font-size: var(--font-base);
  margin-bottom: 15px;
  font-style: italic;
}

.bio-box {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 20px;
  border-left: 4px solid var(--kuromi-pink);
}

.bio {
  line-height: 1.8;
  color: var(--text-light);
  font-size: var(--font-sm);
}

.highlight {
  color: var(--kuromi-pink);
  font-weight: 600;
  font-size: var(--font-base);
}

.heart {
  color: var(--kuromi-pink);
  font-size: var(--font-lg);
  animation: heartbeat 1.5s ease infinite;
  display: inline-block;
}

@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}

.stats {
  display: flex;
  gap: 30px;
  margin-top: 15px;
}

.stat-item {
  text-align: center;
}

.stat-value {
  display: block;
  font-size: var(--font-xl);
  font-weight: bold;
  color: var(--kuromi-pink);
  text-shadow: 2px 2px 0 var(--kuromi-dark-purple);
}

.stat-label {
  font-size: var(--font-xs);
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.profile-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
}

.detail-card {
  background: var(--kuromi-gray);
  padding: 25px;
  border-radius: 25px;
  border: 2px solid var(--kuromi-pink);
  transition: transform 0.3s ease;
}

.detail-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 0 var(--kuromi-dark-purple);
}

.detail-card h3 {
  margin-bottom: 20px;
  font-size: var(--font-lg);
}

.skills-card {
  max-width: 350px;
  justify-self: end;
}

.contact-card {
  max-width: 350px;
  justify-self: start;
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
  font-size: var(--font-sm);
}

.skill-name {
  font-weight: 600;
}

.skill-level {
  color: var(--kuromi-pink);
  font-weight: 600;
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
  gap: 12px;
  padding: 12px 0;
  border-bottom: 1px dashed var(--kuromi-purple);
  font-size: var(--font-sm);
}

.contact-icon {
  font-size: var(--font-base);
  min-width: 30px;
}

.contact-link {
  color: var(--text-light);
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: var(--font-sm);
  word-break: break-all;
}

.contact-link:hover {
  color: var(--kuromi-pink);
  text-decoration: underline;
}

.favorites h4 {
  color: var(--kuromi-pink);
  margin-bottom: 12px;
  font-size: var(--font-base);
}

.favorite-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tag {
  background: var(--kuromi-black);
  color: var(--kuromi-pink);
  padding: 6px 15px;
  border-radius: 50px;
  font-size: var(--font-xs);
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
    padding: 25px;
    gap: 25px;
  }
  
  .profile-avatar img {
    width: 160px;
    height: 160px;
  }
  
  .bio-box {
    text-align: left;
  }
  
  .stats {
    justify-content: center;
    gap: 20px;
  }
  
  .profile-details {
    grid-template-columns: 1fr;
    gap: 20px;
    justify-items: center;
  }
  
  .skills-card,
  .contact-card {
    max-width: 100%;
    width: 100%;
    justify-self: center;
  }
  
  .stat-value {
    font-size: var(--font-lg);
  }
}

@media (max-width: 480px) {
  .profile-header {
    padding: 20px;
  }
  
  .profile-avatar img {
    width: 140px;
    height: 140px;
  }
  
  .stats {
    flex-wrap: wrap;
    gap: 15px;
  }
  
  .stat-item {
    flex: 1 1 calc(50% - 15px);
  }
  
  .detail-card {
    padding: 20px;
  }
  
  .favorite-tags {
    gap: 8px;
  }
  
  .tag {
    padding: 5px 12px;
  }
  
  .contact-list li {
    padding: 10px 0;
  }
}
</style>