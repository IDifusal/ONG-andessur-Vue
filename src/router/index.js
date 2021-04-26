import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About";
import Nosotros from "../views/Nosotros";
import Proyectos from "@/views/Proyectos";
import Servicios from "@/views/Servicios";
import Contacto from "@/views/Contacto";
/* import Actividades from "@/views/Actividades" */
Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/nosotros",
      name: "Nosotros",
      component: Nosotros
    },
    {
      path: "/actividades",
      name: "Actividades",
      component: () => import("../views/Actividades.vue")
    },
    {
      path: "/about",
      name: "About",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: About
    },
    {
      path: "/proyectos",
      name: "Proyectos",
      component: Proyectos
    },
    {
      path: "/servicios",
      name: "Servicios",
      component: Servicios
    },
    {
      path: "/contacto",
      name: "Contacto",
      component: Contacto
    }
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});
export default router;
