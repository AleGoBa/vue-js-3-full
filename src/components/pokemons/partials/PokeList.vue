<script setup>
import { RouterLink } from 'vue-router'
defineProps({
  pokemons: Object
})
</script>

<template>
  <ul class="list-group">
    <template v-for="pokemon in pokemons">
      <li class="list-group-item">
        <router-link :to="`/pokemons/${pokemon.name}`">{{ pokemon.name }}</router-link>
      </li>
    </template>
  </ul>
</template>