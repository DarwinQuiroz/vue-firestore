<template>
  <main>
    <v-app>
      <v-content v-if="$store.state.loaded">
        <guest-navigation v-if="role === 'guest'"/>
        <admin-navigation v-if="role === 'admin'"/>

        <v-container class="mt-3 mb-5">
          <router-view />
        </v-container>

          <app-footer/>
      </v-content>

      <v-container v-else fill-height>
        <v-layout flex align-center justify-center>
          <v-progress-circular indeterminate size="100" width="10" color="purple"/>
        </v-layout>
      </v-container>
    </v-app>
  </main>
</template>

<script>
  import GuestNavigation from "./components/navigations/guest";
  import AdminNavigation from "./components/navigations/admin";
  import AppFooter from "./components/footer";
  import { mapGetters } from 'vuex';

  export default {
    components: {
      AppFooter,
      GuestNavigation,
      AdminNavigation
    },
    computed: {
      ...mapGetters(['role'])
    }
  }
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
