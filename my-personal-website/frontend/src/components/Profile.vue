<template>
  <div class="kuromi-profile">
    <!-- Header with bold statement -->
    <div class="profile-header">
      <div class="header-content">
        <h1 class="main-headline">
          <span class="line1">Someday, the stage</span>
          <span class="line2">I'm gonna rock will be...</span>
          <span class="line3">like... think HUGE!</span>
        </h1>
        
        <div class="dream-bubbles">
          <div class="bubble">🎸 Tokyo Dome</div>
          <div class="bubble">🗽 Madison Square Garden</div>
          <div class="bubble">🏆 GRAMMYs</div>
          <div class="bubble">🌍 WORLD TOUR</div>
        </div>
      </div>
      
      <div class="profile-image">
        <div class="image-frame">
          <img src="https://via.placeholder.com/300x400" alt="Kuromi Artist" />
          <div class="skull-overlay">☠</div>
        </div>
      </div>
    </div>

    <!-- Artist manifesto -->
    <div class="manifesto-section">
      <div class="manifesto">
        <p class="quote-large">
          "Then it's off on a world tour, painting the whole<br />
          world in my colors, obviously★"
        </p>
        
        <div class="manifesto-text">
          <p>
            Can you even picture it?<br />
            Me, right in the center of the stage,<br />
            <span class="highlight">singing my heart out!</span>
          </p>
          
          <p>
            Sounds like a dream, right? Well, <span class="bold-pink">newsflash:</span><br />
            I won't let it be just a dream!
          </p>
          
          <p class="powerful-statement">
            Fun times, messy times... all of it.<br />
            I'll show everyone me giving it my all,<br />
            <span class="no-holding-back">NO HOLDING BACK!</span>
          </p>
          
          <p>
            Because I know my efforts can give someone out there<br />
            the courage to chase their own stuff, yeah?
          </p>
        </div>
        
        <div class="signature-line">
          <span class="signature">So, keep your eyes on me—</span>
          <span class="explosion">my rise is just getting started!</span>
        </div>
        
        <div class="skull-divider">☠ ☠ ☠</div>
      </div>
    </div>

    <!-- Artist stats / "Accomplishments" -->
    <div class="stats-section">
      <div class="stat-item">
        <div class="stat-number">∞</div>
        <div class="stat-label">DREAMS</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">100%</div>
        <div class="stat-label">ATTITUDE</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">24/7</div>
        <div class="stat-label">GRIND</div>
      </div>
    </div>

    <!-- Call to action -->
    <div class="cta-section">
      <p class="cta-text">★ WANNA JOIN THE RIDE? ★</p>
      <div class="social-links">
        <a href="#" class="social-link">⚡ INSTAGRAM</a>
        <a href="#" class="social-link">🎵 SPOTIFY</a>
        <a href="#" class="social-link">💬 TWITTER</a>
        <a href="#" class="social-link">📹 YOUTUBE</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KuromiProfile'
}
</script>

<style scoped>
.kuromi-profile {
  background: #0a0a0a;
  color: white;
  font-family: 'Poppins', sans-serif;
  position: relative;
  overflow: hidden;
}

/* Background pattern */
.kuromi-profile::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    repeating-linear-gradient(
      45deg,
      rgba(255, 158, 181, 0.03) 0px,
      rgba(255, 158, 181, 0.03) 2px,
      transparent 2px,
      transparent 8px
    );
  pointer-events: none;
}

.profile-header {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  padding: 60px 40px;
  border-bottom: 3px solid #ff9eb5;
  position: relative;
}

.main-headline {
  font-family: 'Anton', sans-serif;
  text-transform: uppercase;
  font-size: 2.5rem;
  line-height: 1.2;
  margin-bottom: 30px;
}

.line1 {
  color: white;
  display: block;
  font-size: 1.8rem;
}

.line2 {
  color: #ff9eb5;
  display: block;
  font-size: 2.2rem;
  margin-left: 20px;
}

.line3 {
  color: #b28bff;
  display: block;
  font-size: 3rem;
  margin-left: 40px;
  text-shadow: 3px 3px 0 #ff4d6d;
  transform: rotate(-1deg);
}

.dream-bubbles {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 30px;
}

.bubble {
  background: #1a1a1a;
  border: 2px solid #ff9eb5;
  padding: 10px 20px;
  font-weight: 700;
  color: #ff9eb5;
  transform: rotate(-1deg);
  transition: all 0.3s ease;
}

.bubble:hover {
  background: #ff9eb5;
  color: #0a0a0a;
  transform: rotate(0deg) scale(1.05);
}

.profile-image {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-frame {
  position: relative;
  width: 300px;
  height: 400px;
  border: 4px solid #b28bff;
  transform: rotate(2deg);
  overflow: hidden;
}

.image-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(50%) contrast(120%);
}

