<template>
  <div class="profile-section">
    <div class="profile-header">
      <div class="profile-avatar">
        <img src="https://via.placeholder.com/150" alt="Profile Picture">
      </div>
      <div class="profile-info">
        <h2>John Doe</h2>
        <p class="title">Full Stack Developer</p>
        <p class="bio">
          Passionate developer with expertise in Vue.js, React, and Node.js. 
          Love building beautiful and functional web applications.
        </p>
      </div>
    </div>
    
    <div class="profile-details">
      <div class="detail-item">
        <h3>Skills</h3>
        <ul class="skills-list">
          <li v-for="skill in skills" :key="skill">{{ skill }}</li>
        </ul>
      </div>
      
      <div class="detail-item">
        <h3>Contact</h3>
        <p>📧 john.doe@example.com</p>
        <p>🔗 github.com/johndoe</p>
        <p>💼 linkedin.com/in/johndoe</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data() {
    return {
      skills: ['Vue.js', 'React', 'Node.js', 'Python', 'TypeScript', 'PostgreSQL']
    }
  }
}
</script>

<style scoped>
.profile-section {
  background: white;
}

.profile-header {
  display: flex;
  gap: 30px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.profile-avatar img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--primary-color);
}

.profile-info {
  flex: 1;
}

.profile-info h2 {
  margin-bottom: 10px;
}

.profile-info .title {
  font-size: 18px;
  color: var(--primary-color);
  margin-bottom: 10px;
}

.profile-info .bio {
  line-height: 1.8;
}

.profile-details {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.detail-item h3 {
  margin-bottom: 15px;
  color: var(--primary-color);
}

.skills-list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.skills-list li {
  background: var(--secondary-color);
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 14px;
}

@media (max-width: 768px) {
  .profile-header {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .skills-list {
    justify-content: center;
  }
}
</style>