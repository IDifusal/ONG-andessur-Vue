<template>
  <v-app-bar height="150px" app class="white">
    <v-app-bar-nav-icon
      class="visible md:invisible"
      @click="drawer = !drawer"
    ></v-app-bar-nav-icon>
    <router-link to="/"
      ><v-toolbar-title
        ><img
          src="../assets/ong.png"
          width="110px"
          alt="ong andes sur logo"/></v-toolbar-title
    ></router-link>
    <v-spacer></v-spacer>
    <li class="list-none py-5 invisible md:visible">
      <router-link
        class="inline-block mr-3 font-bold hover:text-green-100"
        to="/"
        >INICIO</router-link
      >
      <router-link
        class="inline-block mr-3 font-bold hover:text-green-100"
        to="/nosotros"
        >NOSOTROS</router-link
      >
      <router-link
        class="inline-block mr-3 font-bold hover:text-green-100"
        to="/actividades"
        >ACTIVIDADES</router-link
      >
      <router-link
        class="inline-block mr-3 font-bold hover:text-green-100"
        to="/proyectos"
        >PROYECTOS</router-link
      >
      <router-link
        class="inline-block mr-3 font-bold hover:text-green-100"
        to="/servicios"
        >SERVICIOS</router-link
      >
      <router-link
        class="inline-block mr-3 font-bold hover:text-green-100"
        to="/contacto"
        >CONTACTO</router-link
      >
    </li>
    <v-navigation-drawer app v-model="drawer" absolute temporary dark>
      <div class="align-center mt-4">
        <v-avatar class="align-center">
          <img src="" alt="" />
        </v-avatar>
        <p class="white--text mt-3 align-center  headline">ONG Andes Sur</p>
      </div>
    </v-navigation-drawer>
  </v-app-bar>
</template>
<script>
export default {
  name: "NavBar",
  props: {
    links: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      drawer: false
    };
  }
};
</script>

<style scoped>
.v-toolbar__content {
  height: 100px;
}
</style>
