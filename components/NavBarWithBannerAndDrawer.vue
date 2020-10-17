<template>
  <div id="nav-bar-title-card">
    <v-app-bar color="#000d2b" app>
      <v-app-bar-nav-icon style="color:white;" @click="drawer = !drawer" v-show="$vuetify.breakpoint.smAndDown"></v-app-bar-nav-icon >
    <desk-top-nav v-show="$vuetify.breakpoint.mdAndUp" :items="items"></desk-top-nav>
    </v-app-bar>
    <app-navdrawer :items='items' v-show="$vuetify.breakpoint.smAndDown" :drawer="drawer" @close-drawer="drawer=false"></app-navdrawer>
    <div>
      <banner-title></banner-title>
    </div>
  <!-- v-show="$vuetify.breakpoint.smAndDown" -->
  </div>
</template>

<script>
import BannerTitle from "@/components/BannerTitle.vue";
import NavDrawer from "@/components/NavDrawer.vue";
import DeskTopMenu from '@/components/DeskTopMenu.vue';
export default {
  data() {
    return {
       drawer: true,
        items: [
        { title: "Home", icon: "home", route: "/" },
        { title: "Contact Us", icon: "folder", route: "/contact" },
        { title: "Admin", icon: "supervisor_account", route: "/admin"},
        { title: "Write Story", icon: "create", route: "/write" },
        { title: "Read Stories", icon: "visibility", route: "/read" },
        { title: "Transitions", icon: "folder", route: "/transition" }
       
      ]
    };
  },
   components: {
    "app-navdrawer": NavDrawer,
    "banner-title": BannerTitle,
    "desk-top-nav":DeskTopMenu

  }
};
</script>

<style scoped>

</style>
