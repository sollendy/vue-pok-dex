<script>
//import { RouterLink, RouterView } from 'vue-router';
import { store } from "./store";
import axios from "axios";
import HeaderComponent from './views/HeaderComponent.vue';
import MainComponent from "./views/MainComponent.vue";
import 'bootstrap-icons/font/bootstrap-icons.css';
// import FooterComponent from './components/FooterComponent.vue';
export default {
  name: 'App',
  data() {
    return {
      store,
    }
  },
  created() {
      axios.get('https://pokeapi.co/api/v2/pokemon/cyndaquil').then((res)=>{
        this.store.pokemon = res.data;
        console.log(res)
      });
    },
  methods: {
    cercaPokemon() {
      let pokeApi = this.store.pokeCall
      if (this.store.userInput != "") {
        pokeApi += `${this.store.userInput}`;
        console.log(pokeApi)
      }
    },
  },
  components: {
    HeaderComponent,
    MainComponent,
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
    <MainComponent/>

  <!-- <RouterView /> -->
</template>

<style lang="scss" scoped>

</style>
