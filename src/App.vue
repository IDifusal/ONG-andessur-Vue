<template>
  <v-app>
    <main>
    <v-content>
      <nav-bar app />
        
    </v-content>
  <router-view />
  </main>
</v-app>
</template>

<script>
import NavBar from "@/components/NavBar"
export default {
  name: "App",

  components: {
    NavBar
  },
    data() {
    return {
    }
  }
};
</script>
