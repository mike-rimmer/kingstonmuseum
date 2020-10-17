<template>
  <!-- <div :id="{ storyForm: $vuetify.breakpoint.smAndDown }"> -->
  <div id="story-form">
    <v-card elevation="10" class="dummyextarea">
      <v-card-text>
        <v-row>
          <v-col cols="12" lg="3">
            <div class="phototest">
              <v-img
                src="https://rimike.ca/images/gclarabut.jpg"
                size="150"
              ></v-img>
            </div>
          </v-col>

          <v-col cols="12" lg="9">
            <v-card-title>Gordon 'Gord' Clarabut (1924-1999)</v-card-title>
            <p>
              His enlistment story began at the age 15-16 when he attempted to
              join first the Royal Canadian Horse Artillery, then the Royal
              Canadian Navy in Kingston. As mothers do, when she found out she
              marched down to the office and dragged him home. He eventually
              succeeded (with his mother’s consent) in enlisting as a Boy Seaman
              in June 1940 at the age of 16 (according to the date of birth on
              the application he was 17 - DOB listed 13 July 1923) with the
              RCNVR. He was later promoted to Petty Officer first class ERA and
              spent the majority of his service aboard first HMCS Saskatoon
              (Flower-Class Corvette), then HMCS Lockeport (Minesweeper)
            </p>

            <p>
              Gord met his wife Joycelyn ‘Jo’ Hobbs (CWAC Private) in Kingston,
              ON while he was on leave and she was training. As recounted by Jo,
              their meeting was serendipitous - they were both walking and
              collided when Gord came around the corner at full speed. Funnily
              enough, it was Jo that knocked him off his feet. They later met
              again at a dance held in a building still standing on King St.
              When Jo was posted to Ottawa they continued to correspond for
              about a year. Home again on leave, Gord proposed and they set a
              date for May 1944. They were married 24 May 1944 in HMC Dockyard
              Chapel in Halifax and a couple nights honeymoon before God sailed
              for the North Atlantic and Jo took the train back to Ottawa
            </p>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
#story-form {
  width: 90%;
  margin: 0 auto;
  font-size: 0.6em;
}

.phototest {
  height: 100%;
  background-color: lightgrey;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.smallScreenFont {
  font-size: 0.625em;
}
</style>
