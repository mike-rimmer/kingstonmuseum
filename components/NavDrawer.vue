<template>
  <div class="navDrawer" :items ="items">
    <v-navigation-drawer id="nav-drawer"   v-model="drawer"
      color="#000d2b" expand-on-hover app >
      <v-list class="px">
        <v-list-item v-for="list in items" :key="list.title" link :to="list.route">
          <v-list-item-action>
            <v-icon class="white--text" @click="$emit('close-drawer')" >{{ list.icon }}</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title class="white--text">{{ list.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  component: {},
  props:{
    items:{
      type:Array,
      required:true,
      default: function(){
        return [
         { title: "Home", icon: "home", route: "/" },
         { title: "Contact Us", icon: "folder", route: "/contact" },  
         { title: "Add Additional Menus As Required", icon: "folder", route: "/contact" },  
        ]
      }
    },
     drawer: {
      type: Boolean,
      required: true,
      default: true
    }},
  data() {
    return {
      // drawer : true,
      // items: [
      //   { title: "Home", icon: "home", route: "/" },
      //   { title: "Contact Us", icon: "folder", route: "/contact" },
      //   {
      //     title: "Admin",
      //     icon: "supervisor_account",
      //     route: "/admin"
      //   },
      //   { title: "Write Story", icon: "create", route: "/write" },
      //   { title: "Read Stories", icon: "visibility", route: "/read" }
       
      // ]
    };
  },
  computed: {}
};
</script>

<style scoped>
.musroyalnavy {
  color: #000d2b;
  font-size: 24px;
  font-weight: bold;
}
.musroyalnavy {
  color: #004aad;
  font-size: 24px;
  font-weight: bold;
}

.musgrey {
  background: #545454;
}
</style>
