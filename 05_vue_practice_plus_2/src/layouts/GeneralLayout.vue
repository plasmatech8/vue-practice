<template>
  <v-app class="ma-0">
    <!-- Appbar -->
    <v-app-bar app color="primary" dark clipped-left>
      <h3>Appbar Heading</h3>
      <span class="ml-auto">Hello, {{ this.user.name }}</span>
    </v-app-bar>

    <!-- Content -->
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>

    <!-- Sidebar -->
    <NavbarDrawer />
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import NavbarDrawer from "../components/NavbarDrawer.vue";

export default {
  name: "Layout",
  components: { NavbarDrawer },
  data() {
    return {};
  },
  computed: mapGetters(["user"]),
};
</script>
