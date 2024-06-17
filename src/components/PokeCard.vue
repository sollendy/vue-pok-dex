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
    methods: {
        con(par) {
            //
            console.log('skdbf', par)
        }
    },
    computed: {
        setStats(par) {
            //
            console.log('skdbf', par)
        },
        // scorriImg() {
        //     pokemon.sprites++
        // }
    }
}
</script>

<template>
    <div class="foto-stats h-100 d-flex flex-column gap-3">
        <div class="foto-cont w-75 border border-4 border-black bg-light p-2 d-flex justify-content-center align-self-center ms-5 me-5">
            <img v-if="pokemon !== ''" class="w-50" :src="pokemon.sprites.front_default" alt="pokéfoto">
            <!-- vorrei fare in modo che se l'utente clicca sulla img
             essa scorre mostrando tutte le img disponibili del Pokémon ricominciando da capo
             dopo l'ultima disponibile -->
            <img v-else class="w-50 p-3" src="https://www.pngall.com/wp-content/uploads/4/Pokeball-PNG-Images.png" alt="pokéfoto"> 
        </div>
        <div class="stats-cont h-100">
            <div v-if="pokemon !== ''"  class="stats border border-dark rounded h-100 w-100">
                <ul class="info prime-info p-4">
                    <li>Nome: <b> {{ pokemon.name}} </b>;</li>
                    <li>Tipo: <b v-for="(tipi, index) in pokemon.types" :key="index"> {{ tipi.type.name }}{{pokemon.types.length - 1 == index ? ';' : ', '}}</b></li>
                    <li>Altezza: <b> {{ pokemon.height}}"</b>;</li>
                    <li>Peso: <b> {{ pokemon.weight}}lbs</b>;</li>
                </ul>
                <ul class="info second-info p-4">
                    <!-- Qui devo inserire una barra piena in base a quanto è alta
                     ciascuna delle caratteristiche relative al pokémon cercato -->
                     <li v-for="(params, index) in pokemon.stats" :key="index" class="d-flex gap-1 align-items-center position-relative">
                        {{ this.con(params) }}
                        <label for="nome-parametro">{{ params.stat.name }}:</label> 
                        <!-- forse in questa label conviene sostiuire i nomi di attacco e difesa speciali 
                         con qualcosa di più corto in modo da non deformare il contenuto quando esso si restringe.
                         Bisogna solo capire come fare dato che il tutto è gestito tramite chiamata API.
                         Ho la mezza idea di creare un array mio e scataflesciarglielo malissimo -->
                        <div class="progress" role="progressbar" aria-label="Basic example" :aria-valuenow="params.base_stat" aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-bar" :style="{'width': (params.base_stat * 100) / 300 + '%', 'background-color': (params.base_stat * 100) / 300 < 25 ? 'red' : (params.base_stat * 100) / 300 < 50 ? 'yellow' : 'orange'}">{{Math.ceil((params.base_stat * 100) / 300) + '%'}}</div>
                        </div>
                       <!--  <div class="stat-bars bg-dark border rounded border-black h-100 w-100">
                            <div class="bar-width h-100" :style="width: (params.stat.base_stat / 300)"></div>
                        </div> -->
                    </li>
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
            ul.second-info {
                li {
                    span.stat-bars {
                        height: 0.3rem;
                        max-width: 50%;
                        //dato che è uno span, il d-inline predefinito impedisce che la sua altezza venga alterata, cercare soluzione alternativa.
                    }
                    .progress {
                        height: 0.5em;
                        width: 60%;
                    }
                }
            }
        }
    }
}
</style>