<script setup>
import Poke from "./Poke.vue";
import {useFavoritePokemonsStore} from "../../../stores/useFavoritePokemonsStore";
import {storeToRefs} from "pinia";
const store = useFavoritePokemonsStore();
const {favoritePokemons} = storeToRefs(store);
</script>

<template>
  <main class="py-5 px-2">
    <section class="row justify-content-center">
      <h2 class="text-center">Tus pokemones favoritos</h2>
    </section>
    <section class="row justify-content-evenly p-3">
      <template v-for="pokemon in favoritePokemons">
        <div class="col-3 p-3">
          <Poke :pokemon="pokemon"/>
        </div>
      </template>
    </section>
  </main>

</template>