<template>
  <v-snackbar v-model="inputVal" :color="type" dismissible>
    <v-layout align-center pr-4>
      <v-icon class="pr-3" dark large>{{ types[type] }}</v-icon>
      <v-layout column>
        <b><slot></slot></b>
      </v-layout>
    </v-layout>

    <template v-slot:action>
      <v-btn color="white" text @click="close"> Close </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  name: "alert-popup",
  props: { type: String, value: null },
  data() {
    return {
      types: {
        success: "mdi-checkbox-marked-circle",
        error: "error",
        info: "info",
      },
    };
  },
  methods: {
    close() {
      this.$emit("input", false);
    },
  },
  computed: {
    // Use input value so we can pass v-model into v-model of child
    inputVal: {
      get() {
        return !!this.value;
      },
      set(val) {
        this.$emit("input", val);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
</style>