<template>
  <div class="">
    <div class="nosotros ">
      <!-- main cover -->
      <div
        class="w-full md:h-64 h-20 text-center pt-28 bg-cover bg-center "
        :style="{ 'background-image': 'url(/img/banner-conocenos.jpg)' }"
      >
        <h2 class="p-auto md:text-5xl text-white ">Nosotros</h2>
      </div>
      <div class="">
        <div class=" md:px-96 bg-green-50">
          <!-- 2 tarjetas -->
          <hr />
          <div class=" flex flex-wrap content-center p-3">
            <div class="sm:w-full md:inline-block md:w-4/12 bg-green-300 text-center md:p-8 md:m-8 p-3 m-3 rounded-xl shadow-md">
              <h3 class="text-center">Mision</h3>
              <p class="text-justify">
                Desarrollar competencias y apoyar el aprovechamiento de
                oportunidades de las poblaciones más vulnerables a través de un
                trabajo conjunto con entidades públicas y privadas.
              </p>
            </div>
            <div class="sm:w-full md:inline-block md:w-4/12 bg-green-300 text-center md:p-8 md:m-8 p-3 m-3 rounded-xl shadow-md">
              <h3 class="text-center">Vision</h3>
              <p class="text-justify">
                Ser una organización referente en el campo del desarrollo
                económico y social sostenible que aspira a una sociedad más
                justa.
                <br>
                <br>
                <br>
              </p>
            </div>
          </div>
          <h1 class="text-5xl text-center font-extrabold">NUESTRO EQUIPO</h1>
          <h3 class="text-center">
            CONTAMOS CON UN STAFF DE PROFESIONALES <br />Y VOLUNTARIOS
            UNIVERSITARIOS DE PRIMER NIVEL
          </h3>
          <!-- tarjetas con profs -->
          <div class="shadow-lg rounded-3xl m-5 md:flex md:flex-row-reverse bg-white pt-2 ">
            <div>
              <div
                class="w-40 h-40 bg-photo bg-cover bg-center bg-norepeat rounded-full m-auto md:m-8 md:m-0"
                :style="{ 'background-image': 'url(/img/card1.jpg)' }"
              ></div>
            </div>
            <div>
              <h1 class="p-5 font-bold text-xl">
                Directora Ejecutiva: Dr. Anatolia Hortencia Hinojosa Pérez
              </h1>
              <p class="p-5">
                Titulo Profesional como Economista otorgado por la Universidad
                Católica Santa María, con Maestría en Gestión Social y
                Desarrollo Sostenible de la Universidad Nacional San Agustín,
                ESAN - Participación en Programa de Capacitación PIP:
                Fortalecimiento y Desarrollo de Capacidades Nacionales en
                Evaluación y Valoración Económica del Patrimonio Natural.
              </p>
            </div>
          </div>
          <div class="shadow-lg rounded-3xl m-5 md:flex md:flex-row-reverse bg-white pt-2">
            <div>
              <div
                class="w-40 h-40 bg-photo bg-cover bg-center bg-norepeat rounded-full m-auto md:m-8 md:m-0"
                :style="{ 'background-image': 'url(/img/card3.jpg)' }"
              ></div>
            </div>
            <div>
              <h1 class="p-5 font-bold text-xl">
                Directora de Relaciones Internacionales: Dra. Ingrid Pastor de
                Jones
              </h1>
              <p class="p-5">
                Doctora en Educación, Magister en Tecnología Educativa; Segunda
                Especialización en Filosofía Católica; Licenciada en Educación
                Secundaria Especialidad: Lengua, Literatura y Filosofía y
                Bachiller en Ciencias de la Educación por la Universidad
                Católica Santa María y Profesora de Educación Secundaria en la
                especialidad de Idiomas francés, inglés en el Instituto
                Pedagógico Arequipa.
              </p>
            </div>
          </div>
          <div class="shadow-lg rounded-3xl m-5 md:flex md:flex-row-reverse bg-white pt-2">
            <div>
              <div
                class="w-40 h-40 bg-photo bg-cover bg-center bg-norepeat rounded-full m-auto md:m-8 md:m-0"
                :style="{ 'background-image': 'url(/img/card2.jpg)' }"
              ></div>
            </div>
            <div>
              <h1 class="p-5 font-bold text-xl">
                Director de Proyectos: José Adolfo Hinojosa Pérez
              </h1>
              <p class="p-5">
                Doctor en Economía por la Universidad de París VIII, París
                Francia. Experiencia en participación en investigación y
                publicación de libros y artículos de revistas especializadas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nosotros"
};
</script>

<style scoped>
h2 {
  font-family: "Kadwa", serif;
  text-shadow: 4px 4px 3px rgba(172, 165, 11, 0.78);
}
h3 {
  font-size: 24px;
  font-weight: bold;
}
hr {
  border-top: 8px dotted white;
}
.main-bg {
  background-color: #ffffff;
  background-image: repeating-radial-gradient(
      circle at 0 0,
      transparent 0,
      #ffffff 40px
    ),
    repeating-linear-gradient(#1fa18555, #1fa185);
}
</style>
