<template>
  <div class="md:px-16">
    <h1 class="text-center text-4xl p-8">SERVICIOS</h1>
    <v-btn icon @click="show = !show">
      <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
    </v-btn>
    <div class="md:flex ">
      <v-card class="card-new" max-width="344">
        <v-img
          src="https://static.wixstatic.com/media/15a549_cc6d3c98b2e0477cac5084a3771a060b~mv2.jpg/v1/fill/w_443,h_376,al_c,q_80,usm_0.66_1.00_0.01/15a549_cc6d3c98b2e0477cac5084a3771a060b~mv2.webp"
          height="200px"
        ></v-img>

        <v-card-title>
          Asesoría de Tesis
        </v-card-title>

        <v-card-actions>
          <v-spacer></v-spacer>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>

            <v-card-text>
              Por lo cual se ofrece el servicio de asesoría en: Plan de Tesis
              Informe final de la investigación Asesorías de tesis por etapas:
              Recolección de información Planteamiento del problema Marco
              teorico Hipótesis Metodologia Analisis de Resultados Conclusiones
              y recomendaciones Anexos
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>

      <v-card class="card-new" max-width="344">
        <v-img
          src="http://www.preydfis.com.mx/wp-content/uploads/2018/08/gestion-empresarial.jpg"
          height="200px"
        ></v-img>

        <v-card-title>
          Asesoria en Gestión Empresarial
        </v-card-title>

        <v-card-actions>
          <v-spacer></v-spacer>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>

            <v-card-text>
              Ong Andessur, realiza asesorías en Gestión empresarial para
              MIPYMES, en sus diferentes áreas empresariales:• Gestión
              Administrativa • Recurso Humanos • Gestión Financiera • Logística
              • Marketing y redes sociales• Desarrollo y proceso de
              producto/servicio Área Legal
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
      <v-card class="card-new" max-width="344">
        <v-img
          src="https://eiposgrado.edu.pe/wp-content/uploads/2019/07/BLOG-PORTADA.png"
          height="200px"
        ></v-img>

        <v-card-title>
          Asesoría en Gestión Pública
        </v-card-title>

        <v-card-actions>
          <v-spacer></v-spacer>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>

            <v-card-text>
              Dada la experiencia precedida de la ONG Andessur, realiza
              consultoría y asesoramiento para desarrollar y llevar a cabo
              proyectos para el sector público (Municipalidades locales y
              distritales)
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
      <contact-form />
    </div>
  </div>
</template>
<script>
import ContactForm from "@/components/Form.vue";

export default {
  name: "Servicios",
  components: { ContactForm },
  data() {
    return {
      cards: [
        {
          title: "ASESORÍA DE TESIS",
          content: "",
          url: ""
        },
        {
          title: "CAPACITACION Y ASESORIA EN GESTIÓN EMPRESARIAL",
          content: "",
          url: ""
        },
        {
          title: "CAPACITACION Y",
          content: "",
          url:
            "https://static.wixstatic.com/media/15a549_cc6d3c98b2e0477cac5084a3771a060b~mv2.jpg/v1/fill/w_443,h_376,al_c,q_80,usm_0.66_1.00_0.01/15a549_cc6d3c98b2e0477cac5084a3771a060b~mv2.webp"
        }
      ],
      show: true
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
  padding: 8 px !important;
}
.v-sheet.v-card:not(.v-sheet--outlined) {
  box-shadow: none;
}
</style>
