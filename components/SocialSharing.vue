<template>
  <div class="hello">
    <FaceBook :url="url" title="Check out my story" scale="3"></FaceBook>
    <Twitter :url="url" title="Check out my Story" scale="3"></Twitter>
    <!-- <linkedin :url="url" scale="3"></linkedin>
    <email :url="url" subject="Hello" scale="3"></email>
    <telegram :url="url" scale="3"></telegram>
    <whats-app :url="url" title="Hello" scale="3"></whats-app>
    <pinterest :url="url" scale="3"></pinterest>
    <reddit :url="url" scale="3" title="My Github"></reddit>
    <google :url="url" scale="3"></google>  -->
  </div>
</template>

<script>
import {
  FaceBook,
  Twitter,
  // Linkedin,
  // Pinterest,
  // Reddit,
  // Telegram,
  // WhatsApp,
  // Email,
  // Google
} from 'vue-socialmedia-share'

export default {
  name: 'SocialSharing',
  components: {
    FaceBook,
    Twitter,
    // Linkedin,
    // Pinterest,
    // Reddit,
    // Telegram,
    // WhatsApp,
    // Email,
    // Google
  },

  data() {
    return {
      url: 'https://www.marmuseum.ca/',
      title: 'Forged in Steel Kingston goes to Sea',
    }
  },
}
</script>

<style scoped>
.hello {
  display: flex;
  justify-content: space-around;
}

facebook {
  transition: transform;
}

facebook:hover {
  transform: scale(1.1);
}
</style>
