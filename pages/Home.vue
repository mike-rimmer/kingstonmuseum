<template>
  <div id="home" class="mt-5">
    <div style="text-align: center">
      <p
        color="#000d2b"
        class="font-weight-bold title"
        :class="{ smallScreenFont: $vuetify.breakpoint.smAndDown }"
      >
        Explore Kingston and the Area's maritime contributions to the Second
        World War
      </p>
    </div>
    <v-row
      class="pa-10"
      :class="{ smallScreenFont: $vuetify.breakpoint.smAndDown }"
    >
      <p>
        The
        <a
          style="color: white; font-weight: bold"
          href="https://www.marmuseum.ca/"
          target="_blank"
          >Marine Museum of the Great Lakes at Kingston</a
        >
        and the
        <a
          style="color: white; font-weight: bold"
          href="https://rmcmuseum.ca/"
          target="_blank"
          >RMC Museum</a
        >
        are delighted to announce their 2020 collaborative project to
        commemorate the 75th Anniversary of the end of the Battle of the
        Atlantic (1939-1945) and the Second World War. This project will capture
        and share the story of Kingston’s maritime contribution to the war
        effort. It has two focus areas; Kingstonians and the war – looking
        specifically at the effects on the population of Kingston at the time,
        the men and women who served at home and abroad, the men and women who
        built the ships at the Kingston Shipyards; and History of the Kingston
        Shipyards, including the ships built at the yard during the war.
      </p>
      <p></p>
      <p>
        <b>But, we need your help to tell the story!</b> We are looking to speak
        with naval veterans of the Second World War and/or their descendents to
        help capture and share the story of Kingston and the Area’s community
        contributions to the war effort. This could include anecdotes, letters,
        photographs and/or any other artefacts that might be relevant. They are
        particularly interested in the stories of those who served aboard
        Kingston-built ships, a complete list of which can be found below.
      </p>
      <div>
        <p>
          Please keep in mind that this project is limited to the following
          research criteria;
        </p>
        <p class="bullets">Geography: Kingston and the surrounding areas</p>
        <p class="bullets pindent">
          Population: Kingstonians (men and women) who served in a maritime
          capacity, worked at the Kingston
        </p>
        <p class="bullets pindent">
          Second World War (1939-45) naval connection: must have enlisted in
          Kingston and/or worked at the Kingston Shipyards
        </p>
      </div>
      <p>
        We invite you to share a loved one’s story and any images you might have
        using our web form. Stories might include military anecdotes, personal
        stories about how they met their husband/wife, why they joined or even
        memories from watching the ships being launched on the wharf. In the
        case of those who served, we ask that you provide service information
        such as when and where they joined, where they served, rank and other
        notable information whenever possible.
      </p>
    </v-row>

    <v-row justify="center">
      <v-btn
        color="#002b1e"
        class="white--text select-btn"
        to="/write"
        style="font-weight: bold; margin-bottom: 2em"
        >Tell Us your Story!</v-btn
      >
    </v-row>

    <v-row class="mb-5" style="width: 95%; margin: 0 auto">
      <!-- <v-col> -->
      <story-form></story-form>
      <!-- </v-col> -->
    </v-row>
  </div>
</template>

<script>
import StoryForm from '@/components/StoryForm.vue'
export default {
  components: {
    'story-form': StoryForm,
  },

  data() {
    return {}
  },

  computed: {
    fontSize() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return '.7em'
        default:
          return '1.3em'
      }
    },
  },
}
</script>

<style scoped>
#home {
  padding: 40 0 30 0;
  color: white;
  background-color: #0e1e3c9e;
}

.smallScreenFont {
  font-size: 0.8em;
}

.pindent {
  text-indent: -2em;
  padding-left: 2em;
}

.bullets {
  margin-left: 2em;
}

.bullets::before {
  content: 'o';
  margin-right: 1em;
}

.select-btn {
  opacity: 30%;
}

.select-btn:hover {
  /* animation-name:glow;
 animation-duration:2s; */
  /* or */
  /* animation: glow 2s ease-in; */
  opacity: 100%;
  transform: scale(1.1);
  transition: all 2s;
}

/* @keyframes glow {
  0%{
   opacity:50%;
  }

  60%{
     opacity:80%;
  }

  100%{
       opacity:100%;
       transform:scale(1.1);
  }

 } */
</style>
