<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app dark>
      <!--  -->
      <v-list dense>
        <v-list-tile @click="navegar('Home')">
          <v-list-tile-action class="title">
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Dashboard</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <br />
        <v-list-tile @click="navegar('About')">
          <v-list-tile-action class="title">
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Settings</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main dark>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({ drawer: null }),
  methods: {
    navegar(rota) {
      this.$router.push({name: rota});
    }
  }
};
</script>

<style>
.title {
  cursor: pointer;
}
</style>