<template>
  <v-card id="card" class="mx-auto" color="#e0e5ec" dark max-width="400">
    <v-card-title>
      <span class="text-h6 font-weight-weight card-title">{{ title }}</span>
    </v-card-title>

    <v-card-text class="text-h5 font-weight">
      <span class="card-description">{{ description }}</span>
    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-row align="center" justify="center">
          <button>
            <v-icon class="mr-1" color="red"> mdi-delete </v-icon>
            <span class="subheading mr-2 card-span" @click="add(id)"
              >Eliminar</span
            >
          </button>
        </v-row>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "Task",
  data: () => ({
    //
  }),
  props: ["title", "description", "id"],
  methods: {
    add(id) {
      this.$store.dispatch("deleteTaskAction", id);
    },
  },
};
</script>

<style>
#card {
  box-shadow: -8px -8px 12px rgba(255, 255, 255, 1),
    8px 8px 12px rgba(163, 177, 198, 1);
  transition: box-shadow 500ms;
}
#card:hover {
  box-shadow: -4px -4px 8px rgba(255, 255, 255, 0.603),
    28px 28px 28px rgba(163, 177, 198, 1);
}
.card-title,
.card-description {
  color: rgb(58, 58, 58);
}
.card-span {
  color: #e0e5ec;
}
button {
  display: flex;
  align-items: center;
  font-weight: 500;
  padding: 5px;
  border-radius: 5px;
  background: rgb(58, 58, 58);
}
</style>