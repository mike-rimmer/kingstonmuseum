<template>
  <div id="museumbanner">
    <div>
      <v-carousel
        height="300px"
        interval="20000"
        :cycle="cycleImages"
        hide-delimiter-background
      >
        <v-carousel-item
          v-for="(item, i) in samples"
          :key="i"
          :src="item.url"
          reverse-transition="fade-transition"
          transition="fade-transition"
          fit
        ></v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script>

const DEV = '/serve/images/'
const PROD = 'https:/rimike.ca/images/'
export default {
  components: {},
  data() {
    return {
      cycleImages: true,
      hide: true,
      samples: [
        { url: DEV + "rn4.jpg" },
        { url: DEV + "webphoto1.jpg" },
        { url: DEV + "rn5.jpg" },
        { url: DEV + "webphoto7.jpg" },
        { url: DEV + "kingst.jpg" },
        { url: DEV + "shiplaunch2.jpg" }
      ]
  }
}
}
</script>
<style scoped>
.v-carousel {
  -webkit-box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.51);
  -moz-box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.51);
  box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.51);
}
</style>
