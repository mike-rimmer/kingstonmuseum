<template>
  <div class="musfooter">
    <v-footer style="background-color: #0f002b">
      <v-col cols="12" lg="6">
        <social-sharing></social-sharing>
      </v-col>
      <v-col cols="12" lg="6">
        <v-row justify="start">
          <span v-show="$vuetify.breakpoint.lgAndUp" class="white--text"
            >For further info contact:</span
          >
          <span class="ml-5">
            <router-link to="/about" class="white--text"
              >Michelle Clarabut</router-link
            >
          </span>
          <span class="ml-5">
            <router-link to="/about" class="white--text"
              >Miranda Riley</router-link
            >
          </span>
        </v-row>
      </v-col>
    </v-footer>
  </div>
</template>

<script>
import SocialSharing from '@/components/SocialSharing.vue'
export default {
  components: {
    'social-sharing': SocialSharing,
  },
  data: () => ({
    icons: [
      {
        icon: 'fab fa-facebook',
        url: 'https://www.facebook.com/marinemuseumkingston/',
      },
      { icon: 'fab fa-twitter', url: 'https://twitter.com/explore' },
      {
        icon: 'fab fa-instagram',
        url: 'https://www.instagram.com',
      },
    ],
  }),
}
</script>

<style scoped>
.musfooter {
  color: white;
  background-color: white;
}
</style>
