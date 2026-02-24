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
  padding: 15px 0; /* Reduced by 5px */
}

.profile-header {
  display: flex;
  gap: 35px; /* Reduced by 5px */
  margin-bottom: 35px; /* Reduced by 5px */
  flex-wrap: wrap;
  background: rgba(42, 26, 58, 0.6);
  backdrop-filter: blur(10px);
  padding: 25px; /* Reduced by 5px */
  border-radius: 25px; /* Reduced by 5px */
  border: 2px solid var(--purple-primary);
  position: relative;
  box-shadow: 0 8px 0 var(--purple-deep), 0 0 30px var(--purple-glow); /* Reduced shadow offset by 2px */
}

.profile-header::before {
  content: "✧";
  position: absolute;
  top: -8px; /* Adjusted */
  left: -8px; /* Adjusted */
  font-size: 35px; /* Reduced by 5px */
  opacity: 0.3;
  color: var(--purple-accent);
  transform: rotate(-15deg);
  text-shadow: 0 0 15px var(--purple-glow);
}

.profile-header::after {
  content: "✦";
  position: absolute;
  bottom: -8px; /* Adjusted */
  right: -8px; /* Adjusted */
  font-size: 35px; /* Reduced by 5px */
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
  width: 160px; /* Reduced by 20px */
  height: 160px; /* Reduced by 20px */
  border-radius: 25px 25px 45% 45%; /* Adjusted */
  object-fit: cover;
  border: 4px solid var(--purple-light);
  box-shadow: 0 6px 0 var(--purple-deep), 0 0 30px var(--purple-accent); /* Reduced shadow offset */
  transition: all 0.3s ease;
}

.profile-avatar img:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 0 var(--purple-deep), 0 0 40px var(--purple-glow); /* Reduced shadow offset */
}

.avatar-caption {
  margin-top: 8px; /* Reduced by 2px */
  color: var(--white-pure);
  font-weight: bold;
  font-size: var(--font-sm);
  letter-spacing: 2px;
  text-shadow: 0 0 8px var(--purple-accent);
}

.profile-info {
  flex: 1;
}

.profile-info h2 {
  margin-bottom: 3px; /* Reduced by 2px */
  font-size: var(--font-xxl);
  color: var(--white-pure);
}

.profile-info .title {
  color: var(--white-pure);
  font-size: var(--font-base);
  margin-bottom: 10px; /* Reduced by 5px */
  font-style: italic;
  opacity: 0.9;
}

.profile-info .bio {
  line-height: 1.8;
  color: var(--white-pure);
  margin-bottom: 15px; /* Reduced by 5px */
  padding: 10px; /* Reduced by 5px */
  background: rgba(0, 0, 0, 0.2);
  border-radius: 15px; /* Reduced by 5px */
  border-left: 4px solid var(--purple-accent);
  font-size: var(--font-base);
  backdrop-filter: blur(5px);
}

.stats {
  display: flex;
  gap: 25px; /* Reduced by 5px */
  margin-top: 15px; /* Reduced by 5px */
}

.stat-item {
  text-align: center;
}

.stat-value {
  display: block;
  font-size: var(--font-xxl);
  font-weight: bold;
  color: var(--white-pure);
  text-shadow: 0 0 15px var(--purple-accent);
}

.stat-label {
  font-size: var(--font-xs);
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.profile-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px; /* Reduced by 5px */
}

.detail-card {
  background: rgba(42, 26, 58, 0.6);
  backdrop-filter: blur(10px);
  padding: 20px; /* Reduced by 5px */
  border-radius: 20px; /* Reduced by 5px */
  border: 2px solid var(--purple-primary);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 6px 0 var(--purple-deep); /* Reduced shadow offset */
}

.detail-card:hover {
  transform: translateY(-3px); /* Reduced by 2px */
  box-shadow: 0 9px 0 var(--purple-deep), 0 0 30px var(--purple-glow); /* Adjusted */
  border-color: var(--purple-accent);
}

.detail-card::before {
  content: "✧";
  position: absolute;
  bottom: -8px; /* Adjusted */
  right: -8px; /* Adjusted */
  font-size: 70px; /* Reduced by 10px */
  opacity: 0.1;
  color: var(--purple-accent);
  transform: rotate(10deg);
  text-shadow: 0 0 20px var(--purple-glow);
}

.detail-card h3 {
  margin-bottom: 15px; /* Reduced by 5px */
  font-size: var(--font-xl);
  color: var(--white-pure);
}

.skills-grid {
  display: flex;
  flex-direction: column;
  gap: 10px; /* Reduced by 5px */
}

.skill-item {
  width: 100%;
}

.skill-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 3px; /* Reduced by 2px */
  color: var(--white-pure);
  font-size: var(--font-sm);
}

.skill-name {
  font-weight: 600;
}

.skill-level {
  color: var(--purple-accent);
}

.skill-bar {
  width: 100%;
  height: 8px; /* Reduced by 2px */
  background: rgba(0, 0, 0, 0.3);
  border-radius: 8px; /* Reduced by 2px */
  overflow: hidden;
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.5);
}

.skill-progress {
  height: 100%;
  background: linear-gradient(90deg, var(--purple-primary), var(--purple-accent));
  border-radius: 8px; /* Reduced by 2px */
  transition: width 1s ease;
  box-shadow: 0 0 10px var(--purple-glow);
}

.contact-list {
  list-style: none;
  margin-bottom: 15px; /* Reduced by 5px */
}

.contact-list li {
  display: flex;
  align-items: center;
  gap: 12px; /* Reduced by 3px */
  padding: 8px 0; /* Reduced by 4px */
  border-bottom: 1px dashed var(--purple-primary);
  font-size: var(--font-base);
  color: var(--white-pure);
}

.contact-icon {
  font-size: var(--font-lg); /* Reduced by 1 size */
  min-width: 25px; /* Reduced by 5px */
  color: var(--purple-accent);
}

.favorites h4 {
  color: var(--white-pure);
  margin-bottom: 8px; /* Reduced by 2px */
  font-size: var(--font-lg);
}

.favorite-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px; /* Reduced by 2px */
}

.tag {
  background: rgba(0, 0, 0, 0.3);
  color: var(--white-pure);
  padding: 5px 15px; /* Reduced from 8px 20px */
  border-radius: 45px; /* Reduced by 5px */
  font-size: var(--font-sm);
  border: 1px solid var(--purple-primary);
  transition: all 0.3s ease;
  cursor: default;
  backdrop-filter: blur(5px);
}

.tag:hover {
  background: var(--purple-primary);
  color: var(--white-pure);
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
    padding: 15px; /* Reduced by 5px */
  }
  
  .profile-info .bio {
    text-align: left;
  }
  
  .stats {
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px; /* Reduced by 5px */
  }
  
  .profile-details {
    grid-template-columns: 1fr;
    gap: 15px; /* Reduced by 5px */
  }
  
  .stat-value {
    font-size: var(--font-xl);
  }
}

@media (max-width: 480px) {
  .profile-avatar img {
    width: 130px; /* Reduced */
    height: 130px; /* Reduced */
  }
  
  .contact-list li {
    font-size: var(--font-sm);
    flex-wrap: wrap;
  }
  
  .tag {
    font-size: var(--font-xs);
    padding: 4px 10px; /* Reduced */
  }
}
</style>