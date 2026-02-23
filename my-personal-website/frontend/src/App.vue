<template>
  <div class="container">
    <header>
      <h1>My Profile & Guestbook</h1>
      <p class="subtitle">Leave a message for me! 😊</p>
    </header>
    
    <div class="divider">
      <span class="divider-text">✧ ✧ ✧</span>
    </div>
    
    <Profile />
    
    <div class="divider">
      <span class="divider-text">sign the guestbook</span>
    </div>
    
    <Guestbook />
  </div>
</template>

<script>
import Profile from './components/Profile.vue'
import Guestbook from './components/Guestbook.vue'

export default {
  name: 'App',
  components: {
    Profile,
    Guestbook
  }
}
</script>

<style scoped>
header {
  text-align: center;
  margin-bottom: 20px;
}
</style>