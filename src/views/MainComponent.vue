<script>
import PokedexComponent from "../components/PokedexComponent.vue";
export default {
    name: 'MainComponent',
    data() {
        return {

        }
    },
    props: {pokemonSelected: Object},
    methods: {
        cercaPokemon(pokemon) {
            this.$emit('pokeselect', pokemon)
        }
    },
    components: {
        PokedexComponent
    },
    mounted() {
        setInterval(() => {
            console.log('pokemon Selezionato', this.pokemonSelected)
        }, 1000);
    }
}
</script>

<template>
    <main>
        <div class="app-cnt d-flex justify-content-center align-items-center">
            <PokedexComponent @cercaPokemon="cercaPokemon"></PokedexComponent>
        </div>
    </main>
</template>

<style lang="scss" scoped>

</style>