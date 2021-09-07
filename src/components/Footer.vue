<template>
  <v-footer  color='#212121' padless>
    <v-col id='footer'
      class="text-center"
      cols="12"
    >
      {{ new Date().getFullYear() }} — <strong >Tobias Possetto</strong>
    </v-col>
  </v-footer>
</template>
<script>


export default {
     name:'Footer'
}
</script>

<style>
    #footer{
        color: #e0e5ec;
    }
</style>
