<template>
  <div class="contact">
    <h1 class="text-center text-4xl py-8">CONTACTANOS</h1>
    <div class="md:flex ">
      <div class="w-1/2 mx-auto ">
        <img
          src="https://media1.tenor.com/images/0b46edf37db3fd5d9ce71c9763bef6af/tenor.gif?itemid=12348454"
          class="mx-auto"
          alt=""
        />
      </div>

      <div class="md:w-1/2 mx-auto">
        <contact-form />
      </div>
    </div>
    <div class="svgbot">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ba9774"
          fill-opacity="1"
          d="M0,64L48,90.7C96,117,192,171,288,186.7C384,203,480,181,576,170.7C672,160,768,160,864,181.3C960,203,1056,245,1152,256C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script>
import ContactForm from "@/components/Form.vue";
export default {
  name: "Contacto",
  components: { ContactForm }
};
</script>

<style scoped>
h1,
span,
h3 {
  font-family: "Kadwa", serif;
}
iframe {
  margin: auto;
}
.container {
  margin: 0;
}
.contact {
  background-color: #fcfdfc;
}

input[type="text"] {
  border: 1px solid white !important;
}
@media (min-width:600px) {
  svg {
  margin-top: -200px;
}
}
</style>
