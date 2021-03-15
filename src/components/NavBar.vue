<template>
  <v-app-bar app
  class="white"
>
     <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title> AndesSur</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-list link>
        <router-link to="/" 
      >Inicio</router-link>
              <router-link to="/" 
      >NOSOTROS</router-link>
              <router-link to="/" 
      >ACTIVIDADES</router-link>
              <router-link to="/" 
      >Volver a la pagina de Inicio</router-link>
              <router-link to="/" 
      >Volver a la pagina de Inicio</router-link>
              <router-link to="/" 
      >Volver a la pagina de Inicio</router-link>
              <router-link to="/" 
      >Volver a la pagina de Inicio</router-link>
      
    </v-list>
        <v-navigation-drawer app v-model="drawer"    absolute
      temporary dark>
            <div class="align-center mt-4">
                     <v-avatar class="align-center">
                         <img src="https://randomuser.me/api/portraits/men/78.jpg" alt="">
                     </v-avatar>
                     <p class="white--text mt-3 align-center  headline">ONG Andes Sur</p>
            </div>
        </v-navigation-drawer>
</v-app-bar>
</template>
<script>

export default {
    name:"NavBar",
    props:{
        links:{
            type: Array,
            default:() => []
        }
    },
    data() {
       return {
           drawer:false
       }
    }
}
</script>

