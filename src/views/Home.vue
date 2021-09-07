<template>
  <v-container class="home">
    <v-row v-if="$store.state.tasks.length !== 0">
      <v-col
        cols="12"
        sm="6"
        md="4"
        v-for="task in $store.state.tasks"
        :key="task.id"
      >
        <Task
          :title="task.title"
          :description="task.description"
          :id="task.id"
        />
      </v-col>
    </v-row>

    <v-row v-else
      ><v-col class="TaskMsg" cols="12" sm="6" md="4">
        <h3 class="TaskMsg">No tiene tareas</h3></v-col
      ></v-row
    >
  </v-container>
</template>

<script>
import Task from "../components/Task.vue";

export default {
  name: "Home",

  components: {
    Task,
  },

  data() {
    return {};
  },
};
</script>

<style>
.home {
  margin-top: 80px;
  width: 100%;
  height: 100%;
  background: #e0e5ec;
}
.TaskMsg {
  margin: auto;

  text-align: center;
  font-size: 30px;
}
</style>
