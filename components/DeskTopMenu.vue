<template>
  <div class='menu' :items="items">
    <ul v-for= 'item in items' :key="item.title">
      <v-hover>
       <li class='test'><router-link  :to="item.route" class="test">{{item.title}}</router-link></li>
      </v-hover>
     </ul>
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
            return[
        { title: "Home", icon: "home", route: "/" },
        { title: "Contact Us", icon: "folder", route: "/contact" },
        { title: "Add Menu Item", icon: "folder", route: "/" },
          ]
          }
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
  methods:{
   
     }
    
  
  }
</script>


<style scoped>
  .menu{
    display:flex;
    color:white;
    justify-content: space-between;
  }

  ul{
    list-style-type: none;
    color:white;
  }

  a{
    color:white !important;
    text-decoration: none;
    transition: all 2 ease-in-out !important;
  }

  a:hover{
    transform:scale(1.5) !important;
    color:lightgray !important;
  }

 /* https://markus.oberlehner.net/blog/vue-router-page-transitions/ */
</style>