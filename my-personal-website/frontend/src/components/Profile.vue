<template>
  <div class="profile-section">
    <!-- Magic transformation sequence -->
    <div class="transformation-sparkle" v-if="showSparkle">
      <span>✨</span>
      <span>👠</span>
      <span>🎃</span>
      <span>👑</span>
    </div>
    
    <div class="profile-header">
      <div class="profile-avatar">
        <img src="https://i.pravatar.cc/300?img=5" alt="Rose Cinderella">
        <div class="avatar-caption">
          <span class="caption-text">Rose Cinderella</span>
          <span class="magic-wand">✨</span>
        </div>
        <!-- Family heirloom badge -->
        <div class="glass-slipper-badge">
          <span class="slipper">👠</span>
          <span class="badge-text">Family Heirloom</span>
        </div>
      </div>
      
      <div class="profile-info">
        <h2>Rose Cinderella</h2>
        <p class="title">〜 Heir to Pumpkin Magic 〜</p>
        <p class="bio">
          ✨ An ordinary girl from Earth who discovered she's Cinderella's granddaughter! ✨<br><br>
          I'm now studying at Regal Academy, learning to master my Pumpkin Magic and 
          making the best fairy tale friends ever! I may be a bit clumsy and I absolutely 
          LOVE shoes (thanks Grandma!), but my heart is full of dreams and magic.
        </p>
        
        <div class="magical-stats">
          <div class="stat-card">
            <span class="stat-icon">🎃</span>
            <span class="stat-value">Pumpkin Magic</span>
            <div class="magic-meter">
              <div class="meter-fill" style="width: 90%"></div>
            </div>
          </div>
          
          <div class="stat-card">
            <span class="stat-icon">👠</span>
            <span class="stat-value">Shoe Collection</span>
            <div class="magic-meter">
              <div class="meter-fill" style="width: 100%"></div>
            </div>
          </div>
          
          <div class="stat-card">
            <span class="stat-icon">📚</span>
            <span class="stat-value">Fairy Tale Knowledge</span>
            <div class="magic-meter">
              <div class="meter-fill" style="width: 95%"></div>
            </div>
          </div>
        </div>
        
        <div class="fairy-tale-friends">
          <h3>My Fairy Tale Friends ✨</h3>
          <div class="friends-grid">
            <div v-for="friend in friends" :key="friend.name" class="friend-badge">
              <span class="friend-icon">{{ friend.icon }}</span>
              <span class="friend-name">{{ friend.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="profile-details">
      <div class="detail-card magic-card">
        <h3>🎃 Pumpkin Magic Spells 🎃</h3>
        <div class="spells-grid">
          <div v-for="spell in spells" :key="spell.name" class="spell-item">
            <div class="spell-icon">{{ spell.icon }}</div>
            <div class="spell-info">
              <span class="spell-name">{{ spell.name }}</span>
              <span class="spell-desc">{{ spell.description }}</span>
            </div>
          </div>
        </div>
        
        <div class="magical-items">
          <h4>Magical Items:</h4>
          <div class="items-list">
            <span class="item">👠 Glass Slippers</span>
            <span class="item">🎃 Magic Wand</span>
            <span class="item">🐭 Gigi (my mouse friend)</span>
          </div>
        </div>
      </div>
      
      <div class="detail-card fairytale-card">
        <h3>👑 About Me 👑</h3>
        
        <div class="story-section">
          <h4>My Story:</h4>
          <p>I discovered I'm Cinderella's granddaughter when I found a magical key 
          that led me to FairyTale Land! Now I study at Regal Academy and have the 
          most amazing adventures with my friends.</p>
        </div>
        
        <div class="likes-section">
          <h4>Things I Love:</h4>
          <div class="like-tags">
            <span class="tag" v-for="like in likes" :key="like">{{ like }}</span>
          </div>
        </div>
        
        <div class="contact-info">
          <h4>Find Me:</h4>
          <ul class="contact-list">
            <li>
              <span class="contact-icon">🏰</span>
              <span>Regal Academy, FairyTale Land</span>
            </li>
            <li>
              <span class="contact-icon">🌍</span>
              <span>Also on Earth with Travis</span>
            </li>
            <li>
              <span class="contact-icon">💌</span>
              <span>rose.cinderella@regalacademy.edu</span>
            </li>
          </ul>
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
      showSparkle: true,
      friends: [
        { name: 'Astoria', icon: '👩‍🦰' },
        { name: 'Joy', icon: '🐸' },
        { name: 'Hawk', icon: '❄️' },
        { name: 'Travis', icon: '🐻' },
        { name: 'Ling Ling', icon: '🌸' }
      ],
      spells: [
        { name: 'Pumpkin Carriage', icon: '🎃', description: 'Create magical vehicles' },
        { name: 'Sparkle Dust', icon: '✨', description: 'Sprinkle fairy dust' },
        { name: 'Shoe Shine', icon: '👠', description: 'Polish any footwear' },
        { name: 'Midnight Glow', icon: '🌙', description: 'Light up dark places' }
      ],
      likes: [
        'Shoes!', 'Fairy Tales', 'Pumpkins', 'Adventures', 
        'Making Friends', 'Dancing', 'Grandma\'s Stories', 'Magic'
      ]
    }
  },
  mounted() {
    // Hide sparkle after animation
    setTimeout(() => {
      this.showSparkle = false
    }, 3000)
  }
}
</script>

<style scoped>
.profile-section {
  padding: 20px 0;
  position: relative;
}

.transformation-sparkle {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 20px;
  font-size: 60px;
  z-index: 1000;
  animation: transformMagic 3s ease-out forwards;
  pointer-events: none;
}

