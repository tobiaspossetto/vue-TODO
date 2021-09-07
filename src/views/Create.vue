<template>
  <div class="create-view">
    <Form />
  </div>
</template>

<script>
import Form from "../components/Form.vue";
export default {
  name: "Create",

  components: {
    Form,
  },

  data: () => ({}),
};
</script>

<style>
.create-view {
  background: #e0e5ec;
  width: 100%;
  height: 100%;

  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
