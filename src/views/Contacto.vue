<template>
  <div>
    <h1 class="text-center text-4xl py-8">CONTACTANOS</h1>
    <div class="md:flex ">
      <div class="w-2/4 md:margin-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7654.984122620129!2d-71.53545519033199!3d-16.39981736675532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424a59ffae2999%3A0xc419f49d1f9cd270!2sPlaza%20de%20Armas%20de%20Arequipa!5e0!3m2!1ses!2spe!4v1616391902302!5m2!1ses!2spe"
          width="600"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>

      <div class="w-2/4 md:margin-auto">
        <contact-form />
      </div>
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
iframe {
  margin: auto;
}
.container {
  margin: 0;
}
</style>
