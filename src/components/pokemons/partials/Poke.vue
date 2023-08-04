<script setup>
import { useFavoritePokemonsStore } from "@/stores/useFavoritePokemonsStore.js"

const store = useFavoritePokemonsStore();

defineProps({
  pokemon: Object
})
</script>

<template>
  <main class="card p-0 text-center">
    <section class="card-header p-3">
      <h1>{{ pokemon.name }}</h1>
    </section>
    <section class="card-body p-3">
      <article class="py-2">
        <h5 class="text-muted">Foto</h5>
        <img :src="pokemon.sprites.front_default" />
      </article>
      <article class="py-2">
        <h5 class="text-muted">Altura</h5>
        <h3 class="text-muted">{{ pokemon.height }}</h3>
      </article>
      <article class="py-2">
        <h5 class="text-muted">Largo</h5>
        <h3 class="text-muted">{{ pokemon.weight }}</h3>
      </article>
    </section>
    <section class="card-footer">
      <button class="btn btn-ligth" 
      :title="store.isAlreadyAdded(pokemon.id) ?  'Ya está añadido' : 'Añadir a favoritos'" 
      @click="!store.isAlreadyAdded(pokemon.id) ? store.addPokemon(pokemon) : store.removePokemon(pokemon)">
        <i :class="`bi bi-bookmark${store.isAlreadyAdded(pokemon.id) ? '-check-fill' : ''}`" 
        style="font-size: 4rem;">
        </i>
      </button>
    </section>
  </main>
</template>