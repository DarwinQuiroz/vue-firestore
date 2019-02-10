<template>
  <main>
    <v-app>
      <v-content>
        <guest-navigation/>

        <v-container class="mt-3 mb-5">
          <router-view />
        </v-container>

          <app-footer/>

      </v-content>
    </v-app>
  </main>
</template>

<script>
  import GuestNavigation from "./components/navigations/guest";
  import AppFooter from "./components/footer";
  export default {
    components: {
        AppFooter,
      GuestNavigation

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
