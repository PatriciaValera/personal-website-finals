<template>
  <div class="app">
    <KuromiProfile />
    <Guestbook />
  </div>
</template>

<script>
import KuromiProfile from './components/KuromiProfile.vue'
import Guestbook from './components/Guestbook.vue'

export default {
  components: {
    KuromiProfile,
    Guestbook
  }
}
</script>

<style>
body {
  margin: 0;
  background: #0a0a0a;
}
</style>