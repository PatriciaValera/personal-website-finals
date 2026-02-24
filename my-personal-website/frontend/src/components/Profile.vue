<template>
  <div class="profile-section">
    <div class="profile-header">
      <div class="profile-avatar">
        <img src="https://i.pravatar.cc/300?img=5" alt="Profile Avatar">
        <div class="avatar-caption">✧ riri ✧</div>
      </div>
      
      <div class="profile-info">
        <h2>Riri</h2>
        <p class="title">✦ purple aesthetic ✦</p>
        <p class="bio">
          ✧ dreamer | creator | stargazer ✧<br>
          living in a purple haze, creating beautiful things 
          and chasing stars. welcome to my little corner of the internet.
        </p>
        
        <div class="stats">
          <div class="stat-item">
            <span class="stat-value">42</span>
            <span class="stat-label">projects</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">888</span>
            <span class="stat-label">followers</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">∞</span>
            <span class="stat-label">dreams</span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="profile-details">
      <div class="detail-card">
        <h3>✧ skills ✧</h3>
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
      
      <div class="detail-card">
        <h3>✧ contact ✧</h3>
        <ul class="contact-list">
          <li>
            <span class="contact-icon">📧</span>
            <span>riri@purple.realm</span>
          </li>
          <li>
            <span class="contact-icon">✨</span>
            <span>@riri_aesthetic</span>
          </li>
          <li>
            <span class="contact-icon">✧</span>
            <span>github.com/riri</span>
          </li>
          <li>
            <span class="contact-icon">🏰</span>
            <span>purple realm</span>
          </li>
        </ul>
        
        <div class="favorites">
          <h4>favorites:</h4>
          <div class="favorite-tags">
            <span class="tag">purple</span>
            <span class="tag">stars</span>
            <span class="tag">moon</span>
            <span class="tag">dreams</span>
            <span class="tag">aesthetic</span>
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
  background: rgba(42, 26, 58, 0.6);
  backdrop-filter: blur(10px);
  padding: 30px;
  border-radius: 30px;
  border: 2px solid var(--purple-primary);
  position: relative;
  box-shadow: 0 10px 0 var(--purple-deep), 0 0 30px var(--purple-glow);
}

.profile-header::before {
  content: "✧";
  position: absolute;
  top: -10px;
  left: -10px;
  font-size: 40px;
  opacity: 0.3;
  color: var(--purple-accent);
  transform: rotate(-15deg);
  text-shadow: 0 0 15px var(--purple-glow);
}

.profile-header::after {
  content: "✦";
  position: absolute;
  bottom: -10px;
  right: -10px;
  font-size: 40px;
  opacity: 0.3;
  color: var(--purple-light);
  transform: rotate(15deg);
  text-shadow: 0 0 15px var(--purple-glow);
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
  border: 4px solid var(--purple-light);
  box-shadow: 0 8px 0 var(--purple-deep), 0 0 30px var(--purple-accent);
  transition: all 0.3s ease;
}

.profile-avatar img:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 0 var(--purple-deep), 0 0 40px var(--purple-glow);
}

.avatar-caption {
  margin-top: 10px;
  color: var(--purple-pastel);
  font-weight: bold;
  font-size: var(--font-sm);
  letter-spacing: 2px;
  text-shadow: 0 0 8px var(--purple-accent);
}

.profile-info {
  flex: 1;
}

.profile-info h2 {
  margin-bottom: 5px;
  font-size: var(--font-xxl);
}

.profile-info .title {
  color: var(--purple-soft);
  font-size: var(--font-base);
  margin-bottom: 15px;
  font-style: italic;
}

.profile-info .bio {
  line-height: 1.8;
  color: var(--text-light);
  margin-bottom: 20px;
  padding: 15px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  border-left: 4px solid var(--purple-accent);
  font-size: var(--font-base);
  backdrop-filter: blur(5px);
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
  font-size: var(--font-xxl);
  font-weight: bold;
  color: var(--purple-pastel);
  text-shadow: 0 0 15px var(--purple-accent);
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
  gap: 30px;
}

.detail-card {
  background: rgba(42, 26, 58, 0.6);
  backdrop-filter: blur(10px);
  padding: 25px;
  border-radius: 25px;
  border: 2px solid var(--purple-primary);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 0 var(--purple-deep);
}

.detail-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 13px 0 var(--purple-deep), 0 0 30px var(--purple-glow);
  border-color: var(--purple-accent);
}

.detail-card::before {
  content: "✧";
  position: absolute;
  bottom: -10px;
  right: -10px;
  font-size: 80px;
  opacity: 0.1;
  color: var(--purple-accent);
  transform: rotate(10deg);
  text-shadow: 0 0 20px var(--purple-glow);
}

.detail-card h3 {
  margin-bottom: 20px;
  font-size: var(--font-xl);
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
  color: var(--purple-pastel);
}

.skill-bar {
  width: 100%;
  height: 10px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.5);
}

.skill-progress {
  height: 100%;
  background: linear-gradient(90deg, var(--purple-primary), var(--purple-accent));
  border-radius: 10px;
  transition: width 1s ease;
  box-shadow: 0 0 10px var(--purple-glow);
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
  border-bottom: 1px dashed var(--purple-primary);
  font-size: var(--font-base);
}

.contact-icon {
  font-size: var(--font-xl);
  min-width: 30px;
  color: var(--purple-accent);
}

.favorites h4 {
  color: var(--purple-pastel);
  margin-bottom: 10px;
  font-size: var(--font-lg);
}

.favorite-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tag {
  background: rgba(0, 0, 0, 0.3);
  color: var(--purple-pastel);
  padding: 8px 20px;
  border-radius: 50px;
  font-size: var(--font-sm);
  border: 1px solid var(--purple-primary);
  transition: all 0.3s ease;
  cursor: default;
  backdrop-filter: blur(5px);
}

.tag:hover {
  background: var(--purple-primary);
  color: var(--white-soft);
  transform: scale(1.05);
  box-shadow: 0 0 15px var(--purple-glow);
  border-color: var(--purple-accent);
}

/* Responsive Design */
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
    flex-wrap: wrap;
    gap: 20px;
  }
  
  .profile-details {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .stat-value {
    font-size: var(--font-xl);
  }
}

@media (max-width: 480px) {
  .profile-avatar img {
    width: 150px;
    height: 150px;
  }
  
  .contact-list li {
    font-size: var(--font-sm);
    flex-wrap: wrap;
  }
  
  .tag {
    font-size: var(--font-xs);
    padding: 5px 12px;
  }
}
</style>