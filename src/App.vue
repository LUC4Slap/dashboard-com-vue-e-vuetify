<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app dark>
      <!--  -->
      <v-list dense>
        <v-list-tile @click="navegar('Home')" class="title">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title> Dashboard</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <br />
        <v-list-tile @click="navegar('InserirEquipamento')" class="title">
          <v-list-tile-action>
            <v-icon>attachment</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title> Inserir</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <br/>
        <v-list-tile @click="navegar('About')" class="title">
          <v-list-tile-action>
            <v-icon>filter_none</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title> Estoque</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <br />
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
  }),
  methods: {
    navegar(rota) {
      this.$router.push({name: rota});
    }
  },
 
};
</script>

<style>
* {
  overflow: hidden;
}
.title {
  cursor: pointer;
  margin-left: 10px;
}
</style>