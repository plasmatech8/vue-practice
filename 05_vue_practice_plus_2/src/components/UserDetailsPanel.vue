<template>
  <v-card class="pa-5">
    <v-card-title class="mb-5">
      <span>User Details</span>
      <v-btn v-if="!editing" icon class="ml-auto" @click="editMode">
        <v-icon>edit</v-icon>
      </v-btn>
    </v-card-title>

    <v-card-text>
      <v-form>
        <!-- Name -->
        <v-row>
          <v-text-field
            label="Name"
            outlined
            :disabled="!editing"
            v-model="cachedUser.name"
          ></v-text-field>
        </v-row>
        <!-- Email -->
        <v-row>
          <v-text-field
            label="Email"
            outlined
            :disabled="!editing"
            v-model="cachedUser.email"
          ></v-text-field>
        </v-row>
        <!-- Website -->
        <v-row>
          <v-text-field
            label="Website"
            outlined
            :disabled="!editing"
            v-model="cachedUser.website"
          ></v-text-field>
        </v-row>
        <!-- Phone -->
        <v-row>
          <v-text-field
            label="Phone"
            outlined
            :disabled="!editing"
            v-model="cachedUser.phone"
          ></v-text-field>
        </v-row>
      </v-form>
    </v-card-text>

    <v-card-actions v-if="editing">
      <v-btn @click="saveEdit">Save</v-btn>
      <v-btn @click="cancelEdit">Cancel</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  data() {
    return {
      cachedUser: {},
      editing: false,
    };
  },
  methods: {
    editMode() {
      this.editing = true;
    },
    saveEdit() {
      this.setUser(this.cachedUser);
      this.cancelEdit();
    },
    cancelEdit() {
      this.editing = false;
      this.cachedUser = Object.assign({}, this.user); // clone object
    },
    ...mapActions(["fetchUser"]),
    ...mapMutations(["setUser"]),
  },
  computed: {
    ...mapGetters(["user"]),
  },
  created() {
    // Note: fetchUser is executed in App.vue
    // Initialised cached user for editing (after 1s so store can load)
    setTimeout(() => {
      this.cancelEdit();
    }, 500);
  },
};
</script>

<style scoped>
</style>