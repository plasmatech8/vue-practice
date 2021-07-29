<template>
  <div>
    <v-container>
      <!-- Heading -->
      <h1 class="mb-5">Settings</h1>

      <!-- User Details Panel -->
      <UserDetailsPanel />
    </v-container>
  </div>
</template>

<script>
import UserDetailsPanel from "../components/UserDetailsPanel.vue";

export default {
  components: { UserDetailsPanel },
};
</script>

<style lang="scss" scoped>
</style>