<template>
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
</template>

<script>
export default {};
</script>

<style scoped>
.navLink {
  text-decoration: none;
  color: inherit;
}
</style>