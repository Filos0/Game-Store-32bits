<template>
  <div class="busquedaBox">
    <h1>Venta de Juegos</h1>

    <h2>
      Cantidad de juegos con stock:
      <span v-text="juegosDisponibles"></span>
    </h2>

    <ListaVenta
      :busquedas="busca"
      :listaTotal="cantidadJuegosTotales"
      :selUsuario="busqueda"
    ></ListaVenta>
  </div>
</template>
<script>
import {mapGetters} from "vuex";
import ListaVenta from "./ListaVenta.vue";
export default {
  name: "Venta",
  data() {
    return {
      busqueda: "",
      totalJuegos: "",
    };
  },
  components: {
    ListaVenta,
  },
  computed: {
    ...mapGetters(["cantidadJuegosTotales", "juegosDisponibles"]),
    juegoTotales() {
      let total = 0;
      for (var i of this.$store.getters.cantidadJuegosTotales) {
        total = total + parseInt(i.stock);
      }
      console.log(total);
      return total;
    },
    busca() {
      return this.$store.getters.busquedaJuegos(this.busqueda);
    },
  },
};
</script>

<style scoped>
h1,
h2 {
  text-align: center;
}

.busquedaBox {
  display: flex;
  flex-direction: column;
  margin: 100px 100px 0 100px;
  text-align: center;
}
</style>
