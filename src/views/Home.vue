<template>
  <div>
    <v-carousel
      cycle
      :height="$vuetify.breakpoint.xs ? 150 : '500px'"
      hide-delimiter-background
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        active-class
        reverse-transition="fade-transition"
        transition-group="fade-transition"
      ></v-carousel-item>
    </v-carousel>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#1fa185"
        fill-opacity="1"
        d="M0,256L48,240C96,224,192,192,288,176C384,160,480,160,576,186.7C672,213,768,267,864,261.3C960,256,1056,192,1152,160C1248,128,1344,128,1392,128L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      ></path>
    </svg>
    <div>
      <h1 class="text-5xl py-3 text-center">BIEVENIDOS A ONG ANDES SUR</h1>
      <h2 class="py-3 px-3 text-center">
        ONG ANDES SUR trabaja constantemente en biodiversidad y ayuda solidaria
        a niños y jóvenes que necesiten <br />de nosotros. Además promovemos el
        intercambio horizontal de experiencias de la mano preservando el <br />
        medio ambiente utilizando las 6R's que son reducir, reutilizar,
        reciclar, redistribuir, reparar y reflexionar .
      </h2>
      <div class="my-6 text-center text-xs-center">
        <v-btn
          to="/nosotros"
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
                    <div
                      v-if="hover"
                      class="
                        d-flex
                        transition-fast-in-fast-out
                        brown
                        lighten-5
                        darken-2
                        v-card--reveal
                        display-3
                        white--text
                      "
                      style="height: 100%"
                    >
                      <p class="text-base text-center p-2">
                        {{ card.content }}
                      </p>
                    </div>
                    <hr />
                  </v-card-text>
                  <v-card-text class="pt-6" style="position: relative">
                  </v-card-text>
                </v-card>
              </v-hover>
            </v-card>
          </div>
          <!-- PROYECTOS -->
          <div class="md:flex justify-center py-12 md:py-12 fondo1">
            <img
              src="https://dc583.4shared.com/img/HtVJLxOpiq/s23/178f68b0810/proyectos"
              alt=""
              class="proyectos m-auto md:m-0"
            />

            <div
              class="
                px-4
                text-center text-xs-center
                flex flex-wrap
                content-center
                justify-center
              "
            >
              <h3 class="text-3xl my-4">
                Comprometidos con el desarrollo del sur
              </h3>
              <br />
              <h4 class="text-center my-2">
                La pandemia del COVID-19 ha generado un cambio en las
                actividades <br />
                que el hombre desarrolla con normalidad como acudir a su centro
                de estudios.<br />
                Conoce más de nuestros proyectos
              </h4>
              <v-btn
                to="/proyectos"
                class="text-white text-center white–text brown lighten-5 my-2"
                color="secondary"
                elevation="2"
                x-large
              >
                Ver Proyectos</v-btn
              >
            </div>
          </div>
          <!-- servicios -->
          <div class="md:px-16">
            <h1 class="text-center text-4xl p-8">SERVICIOS</h1>

            <div class="md:flex justify-center">
              <v-card class="card-new" max-width="344">
                <v-img
                  src="https://static.wixstatic.com/media/15a549_cc6d3c98b2e0477cac5084a3771a060b~mv2.jpg/v1/fill/w_443,h_376,al_c,q_80,usm_0.66_1.00_0.01/15a549_cc6d3c98b2e0477cac5084a3771a060b~mv2.webp"
                  height="200px"
                ></v-img>

                <v-card-title> Asesoría de Tesis </v-card-title>

                <v-card-actions>
                  <v-spacer></v-spacer>
                </v-card-actions>

                <div class="in-text" v-show="show">
                  <v-divider></v-divider>

                  <v-card-text-2>
                    Por lo cual se ofrece el servicio de asesoría en: Plan de
                    Tesis Informe final de la investigación Asesorías de tesis
                    por etapas: Recolección de información Planteamiento del
                    problema Marco teorico Hipótesis Metodologia Analisis de
                    Resultados Conclusiones y recomendaciones Anexos
                  </v-card-text-2>
                  <v-btn
                    rounded
                    color="#ba9774"
                    dark
                    x-large
                    to="/contacto"
                    class="my-4"
                  >
                    Más información
                  </v-btn>
                </div>
              </v-card>

              <v-card class="card-new" max-width="344">
                <v-img
                  src="http://www.preydfis.com.mx/wp-content/uploads/2018/08/gestion-empresarial.jpg"
                  height="200px"
                ></v-img>

                <v-card-title> Asesoria en Gestión Empresarial </v-card-title>

                <v-card-actions>
                  <v-spacer></v-spacer>
                </v-card-actions>

                <v-expand-transition>
                  <div class="in-text" v-show="show">
                    <v-divider></v-divider>

                    <v-card-text-2>
                      Ong Andessur, realiza asesorías en Gestión empresarial
                      para MIPYMES, en sus diferentes áreas empresariales:•
                      Gestión Administrativa • Recurso Humanos • Gestión
                      Financiera • Logística • Marketing y redes sociales•
                      Desarrollo y proceso de producto/servicio Área Legal
                    </v-card-text-2>
                    <v-btn
                      rounded
                      color="#ba9774"
                      dark
                      x-large
                      to="/contacto"
                      class="my-4"
                    >
                      Más información
                    </v-btn>
                  </div>
                </v-expand-transition>
              </v-card>
              <v-card class="card-new" max-width="344">
                <v-img
                  src="https://eiposgrado.edu.pe/wp-content/uploads/2019/07/BLOG-PORTADA.png"
                  height="200px"
                ></v-img>

                <v-card-title> Asesoría en Gestión Pública </v-card-title>

                <v-card-actions>
                  <v-spacer></v-spacer>
                </v-card-actions>
                <div class="in-text" v-show="show">
                  <v-divider></v-divider>

                  <v-card-text-2>
                    Dada la experiencia precedida de la ONG Andessur, realiza
                    consultoría y asesoramiento para desarrollar y llevar a cabo
                    proyectos para el sector público (Municipalidades locales y
                    distritales)
                  </v-card-text-2>
                  <v-btn
                    rounded
                    color="#ba9774"
                    dark
                    x-large
                    to="/contacto"
                    class="my-4"
                  >
                    Más información
                  </v-btn>
                </div>
              </v-card>
            </div>
          </div>
          <div class="banner-2 text-center">
            <img
              src="https://dc613.4shared.com/img/OQbb5Ruriq/s24/17a5ae019d0/banner-2-ong-andes-sur?async&rand=0.4592375194773455.jpg"
              alt=""
              class="mx-auto"
            />
          </div>
          <!-- PRODUCTOS -->
          <div class="md:px-16">
            <h1 class="text-center text-4xl p-8">Productos</h1>

            <div class="md:flex justify-center">
              <v-card class="card-new" max-width="344">
                <v-img
                  src="https://static.wixstatic.com/media/15a549_b842127436184532a6bc8e3334d913fe~mv2.png/v1/fill/w_580,h_420,al_c,q_90,usm_0.66_1.00_0.01/15a549_b842127436184532a6bc8e3334d913fe~mv2.webp"
                  height="200px"
                ></v-img>

                <v-card-title> EL Arte de hacer una Tesis </v-card-title>

                <v-card-actions>
                  <v-spacer></v-spacer>
                </v-card-actions>

                <div class="in-text" v-show="show">
                  <v-divider></v-divider>

                  <v-card-text-2>
                    Libro en edicion digital descargable al adquirir nuestro
                    producto.
                  </v-card-text-2>
                </div>
              </v-card>

              <v-card class="card-new" max-width="344">
                <v-img
                  src="https://static.wixstatic.com/media/15a549_b842127436184532a6bc8e3334d913fe~mv2.png/v1/fill/w_580,h_420,al_c,q_90,usm_0.66_1.00_0.01/15a549_b842127436184532a6bc8e3334d913fe~mv2.webp"
                  height="200px"
                ></v-img>

                <v-card-title> EL Arte de hacer una Tesis </v-card-title>

                <v-card-actions>
                  <v-spacer></v-spacer>
                </v-card-actions>

                <v-expand-transition>
                  <div class="in-text" v-show="show">
                    <v-divider></v-divider>

                    <v-card-text-2>
                      Libro en edicion digital descargable al adquirir nuestro
                      producto.
                    </v-card-text-2>
                  </div>
                </v-expand-transition>
              </v-card>
              <v-card class="card-new" max-width="344">
                <v-img
                  src="https://static.wixstatic.com/media/15a549_b842127436184532a6bc8e3334d913fe~mv2.png/v1/fill/w_580,h_420,al_c,q_90,usm_0.66_1.00_0.01/15a549_b842127436184532a6bc8e3334d913fe~mv2.webp"
                  height="200px"
                ></v-img>

                <v-card-title> Asesoría en Gestión Pública </v-card-title>

                <v-card-actions>
                  <v-spacer></v-spacer>
                </v-card-actions>
                <div class="in-text" v-show="show">
                  <v-divider></v-divider>

                  <v-card-text-2>
                    Libro en edicion digital descargable al adquirir nuestro
                    producto.
                  </v-card-text-2>
                </div>
              </v-card>
            </div>
          </div>
          <!-- PRONTO ARTICULOS -->
          <div class="h-72 pronto flex items-center justify-center">
            <h1 class="text-center text-4xl">
              Pronto nuestros acticulos de opinión
            </h1>
          </div>
          <!-- sercicio tesis -->
          <div class="md:flex justify-center fondo2 md:pt-24 mt-12">
            <div>
              <h2
                class="
                  script
                  px-4
                  text-center
                  md:text-right
                  text-xs-center
                  pegado
                "
              >
                🤓 Necesitas ayuda con tu tesis?
              </h2>
              <div class="text-center">
                <v-btn
                  rounded
                  color="#3695eb"
                  dark
                  x-large
                  to="/contacto"
                  class="my-4"
                >
                  Nos comunicamos contigo
                </v-btn>
              </div>
            </div>
            <div>
              <img
                src="https://dc620.4shared.com/img/RThWuV5kiq/s23/1791a5a9e68/Chica2.png"
                alt=""
                width="60%"
                class="img-mirror m-auto md:m-0"
              />
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
.proyectos img {
  min-width: 90px;
}
.pronto {
  background-image: linear-gradient(
      0deg,
      rgba(54, 149, 235, 1) 0%,
      rgba(255, 255, 255, 0) 93%
    ),
    url(https://dc620.4shared.com/img/LdpljDaOiq/s23/1791a5aa250/intnational_map.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: white;
}
.banner1 {
  background-image: url(/img/banner2.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.pegado {
  line-height: 65px;
}
@media (max-width: 600px) {
  svg {
    display: none;
  }
  path {
    display: none;
  }
}
.fondo1 {
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='373' height='44.8' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%23c79673' stroke-width='1.6' stroke-opacity='0.27'%3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E");
  background-repeat: repeat;
}
.button.p-5.v-btn.v-btn--is-elevated.v-btn--has-bg.v-btn--rounded.theme--dark.v-size--default {
  padding: 2rem;
  font-size: 20px;
}
.fondo2 {
  position: relative;
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%231fa185' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%23ba9774' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%23419f81' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%23c09d6f' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%23629d7e' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%23c5a26a' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%23849a7a' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%23cba864' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%23a59877' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%23d0ad5f' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%23c79673' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23d6b35a' points='943 900 1210 900 971 687'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
}

.script {
  font-family: "Nanum Pen Script", cursive;
  font-size: 4.5rem;
}
.in-text {
  padding: 10px !important;
}
svg {
  margin-top: -90px !important;
}
.img-mirror {
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}
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
span,
h3 {
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
.proyectos {
  transform: rotate(-3deg);
  border-radius: 5px;
  filter: drop-shadow(0 0 0.75rem grey);
}
.mx-8.content-center.v-card.v-sheet.theme--light {
  margin: 20px;
}
@media (max-width: 650px) {
  .v-window,
  v-image,
  v-window-item {
    height: 150px;
  }
  .v-image__image--cover {
    background-size: contain !important;
  }
  .v-responsive__sizer {
    padding-bottom: 0 !important;
  }

  .v-responsive__content {
    height: 200px !important;
  }
  .v-icon {
    display: none !important;
  }
  .v-image__image {
    height: 150px !important;
  }
  .v-image v-responsive v-carousel__item theme--dark {
    height: 150px !important;
  }
  .card-new.v-card.v-sheet.theme--light {
    margin: auto;
  }
}
@media (min-width: 600px) {
  .card-new.v-card.v-sheet.theme--light {
    margin: 10px;
  }
}
</style>

<script>
export default {
  name: "Home",
  data() {
    return {
      items: [
        {
          src: "/img/bg-1.png"
        },
        {
          src: "/img/bg-2.png"
        },
        {
          src: "/img/bg-3.png"
        },
        {
          src: "/img/bg1.jpg"
        },
        {
          src: "/img/987634.jpg"
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
      ],
      show: true
    };
  }
};
</script>
