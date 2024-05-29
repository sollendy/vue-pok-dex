<script>
import { store } from "../store";
export default {
    name: "AppSearch",
        data() {
            return {
                store,
            }
        },
    emits: ['ricerca'],
    methods: {
        cercaPokemon(pokemon) {
            this.$emit('cercaPokemon', pokemon)
        }
    },
    props: {pokemonSelected: Object},
}
</script>

<template>
    <div class="input-group d-flex justify-content-between">
        <div class="input-group-append d-flex gap-1 me-2">
            <input v-model="store.userInput" @keyup.enter="cercaPokemon(store.userInput)" type="text" class="form-control" placeholder="Nome pokémon" aria-label="Cerca" aria-describedby="button-addon2">
            <button @click="cercaPokemon(store.userInput)" class="btn btn-light" type="button" id="button-addon1"><i class="bi bi-search"></i></button>
        </div>
        <button class="btn btn-light border rounded-0 d-none" type="button" id="button-addon2">Acchiappalo!</button>
    </div>
</template>

<style lang="scss" scoped>
    
</style>