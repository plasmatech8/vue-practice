<template>
  <v-snackbar v-model="open" :color="type" dismissible>
    <v-layout align-center pr-4>
      <v-icon class="pr-3" dark large>{{ types[type] }}</v-icon>
      <v-layout column>
        <b><slot></slot></b>
      </v-layout>
    </v-layout>

    <template v-slot:action>
      <v-btn color="white" text @click="open = false"> Close </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  name: "alert-popup",
  props: { type: String, open: Boolean },
  data() {
    return {
      types: {
        success: "mdi-checkbox-marked-circle",
        error: "error",
        info: "info",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
</style>