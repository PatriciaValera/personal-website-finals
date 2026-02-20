<template>
  <div class="container">
    <header>
      <h1>My Personal Profile</h1>
    </header>
    
    <Profile />
    
    <hr style="margin: 30px 0; border: 1px solid #eee;" />
    
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