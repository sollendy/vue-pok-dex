<script>
export default {
    name: 'PokedexComponent',
    data() {
        return {
            
        }
    },
    methods: {
        
    },
    components: {

    },
    mounted() {

    }
}
</script>

<template>
    <div class="poke-cont w-75 d-flex">
        <section class="left-side p-3 h-100 w-50">
            <div class="left-app h-100 d-flex flex-column gap-3">
                <div class="input-group d-flex justify-content-between">
                    <div class="input-group-append d-flex gap-1 me-2">
                        <input type="text" class="form-control" placeholder="Nome pokémon" aria-label="Cerca" aria-describedby="button-addon2">
                        <button class="btn btn-light" type="button" id="button-addon1"><i class="bi bi-search"></i></button>
                    </div>
                    <button class="btn btn-light border rounded-0 d-none" type="button" id="button-addon2">Acchiappalo!</button>
                </div>
                <div class="foto-stats h-100 d-flex flex-column gap-3">
                    <div class="foto-cont w-75 bg-secondary p-2 d-flex justify-content-center align-self-center ms-5 me-5">
                        <img class="w-100 border border-4 border-black" src="https://picsum.photos/250/120" alt="pokéfoto">
                    </div>
                    <div class="stats-cont h-100">
                        <p class="stats border border-dark rounded h-100 w-100">
                            
                        </p>
                    </div>
                </div>
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
            .left-app {
                .foto-stats {
                    .stats-cont {
                        .stats {
                            background-color: rgb(43, 212, 12);
                            width: 90%;
                        }
                    }
                }
            }
        }
    }


</style>