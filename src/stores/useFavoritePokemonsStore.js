import { defineStore } from "pinia";
import { ref } from "vue";
import { toast } from "vue3-toastify";

export const useFavoritePokemonsStore = defineStore('useFavoritePokemonsStore', () => {
    const favoritePokemons = ref([]);

    if (localStorage.getItem("favoritePokemons")) {
        favoritePokemons.value = JSON.parse(localStorage.getItem("favoritePokemons"))
    } else {
        localStorage.setItem('favoritePokemons', JSON.stringify(favoritePokemons.value))
    }

    function addPokemon(pokemon) {
        favoritePokemons.value.push(pokemon)
        toast.success(`${pokemon.name} ha sido añadido a tu lista de favoritos.`);
        saveInLocalStorage()
    }

    function removePokemon(pokemon) {
        const pokeIndex = favoritePokemons.value.findIndex(e => e.id === pokemon.id)
        favoritePokemons.value.splice(pokeIndex , 1)
        toast.success(`${pokemon.name} ha sido removido de tu lista de favoritos.`);
        saveInLocalStorage()
    }

    function saveInLocalStorage() {
        localStorage.setItem("favoritePokemons", JSON.stringify(favoritePokemons.value))
    }

    function isAlreadyAdded(pokemonId){
        return favoritePokemons.value.find(pokemon => pokemon.id === pokemonId) !== undefined;
    }

    return {
        favoritePokemons,
        addPokemon,
        removePokemon,
        isAlreadyAdded
    }
})