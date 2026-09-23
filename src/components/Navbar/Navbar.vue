<template>

    <nav>
        <RouterLink class="titulo-navbar" :to="{ path: '/', hash: '#container' }">FindUsers</RouterLink>

        <div class="botoes-navbar">
            <RouterLink class="item-navbar" :to="{ path: '/', hash: '#container' }">Início</RouterLink>
            <RouterLink class="item-navbar" :to="{ path: '/', hash: '#buscaContainer' }">Busca</RouterLink>
        </div>
    </nav>

</template>

<script setup>
</script>

<style scoped>
nav {
    display: flex;
    justify-content: space-between !important;
    align-items: center;
    padding: 10px;
    min-height: 5vh;
    max-width: 100vw;
    overflow-x: hidden !important;
    background-color: rgb(60, 55, 116);
    color: #a7aedf;
    width: 100%;
    position: fixed;
    z-index: 1;
    filter: drop-shadow(0px 2px 3px rgba(60, 55, 116, 0.85));
}

nav a {
    white-space: nowrap;
}

.titulo-navbar, .item-navbar{
    text-decoration: none !important;
    color: #a7aedf;
}

.titulo-navbar {
    font-weight: 600;
    font-size: 3.5vh;
    margin-left: 6vh;
}

.item-navbar {
    font-size: 2.1vh;
}

.botoes-navbar {
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    gap: 5vh;
    margin-right: 6vh;
}

</style>