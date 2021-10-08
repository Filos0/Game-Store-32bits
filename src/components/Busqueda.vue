<template>
  <div class="busquedaBox">
    <h1>Búsqueda de Juegos</h1>
    <input type="text" v-model="busqueda" />
    <h2>
      Número de Juegos Disponibles:
      <span v-text="juegosDisponibles"></span>
    </h2>
    <h2>
      Cantidad de stock total de Juegos:
      <span v-text="juegoTotales"></span>
    </h2>

    <Lista
      :busquedas="busca"
      :listaTotal="cantidadJuegosTotales"
      :selUsuario="busqueda"
    ></Lista>
  </div>
</template>
<script>
import {mapGetters} from "vuex";
import Lista from "./Lista.vue";
export default {
  name: "Busqueda",
  data() {
    return {
      busqueda: "",
      totalJuegos: "",
    };
  },
  components: {
    Lista,
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
  margin: 100px 500px 0 500px;
  text-align: center;
}
</style>
