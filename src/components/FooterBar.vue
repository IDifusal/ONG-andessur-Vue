<template>
  <v-footer>
    <div
      class=" w-full flex flex-col md:flex-row bg-gray-900 md:px-48 md:pt-12 md:pb-6 p-8"
    >
      <div class="md:w-1/4 inline-block pt-4"></div>
      <div class="md:w-1/4 inline-block align-top">
        <a href="">
          <img
            src="/img/logo-white.png"
            alt="Logo ong andes sur blanco transparente"
            class=" scale-10 md:scale-50 mx-auto md:mx-0"
            width="120"
        /></a>
      </div>

      <div class="md:w-1/4 inline-block align-top my-2">
        <li class="list-none">
          <router-link class="block mr-3 hover:text-green-100 text-center" to="/"
            >INICIO</router-link
          >
          <router-link class="block mr-3 hover:text-green-100 text-center" to="/nosotros"
            >NOSOTROS</router-link
          >
          <router-link
            class="block mr-3  hover:text-green-100 text-center"
            to="/actividades"
            >ACTIVIDADES</router-link
          >
          <router-link class="block mr-3 hover:text-green-100 text-center" to="/proyectos"
            >PROYECTOS</router-link
          >
          <router-link class="block mr-3 hover:text-green-100 text-center" to="/servicios"
            >SERVICIOS</router-link
          >
          <router-link class="block mr-3  hover:text-green-100 text-center" to="/eventos"
            >EVENTOS</router-link
          >
          <router-link class="block mr-3 hover:text-green-100 text-center" to="/contacto"
            >CONTACTO</router-link
          >
          <router-link class="block mr-3 hover:text-green-100 text-center" to="/contacto"
            >INTRANET</router-link
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
  font-size: 12px;
}
p {
  font-size: 12px;
}
</style>

<script>
export default {
  name: "FooterBar",
  props: {}
};
</script>
