<template>
  <div>
    <v-dialog :value="value" max-width="50vw" @input="$emit('input')">
      <v-card height="500px" class="pa-5">
        <v-card-title style="text-align: center"
          >Your Story has been Saved!</v-card-title
        >
        <v-card-text>
          <p>
            Thank you for submitting a story and participating in our Forged In
            Fire: Kingston Goes Sea project.
          </p>
          <p>
            Your story has been sent for review by the project administrators.
            We will notify you once it has been approved and is made available
            on our Read Stories page.
          </p>
          <p>With many thanks again, Michelle and Miranda</p>

          <p style="margin-top: 2em">Michelle Clarabut and Miranda Riley</p>
          <p>
            Marine Museum of the Great Lakes and RMC Museum Project Managers
          </p>
        </v-card-text>
        <v-card-actions>
          <v-btn class="ml-5" color="primary" @click.native="$emit('input')"
            >Close</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: 'test',
    },
  },

  methods: {
    showReadStoriesPage() {
      this.$emit('show-message-changed')
    },
  },
}
</script>

<style scoped></style>
