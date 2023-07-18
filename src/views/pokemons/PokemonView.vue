<script setup>
import axios from 'axios';
import {ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import Poke from "../../components/pokemons/partials/Poke.vue";

const $route = useRoute();
const $router = useRouter();
const pokemon = ref({});
const ready = ref(false);

const getPokemon = async () => {
  try {
    const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${$route.params.name}`)
    pokemon.value = data;
  } catch ($error) {
    await $router.push('/:pathMatch(.*)*')
  } finally {
    ready.value = true;
  }
}

getPokemon()
</script>

<template>
  <Poke v-if="ready" :pokemon="pokemon"/>
</template>