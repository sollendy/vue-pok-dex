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
            <p class="stats border border-dark rounded h-100 w-100">
                
            </p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.foto-stats {
    .stats-cont {
        .stats {
            background-color: rgb(43, 212, 12);
            width: 90%;
        }
    }
}
</style>