import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    juegos: [
      {
        codigo: "0001",
        nombre: "Sekiro",
        stock: "100",
        precio: "30000",
        color: "red",
        destacado: "true",
      },
      {
        codigo: "0002",
        nombre: "Fifa 21",
        stock: "100",
        precio: "25000",
        color: "blue",
        destacado: "false",
      },
      {
        codigo: "0003",
        nombre: "GW 4",
        stock: "100",
        precio: "15000",
        color: "green",
        destacado: "true",
      },
      {
        codigo: "0004",
        nombre: "Mario Tennis Aces",
        stock: "100",
        precio: "35000",
        color: "yellow",
        destacado: "false",
      },
      {
        codigo: "0005",
        nombre: "Bloodborne",
        stock: "100",
        precio: "10000",
        color: "blue",
        destacado: "false",
      },
      {
        codigo: "0006",
        nombre: "Forza Horizon 4",
        stock: "100",
        precio: "20000",
        color: "red",
        destacado: "true",
      },
    ],
    titulo: "32 bits",
    subtitulo: "Juegos de PC y consolas",
  },
  getters: {
    cantidadJuegosTotales: (state) => {
      return state.juegos.filter((item) => {
        return item.stock > 0;
      });
    },
    busquedaJuegos: (state, getters) => (id) => {
      return getters.cantidadJuegosTotales.filter((elem) => {
        return elem.codigo == id;
      });
    },
    juegosDisponibles: (state) => {
      return state.juegos.length;
    },
  },
  mutations: {},
  actions: {},
});

export default store;
