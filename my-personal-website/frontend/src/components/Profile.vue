<template>
  <div class="profile-section">
    <!-- Name and Title -->
    <div class="name-title">
      <h1>Your Name</h1>
      <p class="title">Web Developer • Vue • React • Supabase</p>
    </div>

    <!-- About Me -->
    <div class="about-section">
      <h2>About Me</h2>
      <p>I live for juicy stories and a bit of chaos—gossip is my guilty pleasure. 
      Curiosity keeps me lurking, always sniffing out what’s going on. Life’s sweeter 
      when you laugh, stay social, and make memories that sparkle. I’m not bold, but 
      I’ve got my own kind of mischief~ 🎀</p>
    </div>

    <!-- Skills -->
    <div class="skills-section">
      <h2>Skills</h2>
      <ul class="skills-list">
        <li>Vue.js</li>
        <li>Nest.js</li>
        <li>JavaScript</li>
        <li>Supabase</li>
        <li>HTML & CSS</li>
      </ul>
    </div>

    <!-- Projects -->
    <div class="projects-section">
      <h2>Projects</h2>
      
      <div class="project-card">
        <h3>Personal Website</h3>
        <p>Full-stack portfolio with REST API.</p>
      </div>
      
      <div class="project-card">
        <h3>Guestbook App</h3>
        <p>GET & POST connected to backend.</p>
      </div>
    </div>

    <!-- Divider -->
    <hr class="divider">

    <!-- Guestbook Teaser -->
    <div class="guestbook-teaser">
      <h2>Guestbook</h2>
      <p class="teaser-text">Leave me a message ❤️</p>
      <button class="guestbook-btn" @click="switchToGuestbook">
        <span>Open Guestbook</span>
        <span class="btn-icon">✦</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  methods: {
    switchToGuestbook() {
      // Emit event to parent to switch tabs
      this.$emit('switch-tab', 'guestbook')
    }
  }
}
</script>

<style scoped>
.profile-section {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px 0;
}

/* Name and Title */
.name-title {
  text-align: center;
  margin-bottom: 40px;
}

.name-title h1 {
  font-size: var(--font-xxxl);
  color: var(--white-pure);
  margin-bottom: 10px;
  text-shadow: 0 0 15px var(--purple-glow);
}

.name-title h1::after {
  display: none;
}

.title {
  font-size: var(--font-lg);
  color: var(--white-pure);
  opacity: 0.9;
  font-weight: 300;
  letter-spacing: 1px;
}

/* Section Headers */
h2 {
  font-size: var(--font-xxl);
  color: var(--white-pure);
  margin-bottom: 20px;
  text-shadow: 0 0 12px var(--purple-glow);
  border-bottom: 2px solid var(--purple-primary);
  padding-bottom: 10px;
}

h2::after {
  display: none;
}

h3 {
  font-size: var(--font-xl);
  color: var(--white-pure);
  margin-bottom: 8px;
  text-shadow: 0 0 8px var(--purple-glow);
}

h3::after {
  display: none;
}

p {
  font-size: var(--font-base);
  color: var(--white-pure);
  line-height: 1.8;
  margin-bottom: 15px;
}

/* About Section */
.about-section {
  margin-bottom: 40px;
  background: rgba(42, 26, 58, 0.3);
  padding: 25px;
  border-radius: 20px;
  border: 1px solid var(--purple-primary);
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
}

.about-section:hover {
  border-color: var(--purple-accent);
  box-shadow: 0 0 20px var(--purple-glow);
  transform: translateY(-2px);
}

.about-section p {
  margin-bottom: 0;
}

/* Skills Section */
.skills-section {
  margin-bottom: 40px;
  background: rgba(42, 26, 58, 0.3);
  padding: 25px;
  border-radius: 20px;
  border: 1px solid var(--purple-primary);
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
}

.skills-section:hover {
  border-color: var(--purple-accent);
  box-shadow: 0 0 20px var(--purple-glow);
  transform: translateY(-2px);
}

.skills-list {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 15px;
}

