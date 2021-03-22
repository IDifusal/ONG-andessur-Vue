<template>
  <div>
    <v-carousel
      cycle
      height="700"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition-group="fade-transition"
      ></v-carousel-item>
    </v-carousel>
    <div>
      <h1 class="text-5xl py-3 text-center">BIEVENIDOS A ONG ANDES SUR</h1>
      <h2 class="py-3 text-center">
        ONG ANDES SUR trabaja constantemente en biodiversidad y ayuda solidaria
        a niños y jóvenes que necesiten <br />de nosotros. Además promovemos el
        intercambio horizontal de experiencias de la mano preservando el <br />
        medio ambiente utilizando las 6R's que son reducir, reutilizar,
        reciclar, redistribuir, reparar y reflexionar .
      </h2>
      <div class="my-6 text-center text-xs-center">
        <v-btn
          class="text-white white–text brown lighten-5"
          color="secondary"
          elevation="2"
          x-large
        >
          Más informacion</v-btn
        >
      </div>
      <!--CARDS -->
      <div>
        <template>
          <div class="md:flex justify-center">
            <v-card
              class="mx-8 content-center"
              v-for="card in cards"
              :key="card.title"
            >
              <v-hover v-slot="{ hover }">
                <v-card
                  class="mx-auto mx-8 py-8 supacard"
                  color="#1fa185"
                  min-width="290"
                  min-height="320"
                >
                  <br />
                  <br />
                  <br />
                  <br />
                  <hr />
                  <p class="mx-2 title-card text-center text-white">
                    {{ card.title }}
                  </p>
                  <h3 class="mx-2 text-center text-white">ANDES SUR</h3>
                  <v-card-text :aspect-ratio="16 / 9">
                    <v-expand-transition>
                      <div
                        v-if="hover"
                        class="d-flex transition-fast-in-fast-out  brown lighten-5 darken-2 v-card--reveal display-3 white--text"
                        style="height: 100%;"
                      >
                        <p class="text-base text-center p-2">
                          {{ card.content }}
                        </p>
                      </div>
                      <hr />
                    </v-expand-transition>
                  </v-card-text>
                  <v-card-text class="pt-6" style="position: relative;">
                  </v-card-text>
                </v-card>
              </v-hover>
            </v-card>
          </div>
          <!-- WEBNARS AND SERVICES!-->
          <div class="flex container px-32 my-8 md:h-80">
            <div
              class="w-3/4"
              :style="{ 'background-image': 'url(/img/webinar.png)' }"
            ></div>
            <div class="w-1/4 bg-gray-600"></div>
          </div>
          <div class="flex container px-32 my-8 md:h-80">
            <div class="w-1/4 bg-gray-600"></div>
            <div
              class="w-3/4"
              :style="{ 'background-image': 'url(/img/banner2.png)' }"
            ></div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 1;
  position: absolute;
  width: 100%;
  border-radius: 8px;
}
.v-card__text {
  padding: 0 !important;
}

h1,
span {
  font-family: "Kadwa", serif;
}
.title-card {
  font-family: "Open Sans", sans-serif;
  font-size: 30px;
}
.theme--light.v-btn.v-btn--has-bg {
  background-color: #ba9774 !important;
  transition: 0.3s;
}
.theme--light.v-btn.v-btn--has-bg:hover {
  background-color: #1fa185 !important;
}
span.v-btn__content {
  color: white;
}
.v-application .grey.lighten-4 {
  background-color: #f5f5f5 !important;
}
hr {
  height: 1.5px;
  border-width: 0;
  color: gray;
  background-color: black;
  margin: auto;
  width: 50%;
}
</style>
<script>
export default {
  name: "Home",
  data() {
    return {
      items: [
        {
          src: "https://dc720.4shared.com/img/qFaCFeoGea/s23/1785c24d508/bg1.jpg"
        },
        {
          src: "https://dc706.4shared.com/img/q3AxDVSpiq/s23/1785c346180/bga2.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"
        },
        {
          src: "https://dc720.4shared.com/img/VOC4El1pea/s23/1785c24ec78/bg3.jpg"
        }
      ],
      cards: [
        {
          title: "PROYECTOS",
          content:
            "Nuestros ejes de desarrollo son tres: investigación y desarrollo, gestión empresarial y publica para el desarrollo sostenible y extensión en el ámbito socio-cultural."
        },
        {
          title: "CLIENTES",
          content:
            "Nuestros servicios van dirigidos tanto a la pequeña y mediana empresa, como tambien a aquellas personas que desean realizar investigacion, ya sea para obtener un grado academico o bien para publicar en revistas cientificas."
        },
        {
          title: "SERVICIOS",
          content:
            "Asesoria de tesis Ciencias Sociales  Asesoria en Gestion Empresarial    Consultoria en proyectos de sector público"
        }
      ]
    };
  }
};
</script>
