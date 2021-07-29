<template>
  <div>
    <v-container>
      <!-- Heading -->
      <h1 class="mb-5">Settings</h1>

      <!-- User Details Panel -->
      <v-card class="pa-5">
        <v-card-title class="mb-5">
          <span>User Details</span>
          <v-btn icon class="ml-auto" @click="editMode">
            <v-icon>edit</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text>
          <v-form>
            <v-row>
              <v-text-field
                label="Name"
                outlined
                :disabled="!editing"
                value="asd"
              ></v-text-field>
            </v-row>
            <v-row>
              <v-text-field
                label="Email"
                outlined
                :disabled="!editing"
                value="asd"
              ></v-text-field>
            </v-row>
          </v-form>
        </v-card-text>

        <v-card-actions v-if="editing">
          <v-btn @click="saveEdit">Save</v-btn>
          <v-btn @click="cancelEdit">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentUser: {},
      cachedUser: {},
      editing: false,
    };
  },
  methods: {
    editMode() {
      this.editing = true;
    },
    saveEdit() {
      this.editing = false;
    },
    cancelEdit() {
      this.editing = false;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>