<script setup>
import {ref} from "vue";
import PokeList from "../../components/pokemons/partials/PokeList.vue";
import {useGetData} from "../../composables/useGetData.js"

const {getData, data, ready, error} = useGetData();

getData('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=10')

</script>

<template>
  <main class="card p-0">
    <section class="card-header p-3">
      <h1>Lista de nombres de pokemones</h1>
    </section>
    <section v-if="!error && ready" class="card-body p-3">
      <PokeList :pokemons="data.results"/>
      <div class="d-flex justify-content-center">
        <button class="btn btn-primary m-4" @click="getData(data.previous)"
                :disabled="!data.previous">
          Previo
        </button>
        <button class="btn btn-primary m-4" @click="getData(data.next)"
                :disabled="!data.next">
          Siguiente
        </button>
      </div>
    </section>
    <section v-else>
      <h1>Hubo un error al buscar pokemones</h1>
    </section>
  </main>
</template>