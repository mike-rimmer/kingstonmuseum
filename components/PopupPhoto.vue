<template>
  <div>
    <v-dialog v-model="showPopUp" max-height="800px">
      <v-card>
        <v-card-title>Dialog 2</v-card-title>
        <v-card-text>
          <v-img :src="imageUrl"></v-img>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" text @click="dialog2 = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ["showPopUp", "imageUrl"]
};
</script>

<style lang="scss" scoped></style>
