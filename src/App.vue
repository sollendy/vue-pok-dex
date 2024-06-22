<script>
//import { RouterLink, RouterView } from 'vue-router';
import { store } from "./store";
import axios from "axios";
import HeaderComponent from './views/HeaderComponent.vue';
import 'bootstrap-icons/font/bootstrap-icons.css';
import PokedexComponent from "./components/PokedexComponent.vue";
// import MainComponent from "./views/MainComponent.vue";
// import FooterComponent from './components/FooterComponent.vue';
export default {
  name: 'App',
  data() {
    return {
      store,
      pokemonSelected: ""
    }
  },
  created() {
      
    },
  methods: {
    cercaPokemon(pokemon) {
      console.log('hgjgjgj', pokemon)
      axios.get('https://pokeapi.co/api/v2/pokemon/' + pokemon.toLowerCase()).then((res)=>{
        // console.log('this:', this)
        this.pokemonSelected = res.data
        console.log(this.pokemonSelected)
        // this.store.pokeArr = res.data ho cercato di fare funzionare il pokearr nello store per poterlo usare nella props della pokecard ma ancora qualcosa sfugge
        //this.store.pokeArr = res.data.game_indices da capire come mettere lì quel che mi serve (se devo realmente fare così)
        console.log('update', this.pokemonSelected)
        // console.log("verifica res", res)
      }).catch(err => {
        //alert con pokemon non trovato
        console.log('err: ', err)
        this.pokemonSelected = ""
      });
      // let pokeApi = this.store.pokeCall
      // if (this.store.userInput != "") {
      //   pokeApi += `${this.store.userInput}`;
      //   console.log(pokeApi)
      // }
    },
  },
  components: {
    HeaderComponent,
    // MainComponent,
    PokedexComponent
    // FooterComponent
  },
  mounted() {

  }
}
</script>

<template>
    <HeaderComponent/>
    <!-- <div class="wrapper">
      
    </div> -->
    <div class="container d-flex justify-content-center">
      <PokedexComponent :pokemon="pokemonSelected" @cercaPokemon="cercaPokemon"></PokedexComponent>
    </div>
      <!-- <MainComponent @pokeselect="cercaPokemon" @pokemonSelected="pokemonSelected" /> -->

  <!-- <RouterView /> -->
</template>

<style lang="scss" scoped>

</style>
