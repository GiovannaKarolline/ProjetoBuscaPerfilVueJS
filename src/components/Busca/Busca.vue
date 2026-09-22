<template>

    <div id="buscaContainer">

        <h2 id="tituloBusca">Busca de perfis do Github</h2>

        <input type="text" placeholder="Digite um nome de usuário do Github" v-model="username" />

        <br />

        <div class="cardAviso" v-show="numeroErro != 0">

            <p v-show="numeroErro === 404">Usuário não encontrado.</p>
            <p v-show="numeroErro === 401">Pesquisa não autorizada (acesso proibido ao endpoint).</p>
            <p v-show="numeroErro === 403">Pesquisa não autorizada (limite de requisições atingido).</p>
            <p v-show="numeroErro === 500">Erro interno do servidor.</p>

        </div>

        <div class="cardCarregando" v-show="carregando">

            <p v-show="carregando">Carregando...</p>

        </div>

        <div class="cardPerfil" v-show="user.login">

            <img :src="user.avatar_url" :alt="user.login" />
            <h2>{{ user.login }}</h2>
            <h6>{{ user.location }}</h6>
            <h6>{{ user.public_repos }} repositórios</h6>
            <h6>{{ user.followers }} seguidores</h6>

        </div>

    </div>

</template>


<script setup>

import { ref, watchEffect } from 'vue'
let username = ref('')
let user = ref({})
let numeroErro = ref(0)
let carregando = ref(false)

watchEffect(async () => {

    if (username.value) {

        numeroErro.value = 0
        carregando.value = true

        let response

        try {

            setTimeout(() => { }, 4000)

            response = await fetch(`https://api.github.com/users/${username.value}`)

            if (!response.ok) {
                throw new Error();
            }

            user.value = await response.json()

        } catch (error) {

            numeroErro.value = response.status

            user.value = {}

            setTimeout(() => {
                document.getElementsByClassName('cardAviso').item(0).style.display = 'none';
            }, 4000)

        }

        carregando.value = false
    }
})

</script>

<style>

#buscaContainer{
    min-height: 70vh;
    align-items: center;
}

.cardAviso,
.cardCarregando {
    border-radius: 10px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

.cardAviso {
    background-color: #df4747;
    color: #fff;
    padding: 10px;
    margin-bottom: 10px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

.cardCarregando {
    background-color: #6b6969;
    color: #ffffff;
    padding: 10px;
    margin-bottom: 10px;
}

.cardPerfil {
    border-radius: 10px;
    background-color: #7284f71f;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 20vh;
    min-height: 50vh;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    color: #3c3774;
    border: 2px solid #0f218b80;
}

.cardPerfil img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 4vh;
    margin-top: 1vh;
    margin-right: 0vh;
    border: 2px solid #0f218b80;
}

.cardPerfil h2{
    margin-bottom: 3vh
}

.cardPerfil h6 {
    font-size: 18px;
    margin-top: 1vh;
    overflow-wrap: break-word;
}

input{
    width: 300px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid #0f218b80;
    padding-left: 10px;
    margin: 2vh;
}

input:focus{
    outline: none;
    box-shadow: 0 0 5px #0f218b80;
}
</style>