<template>
     <v-card
    color="grey lighten-4"
    flat
    height="200px"
    tile
  >
    <v-toolbar dense>
      
      <v-app-bar-nav-icon v-on:click = 'open()'></v-app-bar-nav-icon>

      <v-toolbar-title>{{mensaje}}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>
</template>

<script>
    export default {
         name: 'Home',

 
  
        data: () => ({
           
            mensaje:''
        }),
        methods: {
             open: ()=>{
               this.mensaje = 'asdasd'
               console.log(this.mensaje)
            }
        }
    }
</script>

<style lang="css" scoped>

</style>