@keyframes transformMagic {
  0% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
  20% { opacity: 1; transform: translate(-50%, -50%) scale(1.2); }
  80% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
  100% { opacity: 0; transform: translate(-50%, -50%) scale(1.5); }
}

.profile-header {
  display: flex;
  gap: 40px;
  margin-bottom: 40px;
  flex-wrap: wrap;
  background: linear-gradient(135deg, rgba(255, 182, 193, 0.3), rgba(255, 255, 255, 0.7));
  padding: 30px;
  border-radius: 40px;
  border: 3px solid var(--rose-pink);
  position: relative;
  backdrop-filter: blur(5px);
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
  border: 5px solid var(--fairy-gold);
  box-shadow: 0 10px 0 var(--pumpkin-orange);
  transition: transform 0.3s ease;
}

.profile-avatar img:hover {
  transform: scale(1.05) rotate(2deg);
}

.avatar-caption {
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}

.caption-text {
  color: var(--rose-magenta);
  font-weight: bold;
  font-size: 16px;
  background: white;
  padding: 5px 15px;
  border-radius: 50px;
  border: 2px solid var(--fairy-gold);
}

.magic-wand {
  font-size: 20px;
  animation: wandWave 2s ease infinite;
}

@keyframes wandWave {
  0%, 100% { transform: rotate(-10deg); }
  50% { transform: rotate(10deg); }
}

.glass-slipper-badge {
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, var(--glass-slipper), white);
  padding: 8px 15px;
  border-radius: 50px;
  border: 2px solid var(--fairy-gold);
  display: flex;
  align-items: center;
  gap: 5px;
  white-space: nowrap;
  box-shadow: 0 4px 0 var(--pumpkin-orange);
}

.slipper {
  font-size: 18px;
}

.badge-text {
  color: var(--rose-magenta);
  font-size: 12px;
  font-weight: bold;
}

.profile-info {
  flex: 1;
}

.profile-info h2 {
  font-size: 36px;
  margin-bottom: 5px;
  background: linear-gradient(135deg, var(--rose-magenta), var(--magic-purple));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.title {
  color: var(--pumpkin-orange);
  font-size: 18px;
  margin-bottom: 15px;
  font-style: italic;
}

.bio {
  background: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 25px;
  line-height: 1.8;
  margin-bottom: 20px;
  border-left: 5px solid var(--rose-pink);
  box-shadow: 0 5px 15px rgba(255, 105, 180, 0.1);
}

.magical-stats {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 20px 0;
}

.stat-card {
  background: white;
  padding: 15px;
  border-radius: 20px;
  border: 2px solid var(--rose-pink);
}

.stat-icon {
  font-size: 24px;
  margin-right: 10px;
}

.stat-value {
  font-weight: bold;
  color: var(--rose-magenta);
}

.magic-meter {
  width: 100%;
  height: 10px;
  background: #ffe4e1;
  border-radius: 10px;
  margin-top: 8px;
  overflow: hidden;
}

.meter-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--rose-pink), var(--pumpkin-orange));
  border-radius: 10px;
  transition: width 1s ease;
}

.fairy-tale-friends h3 {
  margin: 20px 0 15px;
  font-size: 22px;
}

.friends-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.friend-badge {
  background: linear-gradient(135deg, var(--rose-pink), var(--cinderella-blue));
  color: white;
  padding: 8px 15px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  gap: 8px;
  border: 2px solid var(--fairy-gold);
  transition: transform 0.3s ease;
}

.friend-badge:hover {
  transform: translateY(-3px) scale(1.05);
}

.friend-icon {
  font-size: 18px;
}

.profile-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

.detail-card {
  background: white;
  padding: 30px;
  border-radius: 30px;
  border: 3px solid var(--rose-pink);
  transition: all 0.3s ease;
}

.detail-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 0 var(--pumpkin-orange);
}

.magic-card {
  background: linear-gradient(135deg, #fff5f5, white);
}

.fairytale-card {
  background: linear-gradient(135deg, #f0f8ff, white);
}

.spells-grid {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 20px 0;
}

.spell-item {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px;
  background: rgba(255, 182, 193, 0.1);
  border-radius: 15px;
  border: 1px dashed var(--rose-pink);
}

.spell-icon {
  font-size: 30px;
  min-width: 50px;
  text-align: center;
}

.spell-info {
  flex: 1;
}

.spell-name {
  display: block;
  font-weight: bold;
  color: var(--rose-magenta);
}

.spell-desc {
  font-size: 14px;
  color: var(--text-soft);
}

.magical-items {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 2px dashed var(--rose-pink);
}

.items-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
}

.item {
  background: var(--cinderella-blue);
  color: white;
  padding: 5px 15px;
  border-radius: 50px;
  font-size: 14px;
}

.story-section {
  margin-bottom: 20px;
}

.story-section p {
  background: #f9f9f9;
  padding: 15px;
  border-radius: 15px;
  line-height: 1.8;
  font-style: italic;
}

.likes-section {
  margin: 20px 0;
}

.like-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
}

.tag {
  background: var(--rose-pink);
  color: white;
  padding: 5px 12px;
  border-radius: 50px;
  font-size: 13px;
  border: 1px solid var(--fairy-gold);
}

.contact-list {
  list-style: none;
  margin-top: 10px;
}

.contact-list li {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px 0;
  border-bottom: 1px dashed var(--rose-pink);
}

.contact-icon {
  font-size: 20px;
  min-width: 30px;
}

@media (max-width: 768px) {
  .profile-header {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 20px;
  }
  
  .glass-slipper-badge {
    position: relative;
    bottom: 0;
    margin-top: 10px;
  }
  
  .profile-details {
    grid-template-columns: 1fr;
  }
  
  .friends-grid {
    justify-content: center;
  }
}
</style>