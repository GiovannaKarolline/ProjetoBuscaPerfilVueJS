<template>

    <nav>
        <RouterLink class="titulo-footer" :to="{ path: '/', hash: '#container' }">FindUsers</RouterLink>
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
    position: bottom;
    filter: drop-shadow(0px 2px 3px rgba(60, 55, 116, 0.85));
}

nav a {
    white-space: nowrap;
}

.titulo-footer {
    text-decoration: none !important;
    color: #a7aedf;
    font-weight: 600;
    font-size: 2.5vh;
    margin-left: 6vh;
}

</style>