.skull-overlay {
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 3rem;
  color: #b28bff;
  opacity: 0.5;
  transform: rotate(-5deg);
}

.manifesto-section {
  padding: 60px 40px;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  position: relative;
}

.manifesto {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}

.quote-large {
  font-family: 'Anton', sans-serif;
  font-size: 2rem;
  color: #ff9eb5;
  text-transform: uppercase;
  line-height: 1.4;
  margin-bottom: 40px;
  padding-left: 20px;
  border-left: 5px solid #b28bff;
  transform: skewX(-5deg);
}

.manifesto-text {
  font-size: 1.2rem;
  line-height: 2;
  margin-bottom: 40px;
}

.manifesto-text p {
  margin-bottom: 25px;
  position: relative;
  padding-left: 20px;
}

.highlight {
  color: #ff9eb5;
  font-weight: 700;
  font-size: 1.4rem;
  background: rgba(255, 158, 181, 0.1);
  padding: 0 5px;
}

.bold-pink {
  color: #ff9eb5;
  font-weight: 700;
  font-size: 1.3rem;
}

.powerful-statement {
  font-size: 1.4rem;
  border-top: 2px dashed #b28bff;
  border-bottom: 2px dashed #b28bff;
  padding: 20px;
  margin: 30px 0;
}

.no-holding-back {
  color: #ff4d6d;
  font-family: 'Anton', sans-serif;
  font-size: 2rem;
  display: block;
  text-align: center;
  letter-spacing: 2px;
  text-shadow: 2px 2px 0 #b28bff;
  transform: scale(1.1);
}

.signature-line {
  font-size: 1.5rem;
  text-align: center;
  margin: 40px 0;
}

.signature {
  color: #b28bff;
  font-style: italic;
}

.explosion {
  color: #ff9eb5;
  font-family: 'Anton', sans-serif;
  font-size: 2rem;
  display: block;
  text-transform: uppercase;
  margin-top: 10px;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); text-shadow: 0 0 20px #ff9eb5; }
}

.skull-divider {
  text-align: center;
  font-size: 2rem;
  color: #b28bff;
  opacity: 0.5;
  letter-spacing: 10px;
}

.stats-section {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 40px;
  background: #0a0a0a;
  border-top: 3px solid #ff9eb5;
  border-bottom: 3px solid #ff9eb5;
}

.stat-item {
  text-align: center;
  padding: 20px;
  border: 1px solid #b28bff;
  transform: rotate(1deg);
  transition: all 0.3s ease;
}

.stat-item:hover {
  transform: rotate(-1deg) scale(1.05);
  background: #ff9eb5;
  border-color: #0a0a0a;
}

.stat-item:hover .stat-number,
.stat-item:hover .stat-label {
  color: #0a0a0a;
}

.stat-number {
  font-family: 'Anton', sans-serif;
  font-size: 3rem;
  color: #ff9eb5;
  line-height: 1;
}

.stat-label {
  font-size: 1rem;
  color: #b28bff;
  letter-spacing: 2px;
  margin-top: 10px;
}

.cta-section {
  padding: 60px 40px;
  text-align: center;
  background: linear-gradient(135deg, #ff9eb5 0%, #b28bff 100%);
}

.cta-text {
  font-family: 'Anton', sans-serif;
  font-size: 2rem;
  color: #0a0a0a;
  margin-bottom: 30px;
  letter-spacing: 3px;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.social-link {
  background: #0a0a0a;
  color: #ff9eb5;
  text-decoration: none;
  padding: 15px 30px;
  font-weight: 700;
  border: 2px solid #0a0a0a;
  transition: all 0.3s ease;
  transform: rotate(-1deg);
}

.social-link:hover {
  background: transparent;
  color: #0a0a0a;
  transform: rotate(1deg) scale(1.05);
}

/* Responsive */
@media (max-width: 768px) {
  .profile-header {
    grid-template-columns: 1fr;
    padding: 40px 20px;
  }
  
  .main-headline {
    font-size: 2rem;
  }
  
  .line1 { font-size: 1.4rem; }
  .line2 { font-size: 1.8rem; }
  .line3 { font-size: 2.2rem; }
  
  .stats-section {
    grid-template-columns: 1fr;
  }
  
  .social-links {
    flex-direction: column;
    align-items: center;
  }
  
  .social-link {
    width: 100%;
    max-width: 300px;
  }
  
  .no-holding-back {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .profile-header {
    padding: 20px;
  }
  
  .dream-bubbles {
    justify-content: center;
  }
  
  .manifesto-section {
    padding: 30px 20px;
  }
  
  .quote-large {
    font-size: 1.5rem;
  }
}
</style>