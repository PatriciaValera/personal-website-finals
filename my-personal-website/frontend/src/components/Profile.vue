<template>
  <div class="profile-section">
    <!-- Header Section -->
    <div class="profile-header">
      <h1>Kuromi's Lair</h1>
      <p class="subtitle">悪い子ちゃんのプロフィール</p>
    </div>

    <hr class="divider" />

    <!-- Profile Main Section -->
    <div class="profile-main">
      <h2>Kuromi Chan</h2>
      <p class="bad-girl">悪い子ちゃん (Bad Girl)</p>

      <!-- Bio with bullet points -->
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
      </div>

      <hr class="section-divider" />

      <!-- Contact Section -->
      <div class="contact-section">
        <h3>Contact Info 💬</h3>
        <div class="contact-item">📧 kuromi@dark-cute.com</div>
        <div class="contact-item">🐦 @kuromi_official</div>
        <div class="contact-item">💻 github.com/kuromi</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile'
}
</script>

<style scoped>
.profile-section {
  padding: 20px;
  color: var(--text-light);
  max-width: 800px;
  margin: 0 auto;
}

.profile-header {
  text-align: left;
  margin-bottom: 10px;
}

.profile-header h1 {
  font-size: 32px;
  color: var(--kuromi-pink);
  margin: 0;
  font-weight: 700;
  letter-spacing: 1px;
}

.profile-header .subtitle {
  color: var(--kuromi-purple);
  font-size: 16px;
  margin: 5px 0 0 0;
}

.divider {
  border: none;
  border-top: 2px solid var(--kuromi-pink);
  margin: 15px 0 25px 0;
  opacity: 0.5;
}

.profile-main h2 {
  font-size: 24px;
  color: var(--kuromi-pink);
  margin: 0 0 5px 0;
  font-weight: 600;
}

.bad-girl {
  color: var(--kuromi-purple);
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
  position: relative;
  padding-left: 5px;
}

.stats {
  display: flex;
  gap: 30px;
  margin: 20px 0;
  padding: 10px 0;
}

.stat-item {
  display: flex;
  flex-direction: column;
}

.stat-number {
  font-size: 24px;
  font-weight: 700;
  color: var(--kuromi-pink);
  line-height: 1.2;
}

.stat-label {
  font-size: 11px;
  color: var(--text-muted);
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.section-divider {
  border: none;
  border-top: 1px solid var(--kuromi-purple);
  margin: 20px 0;
  opacity: 0.3;
}

.skills-section,
.contact-section {
  margin: 15px 0;
}

.skills-section h3,
.contact-section h3 {
  color: var(--kuromi-pink);
  font-size: 18px;
  margin: 0 0 15px 0;
  font-weight: 600;
}

.skill-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  font-size: 14px;
  border-bottom: 1px dotted var(--kuromi-purple);
  padding-bottom: 5px;
}

.skill-name {
  color: var(--text-light);
}

.skill-percent {
  color: var(--kuromi-purple);
  font-weight: 600;
}

.contact-item {
  margin-bottom: 10px;
  font-size: 14px;
  color: var(--text-light);
  display: flex;
  align-items: center;
  gap: 8px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .profile-section {
    padding: 15px;
  }

  .profile-header h1 {
    font-size: 28px;
  }

  .stats {
    gap: 20px;
    flex-wrap: wrap;
  }

  .stat-number {
    font-size: 20px;
  }
}

@media (max-width: 480px) {
  .profile-header h1 {
    font-size: 24px;
  }

  .profile-main h2 {
    font-size: 20px;
  }

  .stats {
    gap: 15px;
  }

  .stat-number {
    font-size: 18px;
  }

  .stat-label {
    font-size: 10px;
  }
}
</style>