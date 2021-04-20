<template>
  <div class="md:px-16">
    <h1 class="text-center text-4xl p-8">SERVICIOS</h1>
    <div class="md:flex justify-center ">
      <v-card
        class="mx-8 content-center"
        v-for="card in cards"
        :key="card.title"
      >
        <v-hover v-slot="{ hover }">
          <v-card color="grey lighten-4" width="500">
            <v-img
              :aspect-ratio="16 / 9"
              src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/business-wallpaper-design-template-fc437fecbcbaa96a4cdd3d0d6ae7bc36_screen.jpg?ts=1583140904"
            >
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out brown lighten-5 darken-2 v-card--reveal display-3 white--text"
                  style="height: 100%;"
                >
                  <p class="text-base text-center p-2">
                    {{ card.content }}
                  </p>
                </div>
              </v-expand-transition>
            </v-img>
            <v-card-text class="pt-6" style="position: relative;">
              <p class="text-center font-bold">{{ card.title }}</p>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-card>
    </div>
    <contact-form/>
  </div>
</template>
<script>
import ContactForm from "@/components/Form.vue";

export default {
  name: "Servicios",
  components:{ContactForm},
  data() {
    return {
      cards: [
        {
          title: "ASESORÍA DE TESIS",
          content:
            "Por lo cual se ofrece el servicio de asesoría en: Plan de Tesis Informe final de la investigación Asesorías de tesis por etapas: Recolección de información Planteamiento del problema Marco teorico Hipótesis Metodologia Analisis de Resultados Conclusiones y recomendaciones Anexos",
          url:
            "https://static.wixstatic.com/media/15a549_cc6d3c98b2e0477cac5084a3771a060b~mv2.jpg/v1/fill/w_443,h_376,al_c,q_80,usm_0.66_1.00_0.01/15a549_cc6d3c98b2e0477cac5084a3771a060b~mv2.webp"
        },
        {
          title: "CAPACITACION Y ASESORIA EN GESTIÓN EMPRESARIAL",
          content:
            "Ong Andessur, realiza asesorías en Gestión empresarial para MIPYMES, en sus diferentes áreas empresariales:•    Gestión Administrativa •    Recurso Humanos •    Gestión Financiera •    Logística •    Marketing y redes sociales•    Desarrollo y proceso de producto/servicio Área Legal",
          url:
            "https://static.wixstatic.com/media/15a549_cc6d3c98b2e0477cac5084a3771a060b~mv2.jpg/v1/fill/w_443,h_376,al_c,q_80,usm_0.66_1.00_0.01/15a549_cc6d3c98b2e0477cac5084a3771a060b~mv2.webp"
        },
        {
          title: "CAPACITACION Y ASESORIA EN GESTIÓN PUBLICA",
          content:
            "Dada la experiencia precedida de la ONG Andessur, realiza consultoría y asesoramiento para desarrollar y llevar a cabo proyectos para el sector público (Municipalidades locales y distritales)",
          url:
            "https://static.wixstatic.com/media/15a549_cc6d3c98b2e0477cac5084a3771a060b~mv2.jpg/v1/fill/w_443,h_376,al_c,q_80,usm_0.66_1.00_0.01/15a549_cc6d3c98b2e0477cac5084a3771a060b~mv2.webp"
        }
      ]
    };
  }
};
</script>
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
</style>
