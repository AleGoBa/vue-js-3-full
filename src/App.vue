<script setup>
import NavBar from "./components/partials/website/NavBar.vue";
import {RouterView} from "vue-router";
</script>

<template>
  <main class="container">
    <header class="row">
      <section class="col-12">
        <NavBar/>
      </section>
    </header>
    <section class="row">
      <article class="col-12">
        <RouterView/>
      </article>
    </section>
  </main>
</template>