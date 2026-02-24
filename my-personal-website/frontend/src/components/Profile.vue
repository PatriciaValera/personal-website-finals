<template>
  <div class="profile-section">
    <div class="profile-header">
      <div class="profile-avatar">
        <img src="https://i.pravatar.cc/300?img=12" alt="Inosuke Style Avatar">
        <div class="avatar-caption">⚡ 猪突猛進 ⚡</div>
      </div>
      
      <div class="profile-info">
        <h2>INO♯UKE HASHIBIRA</h2>
        <p class="title">〜 Beast Breathing Hashira 〜</p>
        <p class="bio">
          ⚔️ Born and raised by boars in the mountains! ⚔️<br><br>
          I'm the strongest demon slayer you'll ever meet! 
          I use Beast Breathing and fight with two swords. 
          Don't underestimate me just because I wear a boar mask - 
          I'll defeat any demon that gets in my way!
        </p>
        
        <div class="stats">
          <div class="stat-item">
            <span class="stat-value">⚡99</span>
            <span class="stat-label">Strength</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">∞</span>
            <span class="stat-label">Fighting Spirit</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">🐗</span>
            <span class="stat-label">Boar Power</span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="profile-details">
      <div class="detail-card">
        <h3>⚔️ Beast Breathing Forms ⚔️</h3>
        <div class="skills-grid">
          <div v-for="skill in skills" :key="skill.name" class="skill-item">
            <div class="skill-info">
              <span class="skill-name">{{ skill.name }}</span>
              <span class="skill-level">{{ skill.level }}%</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress" :style="{ width: skill.level + '%' }"></div>
            </div>
            <span class="skill-desc">{{ skill.description }}</span>
          </div>
        </div>
      </div>
      
      <div class="detail-card">
        <h3>🐗 Boar Warrior Info 🐗</h3>
        <ul class="info-list">
          <li>
            <span class="info-icon">🎂</span>
            <div>
              <strong>Age:</strong> 17 (Boar years = eternal)
            </div>
          </li>
          <li>
            <span class="info-icon">🗡️</span>
            <div>
              <strong>Weapon:</strong> Dual Nichirin Blades (Serrated)
            </div>
          </li>
          <li>
            <span class="info-icon">🏔️</span>
            <div>
              <strong>Origin:</strong> Raised by Boars in the Mountains
            </div>
          </li>
          <li>
            <span class="info-icon">👥</span>
            <div>
              <strong>Companions:</strong> Tanjiro, Zenitsu, Nezuko
            </div>
          </li>
          <li>
            <span class="info-icon">🎯</span>
            <div>
              <strong>Goal:</strong> Become the strongest Hashira!
            </div>
          </li>
        </ul>
        
        <div class="fighting-style">
          <h4>Fighting Style:</h4>
          <div class="style-tags">
            <span class="tag">Wild</span>
            <span class="tag">Aggressive</span>
            <span class="tag">Instinctive</span>
            <span class="tag">Unpredictable</span>
            <span class="tag">Beast-like</span>
          </div>
        </div>
        
        <div class="quote-box">
          <span class="quote-mark">"</span>
          <p class="quote">I don't need friends! I'm strong enough on my own! ...But Tanjiro, you're okay I guess.</p>
          <span class="quote-mark">"</span>
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
        { 
          name: '壱ノ型 穿ち抜き (Piercing Rain)', 
          level: 100,
          description: 'Rapid thrusting attack'
        },
        { 
          name: '弐ノ型 切り裂き (Slash)', 
          level: 98,
          description: 'Wild slashing motion'
        },
        { 
          name: '参ノ型 喰い裂き (Devour)', 
          level: 95,
          description: 'Biting attack pattern'
        },
        { 
          name: '肆ノ型 砕き (Smash)', 
          level: 96,
          description: 'Powerful crushing blow'
        },
        { 
          name: '伍ノ型 狂い裂き (Mad Slash)', 
          level: 97,
          description: 'Berserker-style attacks'
        },
        { 
          name: '陸ノ型 乱れ (Wild Chaos)', 
          level: 94,
          description: 'Chaotic multi-directional slashes'
        }
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
  background: var(--inosuke-gray);
  padding: 30px;
  border-radius: 0 50px 0 50px;
  border: 3px solid var(--inosuke-blue);
  position: relative;
  box-shadow: 10px 10px 0 var(--inosuke-dark-blue);
}

.profile-avatar {
  position: relative;
  text-align: center;
}

