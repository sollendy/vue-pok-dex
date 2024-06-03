<script>
import { store } from '../store';
import PokeCard from './PokeCard.vue';
// import AppSearch from "./AppSearch.vue";
export default {
    name: 'PokedexComponent',
    data() {
        return {
            store,
        }
    },
    // emits: ['ricerca'],

    props: {
        pokemon: Object,
    },
    methods: {
        cercaPokemon(pokemon) {
            this.$emit('cercaPokemon', pokemon)
        }
    },
    components: {
        PokeCard,
        // AppSearch
    },
    mounted() {

    }
}
</script>

<template>
    <div class="poke-cont w-75 d-flex">
        <section class="left-side p-3 h-100 w-50">
            <div class="left-app h-100 d-flex flex-column gap-3">
                <!-- <AppSearch @cercaPokemon="cercaPokemon" :pokemonSelected="pokemon"></AppSearch> -->
                <div class="input-group d-flex justify-content-between">
                    <div class="input-group-append d-flex gap-1 me-2">
                        <input v-model="store.userInput" @keyup.enter="cercaPokemon(store.userInput)" type="text" class="form-control" placeholder="Nome pokémon" aria-label="Cerca" aria-describedby="button-addon2">
                        <button @click="cercaPokemon(store.userInput)" class="btn btn-light" type="button" id="button-addon1"><i class="bi bi-search"></i></button>
                    </div>
                    <button class="btn btn-light border rounded-0 d-none" type="button" id="button-addon2">Acchiappalo!</button>
                </div>
                  <PokeCard :pokemon="pokemon"></PokeCard> 
                  <!-- /*v-for="mostriciattolo in store.pokeArr" NON VA VEDI APP PER DETTAGLI*\ -->
                  <!--
    se metto il vfor mi combina un macello ma credo che sia dovuto a come ho impostato la logica dell'array, 
    in più la props dei pokemon continua a dar malfunzionamenti che credo siano dovuti al fatto che la props si lega a doppio filo col vfor, 
    perciò c'è un errore penso proprio in come tutto sia concepito sospetto che c'è una malagestione forse dello store e su come cerco di usarlo. 
                -->
            </div>
        </section>
        <section class="right-side p-5 h-100 w-50">
            <div class="right-app h-100 bg-light pt-4 ps-2">
                <h4>Miei Pokémon</h4>
            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped>
    .poke-cont {
        height: 85dvh;
        border: solid 10px rgb(138, 0, 0);
        border-radius: 20px;
        background-color: rgb(192, 10, 11);
        .left-side {
            border-right: solid 10px rgb(138, 0, 0);
            /*.left-app {
                .foto-stats {
                    .stats-cont {
                        .stats {
                            background-color: rgb(43, 212, 12);
                            width: 90%;
                        }
                    }
                }
            }*/
        }
    }


</style>