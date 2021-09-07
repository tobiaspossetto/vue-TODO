<template>
  <v-alert
    id="alert"
    :color="color"
    elevation="2"
    :type="type"
    :value="alert"
    transition="fade-transition"
    >{{ msg }}</v-alert
  >
</template>


<script>
export default {
  name: "Alert",
  data() {
    return {};
  },
  props: ["msg", "color", "type"],
};
</script>
<style>
#alert {
  margin: 10px;
  width: 40%;
}
</style>