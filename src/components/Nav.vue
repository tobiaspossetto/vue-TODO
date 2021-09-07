<template>
  <v-card class="navbar" flat height="10px" tile>
    <v-toolbar dense class="navbar">
      <div class="links">
        <router-link class="link" to="/">TAREAS</router-link>

        <router-link class="link" to="/crear">CREAR</router-link>
      </div>
    </v-toolbar>
  </v-card>
</template>

<script>
//TODO agregar icons y estilos activos
export default {
  name: "Home",

  data() {
    return {
      mensaje: "",
    };
  },
  methods: {
    open() {
      this.mensaje = "asdasd";
      console.log(this.mensaje);
    },
  },
};
</script>

<style lang="css" scoped>
.navbar {
  position: fixed;
  z-index: 3;
  width: 100%;
  background: #212121 !important;
}
.links {
  background: #212121;
  font-weight: 500;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.link {
  color: #e0e5ec;
  text-decoration: none;
  font-size: 25px;
}
</style>