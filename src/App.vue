<template>
  <v-app class="app">
    <Nav />
    <router-view />
    <Alert
      v-if="$store.state.alert.status"
      :msg="$store.state.alert.msg"
      :type="$store.state.alert.type"
      :color="$store.state.alert.color"
    />
    <Footer />
  </v-app>
</template>

<script>
import Nav from "./components/Nav.vue";
import Footer from "./components/Footer.vue";
import Alert from "./components/Alert.vue";
export default {
  name: "App",
  components: {
    Nav,
    Footer,
    Alert,
  },
  data: () => ({
    //
  }),
};
</script>
<style>
.app {
  background: #e0e5ec !important;
}
</style>
