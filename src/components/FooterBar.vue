<template>
  <v-footer>
    <div class=" w-full flex flex-col md:flex-row bg-gray-900 md:px-48 md:pt-12 md:pb-6 p-8">
      <div class="md:w-1/4 inline-block align-top">
        <a href="">
          <img
            src="/img/logo-white.png"
            alt="Logo ong andes sur blanco transparente"
            class=" scale-10 md:scale-50"
            width="200"
        /></a>
      </div>
      <div class="md:w-1/4 inline-block pt-4">
        <img src="/img/mail.png" alt="" class="inline-block" />
        <img src="/img/facebook.png" alt="" class="inline-block" />
      </div>
      <div class="md:w-1/4 inline-block align-top ">
        <li class="list-none">
          <router-link class="block mr-3 font-bold hover:text-green-100" to="/"
            >INICIO</router-link
          >
          <router-link
            class="block mr-3 font-bold hover:text-green-100"
            to="/nosotros"
            >NOSOTROS</router-link
          >
          <router-link
            class="block mr-3 font-bold hover:text-green-100"
            to="/actividades"
            >ACTIVIDADES</router-link
          >
          <router-link
            class="block mr-3 font-bold hover:text-green-100"
            to="/proyectos"
            >PROYECTOS</router-link
          >
          <router-link
            class="block mr-3 font-bold hover:text-green-100"
            to="/servicios"
            >SERVICIOS</router-link
          >
          <router-link
            class="block mr-3 font-bold hover:text-green-100"
            to="/eventos"
            >EVENTOS</router-link
          >
          <router-link
            class="block mr-3 font-bold hover:text-green-100"
            to="/contacto"
            >CONTACTO</router-link
          >
        </li>
      </div>
      <div class="md:w-1/4 inline-block text-white align-top">
        <p class="text-justify">
          ONG ANDES SUR trabaja constantemente en biodiversidad y ayuda
          solidaria a niños y jóvenes que necesiten de nosotros. Además
          promovemos el intercambio horizontal de experiencias de la mano
          preservando el medio ambiente utilizando las 6R's que son reducir,
          reutilizar, reciclar, redistribuir, reparar y reflexionar .
        </p>
      </div>
    </div>
  </v-footer>
</template>
<style scoped>
.v-footer {
  padding: 0 !important;
}
a {
  font-family: "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: extrabold;
  font-size: 17px;
}
p {
  font-size: 15px;
}
</style>

<script>
export default {
  name: "FooterBar",
  props: {}
};
</script>
