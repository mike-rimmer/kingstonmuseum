import  anime from 'animejs';
 /*method 1*/ 
const VueAnime ={
  install (Vue, options){
    Vue.prototype.$animeJS = anime;
  }
}

export default VueAnime;

 /*method 1*/