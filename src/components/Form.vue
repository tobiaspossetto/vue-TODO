<template>
  <v-form ref="form" class="form" lazy-validation>
    <v-text-field v-model="title" label="Titulo" required></v-text-field>

    <v-text-field
      v-model="description"
      label="Descripción"
      required
    ></v-text-field>

    <span v-if="err">Ambos campos deben contener texto</span>
    <v-btn v-on:click="send()" color="success" class="mr-4 mb-5 mt-5 button">
      Crear
    </v-btn>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    title: null,
    description: null,
    err: false,
    task: null,
  }),

  methods: {
    send() {
      if (this.title == null || this.description == null) {
        this.err = true;
      } else {
        this.task = {
          title: this.title,
          description: this.description,
        };

        this.$store.state.task = this.task;
        this.$store.dispatch("addTaskAction");
        this.$router.push("/");
        this.reset();
      }
    },
    reset() {
      this.err = false;
      (this.title = null), (this.description = null);
    },
  },
};
</script>


<style lang="scss" scoped>
.form {
  padding: 15px;
  width: 80%;
  margin: 0 auto;

  box-shadow: -8px -8px 12px rgba(255, 255, 255, 1),
    8px 8px 12px rgba(163, 177, 198, 1);
}
.button {
  display: block;
}
</style>