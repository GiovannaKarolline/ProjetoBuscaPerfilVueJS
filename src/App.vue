<script setup>
import Busca from './components/Busca/Busca.vue'
import Navbar from './components/Navbar/Navbar.vue'
import Inicio from './components/Inicio/Inicio.vue'
import Footer from './components/Footer/Footer.vue'

</script>

<template>

  <div id="container" class="">
    <Navbar></Navbar>
    <Inicio></Inicio>
    <Busca></Busca>
    <Footer></Footer>
  </div>

</template>

<style>
* {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #cecfdd !important;
  overflow: hidden;

}

body::-webkit-scrollbar {
  width: 6px;
}

body::-webkit-scrollbar-track {
  background: #3f7086;
  border-radius: 3px;
}

body::-webkit-scrollbar-thumb {
  background: #71379e;
  border-radius: 3px;
}
</style>
