<template>
  <div class="app-container">
    <RavenHeader />
    <RavenProfile />
    <!-- Rest of your components -->
  </div>
</template>

<script>
import RavenHeader from './components/RavenHeader.vue'
import RavenProfile from './components/RavenProfile.vue'

export default {
  components: {
    RavenHeader,
    RavenProfile
  }
}
</script>