<script setup>
import axios from 'axios';
import {ref} from "vue";
import PokeList from "../../components/pokemons/partials/PokeList.vue";

const pokemons = ref([]);
const ready = ref(false);
const getPokemons = async () => {
  try {
    const {data} = await axios.get('https://pokeapi.co/api/v2/pokemon', {
      params: {
        limit: 10, offset: 10
      }
    })
    pokemons.value = data.results;
  } finally {
    ready.value = true;
  }
}

getPokemons();
</script>

<template>
  <main class="card p-0">
    <section class="card-header p-3">
      <h1>Lista de nombres de pokemones</h1>
    </section>
    <section class="card-body p-3">
      <PokeList v-if="ready" :pokemons="pokemons"/>
    </section>
  </main>
</template>