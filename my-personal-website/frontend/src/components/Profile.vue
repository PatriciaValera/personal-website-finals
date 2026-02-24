<template>
  <div class="profile-section">
    <!-- Name and Title -->
    <div class="name-title">
      <h1>♡ Riri ♡</h1>
      <p class="title">Purple Girly ✧ Gossip Girl ✧ Nonchalant</p>
    </div>

    <!-- About Me (Full Width) -->
    <div class="about-section">
      <h2>About Me</h2>
      <p>Yo, the name's Patricia Marie Valera! I live for juicy stories and a bit of 
      chaos—gossip is my guilty pleasure. Curiosity keeps me lurking, always sniffing 
      out what's going on. Life's sweeter when you laugh, stay social, and make memories 
      that sparkle. I'm not bold, but I've got my own kind of mischief~ 🎀</p>
    </div>

    <!-- Two Column Layout for Skills and Hobbies -->
    <div class="two-column-layout">
      <!-- Skills Column -->
      <div class="skills-section">
        <h2>Skills</h2>
        <ul class="skills-list">
          <li>Vue.js</li>
          <li>Nest.js</li>
          <li>UI/UX</li>
          <li>Supabase</li>
          <li>HTML & CSS</li>
        </ul>
      </div>

      <!-- Hobbies Column -->
      <div class="hobbies-section">
        <h2>Hobbies</h2>
        <ul class="hobbies-list">
          <li>
            <span class="hobby-icon">📖</span>
            <span class="hobby-name">Gossip Hunting</span>
            <span class="hobby-desc">sniffing out the juiciest stories</span>
          </li>
          <li>
            <span class="hobby-icon">🎵</span>
            <span class="hobby-name">Music Vibes</span>
            <span class="hobby-desc">curating the perfect playlist</span>
          </li>
          <li>
            <span class="hobby-icon">📸</span>
            <span class="hobby-name">Memory Hoarding</span>
            <span class="hobby-desc">capturing sparkly moments</span>
          </li>
          <li>
            <span class="hobby-icon">💬</span>
            <span class="hobby-name">Late Night Chats</span>
            <span class="hobby-desc">where the real stories unfold</span>
          </li>
          <li>
            <span class="hobby-icon">✨</span>
            <span class="hobby-name">Chaos Creating</span>
            <span class="hobby-desc">my own kind of mischief</span>
          </li>
          <li>
            <span class="hobby-icon">🎀</span>
            <span class="hobby-name">Being Purple Girly</span>
            <span class="hobby-desc">aesthetic vibes only</span>
          </li>
        </ul>
      </div>
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
  </div>
</template>

<script>
export default {
  name: 'Profile'
}
</script>

<style scoped>
.profile-section {
  max-width: 900px; /* Slightly wider to accommodate two columns */
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

/* About Section - Full Width */
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

/* Two Column Layout for Skills and Hobbies */
.two-column-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
  margin-bottom: 40px;
}

/* Skills Section (now in left column) */
.skills-section {
  background: rgba(42, 26, 58, 0.3);
  padding: 25px;
  border-radius: 20px;
  border: 1px solid var(--purple-primary);
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
  height: 100%;
}

.skills-section:hover {
  border-color: var(--purple-accent);
  box-shadow: 0 0 20px var(--purple-glow);
  transform: translateY(-2px);
}

.skills-list {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  gap: 12px;
}

.skills-list li {
  background: rgba(107, 63, 140, 0.3);
  color: var(--white-pure);
  padding: 10px 15px;
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

/* Hobbies Section (now in right column) */
.hobbies-section {
  background: rgba(42, 26, 58, 0.3);
  padding: 25px;
  border-radius: 20px;
  border: 1px solid var(--purple-primary);
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
  height: 100%;
}

.hobbies-section:hover {
  border-color: var(--purple-accent);
  box-shadow: 0 0 20px var(--purple-glow);
  transform: translateY(-2px);
}

.hobbies-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.hobbies-list li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 50px;
  border: 1px solid rgba(198, 142, 247, 0.2);
  transition: all 0.3s ease;
}

.hobbies-list li:hover {
  transform: translateX(5px);
  background: rgba(107, 63, 140, 0.3);
  border-color: var(--purple-accent);
  box-shadow: 0 0 15px var(--purple-glow);
}

.hobby-icon {
  font-size: var(--font-lg);
  min-width: 35px;
  text-align: center;
  color: var(--purple-accent);
}

.hobby-name {
  font-size: var(--font-base);
  font-weight: 600;
  color: var(--white-pure);
  min-width: 120px;
}

.hobby-desc {
  font-size: var(--font-sm);
  color: rgba(255, 255, 255, 0.7);
  font-style: italic;
  margin-left: auto;
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

/* Responsive Design */
@media (max-width: 768px) {
  .profile-section {
    max-width: 100%;
    padding: 15px;
  }
  
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
  
  .two-column-layout {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .skills-list {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 10px;
  }
  
  .skills-list li {
    padding: 8px 12px;
    font-size: var(--font-sm);
  }
  
  .hobbies-list li {
    flex-wrap: wrap;
    gap: 5px;
    padding: 10px;
  }
  
  .hobby-name {
    min-width: auto;
    flex: 1;
  }
  
  .hobby-desc {
    margin-left: 0;
    width: 100%;
    text-align: left;
    padding-left: 45px;
  }
}

@media (max-width: 480px) {
  .about-section,
  .skills-section,
  .hobbies-section,
  .project-card {
    padding: 15px;
  }
  
  .skills-list {
    grid-template-columns: 1fr;
  }
  
  .skills-list li {
    width: 100%;
  }
  
  .hobby-icon {
    font-size: var(--font-base);
    min-width: 30px;
  }
  
  .hobby-desc {
    padding-left: 40px;
    font-size: var(--font-xs);
  }
  
  .project-card:hover {
    transform: translateX(0);
  }
}
</style>