import {reactive} from 'vue';
export const store = reactive({
    pokéCall: "https://pokeapi.co/api/v2/pokemon/",
    pokémon: [],
    userInput: "",
});