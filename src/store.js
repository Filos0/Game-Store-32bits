//import {reject} from "core-js/fn/promise";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    juegos: [
      {
        codigo: "0001",
        nombre: "Sekiro",
        stock: 2,
        precio: 30000,
        color: "red",
        destacado: "true",
      },
      {
        codigo: "0002",
        nombre: "Fifa 21",
        stock: 100,
        precio: 25000,
        color: "blue",
        destacado: "false",
      },
      {
        codigo: "0003",
        nombre: "GW 4",
        stock: 100,
        precio: 15000,
        color: "green",
        destacado: "true",
      },
      {
        codigo: "0004",
        nombre: "Mario Tennis Aces",
        stock: 100,
        precio: 35000,
        color: "yellow",
        destacado: "false",
      },
      {
        codigo: "0005",
        nombre: "Bloodborne",
        stock: 100,
        precio: 10000,
        color: "blue",
        destacado: "false",
      },
      {
        codigo: "0006",
        nombre: "Forza Horizon 4",
        stock: 100,
        precio: 20000,
        color: "red",
        destacado: "true",
      },
    ],
    titulo: "32 bits",
    subtitulo: "Juegos de PC y consolas",
    ventas: [],
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
  mutations: {
    venderJuego: (state, juegos) => {
      //recorrer el array y reducirle un punto
      state.juegos.forEach((j) => {
        if (j.codigo == juegos.codigo && j.stock > 0) j.stock--;
      });
    },
    registrarVenta: (state, juegos) => {
      //agregar a la lista vacia juegos[]
      state.ventas.push({
        codigo: juegos.codigo,
        nombre: juegos.nombre,
        precio: juegos.precio,
      });
    },
  },
  actions: {
    async vender({dispatch}, producto) {
      await dispatch("procesarVenta", producto);
      await dispatch("registrarVenta", producto)
        .then(() => {
          alert("Venta procesada");
        })
        .catch(() => {
          alert("Venta rechazada. No hay stock o el producto no existe");
        });
    },
    async procesarVenta({commit, state}, juegos) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          let resultado = false;
          state.juegos.forEach(({codigo}) => {
            if (codigo == juegos.codigo) {
              commit("venderJuego", juegos);
              resultado = true;
            }
          });
          if (resultado) resolve();
          else reject();
        }, 2000);
      });
    },
    async registrarVenta({commit}, juegos) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit("registrarVenta", juegos);
          resolve();
        }, 1000);
      });
    },
  },
});

export default store;
