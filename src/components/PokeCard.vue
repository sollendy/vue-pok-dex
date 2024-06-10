<script>
export default {
    name: "PokeCard",
    data() {
        return {

        }
    },
    props: {
        pokemon: Object,
    },
    computed: {
        setStats() {
            //
        }
    }
}
</script>

<template>
    <div class="foto-stats h-100 d-flex flex-column gap-3">
        <div class="foto-cont w-75 border border-4 border-black bg-light p-2 d-flex justify-content-center align-self-center ms-5 me-5">
            <img v-if="pokemon !== ''" class="w-50" :src="pokemon.sprites.front_default" alt="pokéfoto">
            <img v-else class="w-50 p-3" src="https://www.pngall.com/wp-content/uploads/4/Pokeball-PNG-Images.png" alt="pokéfoto"> 

        </div>
        <div class="stats-cont h-100">
            <div v-if="pokemon !== ''"  class="stats border border-dark rounded h-100 w-100">
                <ul class="info prime-info">
                    <li>Nome: <b> {{ pokemon.name}} </b>;</li>
                    <li>Tipo: <b v-for="(tipi, index) in pokemon.types" :key="index"> {{ tipi.type.name}}, </b>;</li>
                    <li>Altezza: <b> {{ pokemon.height}}"</b>;</li>
                    <li>Peso: <b> {{ pokemon.weight}}lbs</b>;</li>
                </ul>
                <ul class="info second-info">
                    <!-- Qui devo inserire una barra piena in base a quanto è alta
                     ciascuna delle caratteristiche relative al pokémon cercato -->
                </ul>
            </div>
            <div v-else class="stats text-center border border-dark rounded pt-2 h-100 w-100">
                Nessun Pokémon valido scelto.
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.foto-stats {
    .stats-cont {
        .stats {
            background-color: rgb(43, 212, 12);
            width: 90%;
            .info {
                list-style-type: none;
            }
        }
    }
}
</style>