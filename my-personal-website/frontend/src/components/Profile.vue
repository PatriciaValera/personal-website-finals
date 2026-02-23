<template>
  <div class="profile-section">
    <div class="profile-header">
      <div class="profile-info">
        <h2>About Me</h2>
        <p class="bio">
          Just a cute dev with an edge ✧ 
          Love coding, kuromi, and all things pastel goth.
        </p>
      </div>
    </div>
    
    <div class="profile-details">
      <div class="detail-item">
        <h3>skills</h3>
        <div class="skills-list">
          <span v-for="skill in skills" :key="skill" class="skill-tag">
            {{ skill }}
          </span>
        </div>
      </div>
      
      <div class="detail-item">
        <h3>contact</h3>
        <p>✨ kuromi@dark-cute.com</p>
        <p>💀 @kuromi.dev</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data() {
    return {
      skills: ['vue.js', 'react', 'node', 'python', 'ui/ux']
    }
  }
}
</script>

<style scoped>
.profile-section {
  margin: 30px 0;
}

.profile-info {
  margin-bottom: 30px;
}

.bio {
  color: var(--text-secondary);
  line-height: 1.8;
  font-size: 16px;
}

.detail-item {
  margin-bottom: 24px;
}

.detail-item h3 {
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 1px;
  margin-bottom: 16px;
  color: var(--text-secondary);
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.skill-tag {
  background: var(--input-bg);
  color: var(--text-secondary);
  padding: 6px 14px;
  border-radius: 40px;
  font-size: 13px;
  border: 1px solid var(--border-color);
}

.profile-details p {
  color: var(--text-secondary);
  margin-bottom: 8px;
  font-size: 15px;
}
</style>