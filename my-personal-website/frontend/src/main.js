import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

// Create Vue app
const app = createApp(App)

// Global error handler
app.config.errorHandler = (err, instance, info) => {
  console.error('Global error:', err, info)
}

// Mount app
app.mount('#app')