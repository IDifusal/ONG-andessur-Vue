<template>
  <v-app-bar height="90px" app class="white">
    <v-app-bar-nav-icon
      class="visible md:invisible"
      @click="drawer = !drawer"
    ></v-app-bar-nav-icon>
    <router-link to="/"
      ><v-toolbar-title
        ><img
          class="mainlogo"
          src="../assets/ong2.png"
          width="280px"
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
      <div class=" mt-4 p-5">
       <div class="m-auto">   <img src="/img/logo-white.png"  width="70px" class=" m-auto" alt="" /></div>
        <p class="white--text mt-3 align-center font-bold text-2xl">ONG ANDES SUR</p>
            <li class="list-none py-5">
      <router-link
        class="block my-3 font-bold hover:text-green-100"
        to="/"
        >INICIO</router-link
      >
      <router-link
        class="block my-3 font-bold hover:text-green-100"
        to="/nosotros"
        >NOSOTROS</router-link
      >
      <router-link
        class="block my-3 font-bold hover:text-green-100"
        to="/proyectos"
        >PROYECTOS</router-link
      >
      <router-link
        class="block my-3 font-bold hover:text-green-100"
        to="/servicios"
        >SERVICIOS</router-link
      >
      <router-link
        class="block my-3 font-bold hover:text-green-100"
        to="/contacto"
        >CONTACTO</router-link
      >
    </li>
    <div class="md:w-1/4 inline-block pt-4">
        <img src="/img/mail.png" alt="" class="inline-block" />
        <img src="/img/facebook.png" alt="" class="inline-block px-3" />
      </div>
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
@media (max-width:600px){
.mainlogo{
  max-width: auto;
}
}

</style>
