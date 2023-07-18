<script setup>
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
        <img :src="pokemon.sprites.front_default"/>
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
  </main>
</template>