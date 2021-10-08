<template>
  <div id="app">
    <nav class="navbar">
      <a><router-link :to="{name: 'inicio'}">Inicio</router-link></a>
      <a><router-link :to="{name: 'Busqueda'}">Busqueda</router-link></a>
    </nav>

    <transition name="vista">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
.vista-enter-active,
.vista-leave-active {
  transition: opacity 0.1s;
}
.vista-enter,
.vista-leave-to {
  opacity: 0;
}

.navbar {
  display: flex;
  background-color: #333;
  justify-content: center;
}
.navbar a {
  color: white;
  padding: 14px 20px;
  text-decoration: none;
  text-align: center;
}
.navbar a:hover {
  background-color: #ddd;
  color: black;
}
</style>
