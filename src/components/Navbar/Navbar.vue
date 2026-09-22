<template>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">FindUsers</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a class="nav-item nav-link active" href="#">Início</a>
                <a class="nav-item nav-link" href="#">Busca</a>
            </div>
        </div>
    </nav>

</template>

<script setup>

    let dropdownAtivado = false

</script>

<style>
    nav{
        margin-bottom: 2.5vh;
        position: absolute;
        display: flex;
    }
</style>