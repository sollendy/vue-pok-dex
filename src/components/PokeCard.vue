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
        <div class="foto-cont w-75 bg-secondary p-2 d-flex justify-content-center align-self-center ms-5 me-5">
            <img v-if="pokemon !== ''" class="w-100 border border-4 border-black" :src="pokemon.sprites.front_default" alt="pokéfoto">
            <img v-else class="w-100 border border-4 border-black p-3" src="https://www.pngall.com/wp-content/uploads/4/Pokeball-PNG-Images.png" alt="pokéfoto"> 

        </div>
        <div class="stats-cont h-100">
            <div class="stats border border-dark rounded h-100 w-100">
                <ul class="prime-info" v-if="pokemon !== ''">
                    <li>Nome: <b> {{ pokemon.name}} </b></li>
                    <li>Tipo: <b> {{ pokemon.types[0].type.name}} </b></li>
                    <li>Altezza: <b> {{ pokemon.height}} </b></li>
                    <li>Peso: <b> {{ pokemon.Weight}} </b></li>
                </ul>
                 <ul class="prime-info" v-else>
                    Nessun Pokémon valido scelto.
                </ul>
            </div>
            <!-- vorrei che tutto ciò che è visibile dentro le ul sia visibile SOLO quando viene cercato il pokémon,
            pertanto non so perché il testo "name:" non viene nascosto dato che io nel v-if in teoria,
            sto dicendo che il contenuto di ul deve essere visibile SOLO se la props pokemon è diversa da niente. -->
        </div>
    </div>
</template>

<style lang="scss" scoped>
.foto-stats {
    .stats-cont {
        .stats {
            background-color: rgb(43, 212, 12);
            width: 90%;
            .prime-info {
                list-style-type: none;
            }
        }
    }
}
</style>