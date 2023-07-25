<script setup>
import {useGetData} from "../../composables/useGetData";
import {useRoute} from "vue-router";
import Poke from "../../components/pokemons/partials/Poke.vue";
import {toast} from "vue3-toastify";

const $route = useRoute()

const {getData, data, ready, error} = useGetData();

getData(`https://pokeapi.co/api/v2/pokemon/${$route.params.name}`)
</script>

<template>
  <div v-if="ready">
    <Poke v-if="!error" :pokemon="data"/>
    <h1 v-else>Pokemon no encontrado</h1>
  </div>
</template>