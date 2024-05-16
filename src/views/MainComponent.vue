<script>
import PokedexComponent from "../components/PokedexComponent.vue";
export default {
    name: 'MainComponent',
    data() {
        return {

        }
    },
    methods: {

    },
    components: {
        PokedexComponent
    },
    mounted() {

    }
}
</script>

<template>
    <main>
        <div class="app-cnt d-flex justify-content-center align-items-center">
            <PokedexComponent/>
        </div>
    </main>
</template>

<style lang="scss" scoped>

</style>