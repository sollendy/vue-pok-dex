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
            <img class="w-100 border border-4 border-black" src="https://picsum.photos/250/120" alt="pokéfoto"> 
        </div>
        <div class="stats-cont h-100">
            <div class="stats border border-dark rounded h-100 w-100">
                <ul class="prime-info" v-if="pokemon !== ''">
                    <li>name: <b> {{pokemon.name}} </b></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                 <ul class="prime-info" v-else">
                    AH
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