.skills-list li {
  background: rgba(107, 63, 140, 0.3);
  color: var(--white-pure);
  padding: 10px 20px;
  border-radius: 50px;
  font-size: var(--font-base);
  text-align: center;
  border: 1px solid var(--purple-primary);
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
}

.skills-list li:hover {
  background: var(--purple-primary);
  transform: scale(1.05);
  box-shadow: 0 0 15px var(--purple-glow);
  border-color: var(--purple-accent);
}

/* Projects Section */
.projects-section {
  margin-bottom: 40px;
}

.project-card {
  background: rgba(42, 26, 58, 0.3);
  padding: 20px 25px;
  border-radius: 20px;
  border: 1px solid var(--purple-primary);
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
  margin-bottom: 15px;
}

.project-card:hover {
  border-color: var(--purple-accent);
  box-shadow: 0 0 20px var(--purple-glow);
  transform: translateX(5px);
}

.project-card h3 {
  margin-bottom: 8px;
  color: var(--purple-pastel);
}

.project-card p {
  margin-bottom: 0;
  opacity: 0.9;
}

/* Divider */
.divider {
  border: none;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--purple-primary), var(--purple-accent), var(--purple-primary), transparent);
  margin: 40px 0;
  opacity: 0.5;
}

/* Guestbook Teaser */
.guestbook-teaser {
  text-align: center;
  background: rgba(42, 26, 58, 0.3);
  padding: 35px;
  border-radius: 30px;
  border: 2px solid var(--purple-primary);
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
}

.guestbook-teaser:hover {
  border-color: var(--purple-accent);
  box-shadow: 0 0 30px var(--purple-glow);
  transform: translateY(-3px);
}

.guestbook-teaser h2 {
  border-bottom: none;
  padding-bottom: 0;
  margin-bottom: 15px;
}

.guestbook-teaser h2::after {
  display: inline-block;
  content: "✦";
  font-size: 0.8em;
  margin-left: 10px;
  color: var(--purple-accent);
}

.teaser-text {
  font-size: var(--font-lg);
  color: var(--white-pure);
  margin-bottom: 25px;
  opacity: 0.9;
}

.guestbook-btn {
  background: linear-gradient(135deg, var(--purple-primary), var(--purple-light));
  color: var(--white-pure);
  border: none;
  padding: 15px 40px;
  border-radius: 50px;
  cursor: pointer;
  font-size: var(--font-lg);
  font-weight: bold;
  transition: all 0.3s ease;
  border: 2px solid var(--purple-pastel);
  box-shadow: 0 5px 0 var(--purple-deep), 0 0 20px var(--purple-glow);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: relative;
  overflow: hidden;
}

.guestbook-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 7px 0 var(--purple-deep), 0 0 30px var(--purple-accent);
  background: linear-gradient(135deg, var(--purple-light), var(--purple-accent));
}

.guestbook-btn:active {
  transform: translateY(3px);
  box-shadow: 0 2px 0 var(--purple-deep);
}

.btn-icon {
  font-size: var(--font-lg);
  animation: twinkle 2s ease infinite;
}

@keyframes twinkle {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.2); }
}

/* Responsive Design */
@media (max-width: 768px) {
  .name-title h1 {
    font-size: var(--font-xxl);
  }
  
  .title {
    font-size: var(--font-base);
  }
  
  h2 {
    font-size: var(--font-xl);
  }
  
  h3 {
    font-size: var(--font-lg);
  }
  
  .skills-list {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 10px;
  }
  
  .skills-list li {
    padding: 8px 15px;
    font-size: var(--font-sm);
  }
  
  .guestbook-btn {
    padding: 12px 30px;
    font-size: var(--font-base);
  }
}

@media (max-width: 480px) {
  .about-section,
  .skills-section,
  .project-card,
  .guestbook-teaser {
    padding: 20px;
  }
  
  .skills-list {
    grid-template-columns: 1fr;
  }
  
  .skills-list li {
    width: 100%;
  }
  
  .project-card:hover {
    transform: translateX(0);
  }
}
</style>