<template>
    <div>
        <h1 class="text-center text-4xl py-8">CONTACTANOS</h1>
        <div class="flex container">
            <div><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7654.984122620129!2d-71.53545519033199!3d-16.39981736675532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424a59ffae2999%3A0xc419f49d1f9cd270!2sPlaza%20de%20Armas%20de%20Arequipa!5e0!3m2!1ses!2spe!4v1616391902302!5m2!1ses!2spe" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe></div>
            <div>        <v-form v-model="valid">
          <v-container class="md:flex md:p-8">
                          <div class="w-1/2 h-20"></div>
            <v-row class="bg-green-50 rounded-lg shadow-lg">
              <v-col cols="12" md="12">
                <v-text-field
                  v-model="firstname"
                  :rules="nameRules"
                  :counter="10"
                  label="Tu nombre"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="12">
                <v-text-field
                  v-model="lastname"
                  :rules="nameRules"
                  :counter="10"
                  label="Tus apellidos"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="12">
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="Tu e-mail"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="3">
                    <p>
    <input
      type="submit"
      value="Enviar"
    >
  </p>

              </v-col>
            </v-row>

          </v-container>
        </v-form>
</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Contacto"
}
</script>