.profile-avatar img {
  width: 200px;
  height: 200px;
  border-radius: 40% 40% 20% 20%;
  object-fit: cover;
  border: 4px solid var(--inosuke-beige);
  box-shadow: 8px 8px 0 var(--inosuke-blue);
  filter: contrast(1.1);
}

.avatar-caption {
  margin-top: 15px;
  color: var(--inosuke-beige);
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 2px;
  font-family: 'Bangers', cursive;
  text-shadow: 2px 2px 0 var(--inosuke-dark-blue);
}

.profile-info {
  flex: 1;
}

.profile-info h2 {
  margin-bottom: 5px;
  font-size: 36px;
  color: var(--inosuke-blue);
}

.profile-info .title {
  color: var(--inosuke-beige);
  font-size: 18px;
  margin-bottom: 15px;
  font-style: italic;
  border-bottom: 2px dashed var(--inosuke-blue);
  padding-bottom: 10px;
}

.profile-info .bio {
  line-height: 1.8;
  color: var(--text-light);
  margin-bottom: 20px;
  padding: 20px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 0 30px 0 30px;
  border-left: 5px solid var(--inosuke-blue);
  border-bottom: 3px solid var(--inosuke-beige);
}

.stats {
  display: flex;
  gap: 30px;
  margin-top: 20px;
  background: var(--inosuke-black);
  padding: 15px;
  border-radius: 0 20px 0 20px;
  border: 2px solid var(--inosuke-blue);
}

.stat-item {
  text-align: center;
  flex: 1;
}

.stat-value {
  display: block;
  font-size: 32px;
  font-weight: bold;
  color: var(--inosuke-beige);
  text-shadow: 3px 3px 0 var(--inosuke-dark-blue);
}

.stat-label {
  font-size: 12px;
  color: var(--inosuke-light-blue);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.profile-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

.detail-card {
  background: var(--inosuke-gray);
  padding: 25px;
  border-radius: 0 40px 0 40px;
  border: 2px solid var(--inosuke-blue);
  transition: transform 0.3s ease;
  box-shadow: 8px 8px 0 var(--inosuke-dark-blue);
}

.detail-card:hover {
  transform: translate(-5px, -5px);
  box-shadow: 13px 13px 0 var(--inosuke-dark-blue);
}

.detail-card h3 {
  margin-bottom: 20px;
  font-size: 24px;
  border-bottom: 2px solid var(--inosuke-beige);
  padding-bottom: 10px;
}

.skills-grid {
  display: flex;
  flex-direction: column;
  gap: 20px;
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
  color: var(--inosuke-beige);
  font-size: 14px;
}

.skill-level {
  color: var(--inosuke-blue);
  font-weight: bold;
}

.skill-bar {
  width: 100%;
  height: 12px;
  background: var(--inosuke-black);
  border-radius: 0 10px 0 10px;
  overflow: hidden;
  border: 1px solid var(--inosuke-beige);
}

.skill-progress {
  height: 100%;
  background: linear-gradient(90deg, var(--inosuke-blue), var(--inosuke-light-blue));
  border-radius: 0 8px 0 8px;
  transition: width 1s ease;
}

.skill-desc {
  display: block;
  font-size: 12px;
  color: var(--text-muted);
  margin-top: 5px;
  font-style: italic;
}

.info-list {
  list-style: none;
  margin-bottom: 20px;
}

.info-list li {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 12px 0;
  border-bottom: 1px dashed var(--inosuke-blue);
}

.info-icon {
  font-size: 24px;
  min-width: 40px;
  text-align: center;
}

.fighting-style h4 {
  color: var(--inosuke-beige);
  margin: 20px 0 10px;
  font-size: 18px;
}

.style-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

.tag {
  background: var(--inosuke-black);
  color: var(--inosuke-light-blue);
  padding: 5px 15px;
  border-radius: 0 15px 0 15px;
  font-size: 12px;
  border: 1px solid var(--inosuke-blue);
  font-weight: bold;
  transition: all 0.3s ease;
}

.tag:hover {
  background: var(--inosuke-blue);
  color: var(--inosuke-black);
  transform: scale(1.05);
}

.quote-box {
  background: var(--inosuke-black);
  padding: 20px;
  border-radius: 0 30px 0 30px;
  margin-top: 20px;
  border-left: 5px solid var(--inosuke-beige);
  position: relative;
}

.quote-mark {
  color: var(--inosuke-blue);
  font-size: 40px;
  font-family: serif;
  line-height: 0;
  opacity: 0.5;
}

.quote {
  font-style: italic;
  margin: 10px 0;
  color: var(--text-light);
  font-size: 16px;
  text-align: center;
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
  
  .stat-value {
    font-size: 24px;
  }
}
</style>