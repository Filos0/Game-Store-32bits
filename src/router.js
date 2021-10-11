import Vue from "vue";
import Router from "vue-router";
const Inicio = () => import("./components/Inicio");
const Busqueda = () => import("./components/Busqueda");
const Venta = () => import("./components/Venta");
const Total = () => import("./components/Total");

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "inicio",
      component: Inicio,
    },
    {
      path: "/busqueda",
      name: "Busqueda",
      component: Busqueda,
    },
    {
      path: "/venta",
      name: "Venta",
      component: Venta,
    },
    {
      path: "/total",
      name: "Total",
      component: Total,
    },
  ],
});
