<template>
  <v-app>
    <main>
    <v-main>
      <nav-bar app />
        
    </v-main>
  <router-view />
  </main>
  <footer-bar/>

</v-app>
</template>

<script>
import NavBar from "@/components/NavBar";
import FooterBar from "@/components/FooterBar";
export default {
  name: "Apps",

  components: {
    NavBar,
    FooterBar
  },
    data() {
    return {
    }
  }
};
</script>

<style>
#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
a{
  color:"#7A7A7A"
}

</style>
