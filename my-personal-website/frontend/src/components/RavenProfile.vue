<template>
  <div class="raven-profile">
    <!-- Header Section -->
    <div class="profile-header">
      <h1>Raven</h1>
      <p class="subtitle">Empath • Daughter of Trigon • Titan</p>
    </div>

    <hr class="divider" />

    <!-- Profile Main Section -->
    <div class="profile-main">
      <div class="profile-image">
        <div class="image-placeholder">
          <span class="placeholder-icon">🔮</span>
        </div>
      </div>

      <div class="profile-info">
        <h2>Raven Roth</h2>
        <p class="title">あざみ (Azarath Metrion Zinthos)</p>

        <!-- Bio -->
        <ul class="bio-list">
          <li>⚡ Empath with demonic heritage, fighting to control my powers</li>
          <li>📚 Book lover, poetry enthusiast, and master of mystic arts</li>
          <li>🖤 Finding balance between light and darkness within</li>
        </ul>

        <!-- Stats -->
        <div class="stats">
          <div class="stat-item">
            <span class="stat-number">500+</span>
            <span class="stat-label">DEMONS DEFEATED</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">∞</span>
            <span class="stat-label">DIMENSIONS</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">4</span>
            <span class="stat-label">TITANS</span>
          </div>
        </div>

        <hr class="section-divider" />

        <!-- Powers & Abilities -->
        <div class="powers-section">
          <h3>⚡ Powers & Abilities ⚡</h3>
          <div class="power-item">
            <span class="power-name">Soul-Self</span>
            <span class="power-level">95%</span>
          </div>
          <div class="power-item">
            <span class="power-name">Empathy</span>
            <span class="power-level">100%</span>
          </div>
          <div class="power-item">
            <span class="power-name">Telekinesis</span>
            <span class="power-level">88%</span>
          </div>
          <div class="power-item">
            <span class="power-name">Levitation</span>
            <span class="power-level">92%</span>
          </div>
          <div class="power-item">
            <span class="power-name">Azarath Metrion Zinthos</span>
            <span class="power-level">∞</span>
          </div>
        </div>

        <hr class="section-divider" />

        <!-- Contact/Info -->
        <div class="info-section">
          <h3>📿 Contact / Info 📿</h3>
          <div class="info-item">📧 raven@titans.tower</div>
          <div class="info-item">🔮 azarath.metrion.zinthos</div>
          <div class="info-item">🖤 Titans Tower, Jump City</div>
          <div class="info-item">📖 Reading "The Art of Azar"</div>
        </div>

        <hr class="section-divider" />

        <!-- Favorite Quotes -->
        <div class="quotes-section">
          <h3>💜 Favorite Mantras 💜</h3>
          <div class="quote-item">"Azarath Metrion Zinthos"</div>
          <div class="quote-item">"I'm not antisocial, I just don't like people"</div>
          <div class="quote-item">"Darkness cannot drive out darkness; only light can do that"</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RavenProfile'
}
</script>

<style scoped>
.raven-profile {
  padding: 20px;
  color: #e0e0e0;
  max-width: 900px;
  margin: 0 auto;
  background: linear-gradient(135deg, #0f0719 0%, #1a1025 100%);
  border-radius: 20px;
  border: 2px solid #4a1d6d;
  font-family: 'Poppins', sans-serif;
}

.profile-header {
  text-align: left;
  margin-bottom: 10px;
}

.profile-header h1 {
  font-size: 32px;
  color: #b19cd9;
  margin: 0;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.profile-header .subtitle {
  color: #9370db;
  font-size: 14px;
  margin: 5px 0 0 0;
  font-style: italic;
}

.divider {
  border: none;
  border-top: 2px solid #4a1d6d;
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
  background: linear-gradient(135deg, #2c1a4d, #1a1025);
  border: 3px solid #9370db;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.placeholder-icon {
  font-size: 80px;
  color: #b19cd9;
  animation: float 4s ease infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.profile-info {
  flex: 1;
  min-width: 300px;
}

.profile-info h2 {
  font-size: 24px;
  color: #b19cd9;
  margin: 0 0 5px 0;
  font-weight: 600;
}

.title {
  color: #9370db;
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
  border-left: 3px solid #4a1d6d;
}

.stats {
  display: flex;
  gap: 30px;
  margin: 20px 0;
  padding: 10px 0;
  flex-wrap: wrap;
}

.stat-item {
  display: flex;
  flex-direction: column;
}

.stat-number {
  font-size: 24px;
  font-weight: 700;
  color: #b19cd9;
  line-height: 1.2;
}

.stat-label {
  font-size: 11px;
  color: #808080;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.section-divider {
  border: none;
  border-top: 1px solid #4a1d6d;
  margin: 25px 0;
}

.powers-section,
.info-section,
.quotes-section {
  margin: 20px 0;
}

.powers-section h3,
.info-section h3,
.quotes-section h3 {
  color: #b19cd9;
  font-size: 18px;
  margin: 0 0 15px 0;
  font-weight: 600;
}

.power-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  font-size: 14px;
  border-bottom: 1px dotted #4a1d6d;
  padding-bottom: 5px;
}

.power-name {
  color: #e0e0e0;
}

.power-level {
  color: #9370db;
  font-weight: 600;
}

.info-item {
  margin-bottom: 12px;
  font-size: 14px;
  color: #e0e0e0;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 5px 0;
  border-bottom: 1px dashed #2c1a4d;
}

.quote-item {
  margin-bottom: 12px;
  font-size: 14px;
  color: #c084fc;
  font-style: italic;
  padding: 8px 12px;
  background: #1a1025;
  border-radius: 10px;
  border-left: 3px solid #4a1d6d;
}

/* Responsive Design */
@media (max-width: 768px) {
  .profile-main {
    flex-direction: column;
    align-items: center;
  }

  .profile-image {
    flex: 0 0 auto;
    margin-bottom: 20px;
  }

  .profile-info {
    width: 100%;
  }

  .stats {
    gap: 20px;
    justify-content: center;
  }

  .profile-header h1 {
    font-size: 28px;
  }
}

@media (max-width: 480px) {
  .raven-profile {
    padding: 15px;
  }

  .profile-header h1 {
    font-size: 24px;
  }

  .profile-info h2 {
    font-size: 20px;
  }

  .stats {
    gap: 15px;
  }

  .stat-number {
    font-size: 18px;
  }

  .image-placeholder {
    width: 150px;
    height: 150px;
  }

  .placeholder-icon {
    font-size: 60px;
  }
}
</style>