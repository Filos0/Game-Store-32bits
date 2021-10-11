<template>
  <div class="totalBox">
    <h1>Total de juegos vendidos</h1>
    <ul v-show="ventas.length > 0">
      <li v-for="(venta, index) in ventas" :key="index">
        <label for="">
          {{ venta.codigo }} | {{ venta.nombre }} | {{ venta.precio }}
        </label>
      </li>
    </ul>
  </div>
</template>
<script>
import {mapState} from "vuex";

export default {
  name: "Total",
  computed: {
    ...mapState(["ventas"]),
  },
};
</script>
<style scoped>
h1,
h2 {
  text-align: center;
}
li {
  text-decoration: none;
}
.totalBox {
  display: flex;
  flex-direction: column;
  margin: 100px 100px 0 100px;
  text-align: center;
}
</style>
