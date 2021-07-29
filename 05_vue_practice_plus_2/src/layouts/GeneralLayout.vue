<template>
  <v-app class="ma-0">
    <!-- Header -->
    <v-app-bar app color="primary" dark clipped-left>
      <h3>Appbar Heading</h3>
      <span class="ml-auto">Hello Person</span>
    </v-app-bar>

    <!-- Content -->
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>

    <!-- Sidebar -->
    <v-navigation-drawer
      app
      expand-on-hover
      permanent
      :style="{ top: $vuetify.application.top + 'px', zIndex: 4 }"
    >
      <v-list dense nav>
        <router-link to="/" class="navLink">
          <v-list-item link>
            <v-list-item-icon><v-icon>home</v-icon></v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
        </router-link>

        <router-link to="/employees" class="navLink">
          <v-list-item link>
            <v-list-item-icon><v-icon>worker</v-icon></v-list-item-icon>
            <v-list-item-title> Employees </v-list-item-title>
          </v-list-item>
        </router-link>

        <router-link to="/settings" class="navLink">
          <v-list-item link>
            <v-list-item-icon><v-icon>settings</v-icon></v-list-item-icon>
            <v-list-item-title> Settings </v-list-item-title>
          </v-list-item>
        </router-link>

        <router-link
          class="navLink"
          v-for="item in [1, 2, 3]"
          :key="item"
          to="/item"
        >
          <v-list-item link>
            <v-list-item-icon><v-icon> mdi-domain </v-icon></v-list-item-icon>
            <v-list-item-title>Link {{ item }}</v-list-item-title>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  name: "Layout",
  data() {
    return {};
  },
};
</script>

<style scoped>
.navLink {
  text-decoration: none;
  color: inherit;
}
</style>