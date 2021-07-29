<template>
  <div>
    <h1>Settings</h1>
    <v-card class="pa-5">
      <v-card-title class="mb-5">
        <span>User Details</span>
        <v-btn icon class="ml-auto">
          <v-icon>edit</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-row>
            <v-text-field
              label="Name"
              outlined
              disabled
              value="asd"
            ></v-text-field>
          </v-row>
          <v-row>
            <v-text-field
              label="Email"
              outlined
              disabled
              value="asd"
            ></v-text-field>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editing: false,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>