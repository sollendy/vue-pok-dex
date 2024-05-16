<script>
//import { RouterLink, RouterView } from 'vue-router';
import HeaderComponent from './views/HeaderComponent.vue';
import MainComponent from "./views/MainComponent.vue";
import 'bootstrap-icons/font/bootstrap-icons.css';
// import FooterComponent from './components/FooterComponent.vue';
export default {
  name: 'App',
  data() {
    return {

    }
  },
  methods: {

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
