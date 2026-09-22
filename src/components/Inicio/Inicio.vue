<template>
    <div id="containerInicio">

        <div id="textoInicio">
            <h2>Olá! Bem vindo(a) ao FindUsers <3</h2>
            <h4>Pesquise um nome de usuário e conheça o dono do perfil correspondente.</h4>
            <button href="#tituloBusca">Buscar perfil</button>
        </div>

        <img src="../../../public/githubRoxo.jpg" />

    </div>
</template>

<script>

</script>

<style>

#containerInicio {
    display: flex;
    flex-direction: row;
    text-align: center;
    margin-bottom: 10vh;
    overflow-x: hidden;
    color:rgb(40, 34, 104)
}

#textoInicio{
    margin-right: 10%;
    margin-left: 10%;
    
}

#textoInicio h4, #textoInicio h2{
    margin-bottom: 4.5vh;
}

#textoInicio h2{
    margin-top: 26vh;
    font-size: 5vh;
}

#textoInicio h4{
    font-size: 3vh;
}

img {
    max-width: 1800px;
    border-radius: 80px;
    margin-right: -18%;
    filter: drop-shadow(0px 4px 4px rgba(60, 55, 116, 1));
    margin-bottom: 2vh;
}

button {
    background-color: rgb(60, 55, 116);
    color: #a7aedf;
    border-radius: 10px;
    filter: drop-shadow(0px 2px 4px rgba(60, 55, 116, 0.75));
    border: 1px solid rgb(60, 55, 116);
    padding: 5px 15px;
    border: 2px solid #c8cdf1e0;
    font-weight: 500;
}

button:hover {
    background-color: #c8cdf1e0;
    color: #3c3774;
    border: 2px solid #0f218b80;
}

</style>