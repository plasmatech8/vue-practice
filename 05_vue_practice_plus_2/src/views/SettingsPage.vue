<template>
  <div>
    <v-container>
      <!-- Heading -->
      <h1 class="mb-5">Settings</h1>

      <!-- User Details Panel -->
      <user-details-panel @update:user="updateUser" />

      <alert-popup type="success" v-model="success">{{ success }}</alert-popup>
      <alert-popup type="error" v-model="error">{{ error }}</alert-popup>
    </v-container>
  </div>
</template>

<script>
import UserDetailsPanel from "../components/UserDetailsPanel.vue";
import AlertPopup from "../components/AlertPopup.vue";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      success: null,
      error: null,
    };
  },
  components: { UserDetailsPanel, AlertPopup },
  methods: {
    async updateUser(user) {
      try {
        const response = await this.setUser(user);
        if (!response.ok) {
          throw new Error(`Employees endpoint issue (${response.status})`);
        }
        this.success = "Employee details changed!";
      } catch (error) {
        console.error(error);
        this.error = error;
      }
    },
    ...mapActions(["setUser"]),
  },
};
</script>

<style lang="scss" scoped>
</style>