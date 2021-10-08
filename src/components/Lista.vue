<template>
  <div class="listaBox">
    <p>Listado de Juegos</p>
    <ul v-show="selUsuario == ''">
      <li
        v-for="(item, index) in listaTotal"
        :key="index"
        :style="{backgroundColor: item.color}"
      >
        <label for="">
          {{ item.codigo }} | {{ item.nombre }} | {{ item.stock }} |
          {{ item.precio }}
        </label>
      </li>
    </ul>
    <ul v-show="selUsuario != '' && busquedas.length > 0">
      <li
        v-for="(item, index) in busquedas"
        :key="index"
        :style="{backgroundColor: item.color}"
      >
        <label for="">
          {{ item.codigo }} | {{ item.nombre }} | {{ item.stock }} |
          {{ item.precio }}
        </label>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Lista",

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
