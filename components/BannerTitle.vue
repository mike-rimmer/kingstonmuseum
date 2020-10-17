<template>
  <div id="bannerTitle"  app>
    <v-row>
      <v-col cols="12" lg="6">
        <div class="bannertext" :class="{ center: $vuetify.breakpoint.mdAndDown }">
          <p :class="{'headerTitle': $vuetify.breakpoint.mdAndUp, 'smallerTitle' : $vuetify.breakpoint.mdAndDown}">FORGED IN FIRE:</p>
          <p :class="{'headerTitle': $vuetify.breakpoint.mdAndUp, 'smallerTitle' : $vuetify.breakpoint.mdAndDown}">KINGSTON GOES TO SEA</p>
        </div>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="12" lg="2">
        <v-img class height="80" src="../../public/images/museumlogo.png" contain></v-img>
      </v-col>
      <v-col cols="12" lg="2">
        <v-img class height="80" src="../../public/images/RMC logo.png" contain></v-img>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.headerTitle {
  font-family: "Vollkorn SC", Roboto;
  padding: 0;
  margin: 0;
  font-size: 2em;
  font-weight: 600;
  line-height: 1.5em;
  color: #0f002b;
}

.smallerTitle{
  font-size: 1.2em;
   font-weight: 600;
}

.center {
  text-align: center;
}
</style>
