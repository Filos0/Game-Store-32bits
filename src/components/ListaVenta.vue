<template>
  <div class="listaBox">
    <h2>Listado de Juegos</h2>
    <ul v-show="selUsuario == ''">
      <li
        v-for="(item, index) in listaTotal"
        :key="index"
        :style="{backgroundColor: item.color}"
      >
        <label for="">
          {{ item.codigo }} | {{ item.nombre }} | {{ item.stock }} |
          {{ item.precio }}

          <input type="button" value="vender" @click="vender(item)" />
          <!--poner otro boton-->
        </label>
      </li>
    </ul>
  </div>
</template>
<script>
import {mapActions} from "vuex";
export default {
  name: "ListaVenta",

  props: {
    busquedas: {
      type: Array,
      required: false,
    },
    selUsuario: {
      type: String,
      required: false,
    },
    listaTotal: {
      type: Array,
      required: false,
    },
  },
  methods: {
    ...mapActions(["vender"]),
    boton() {
      console.log("boton presionado");
    },
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
</style>
