import {reactive} from 'vue';
export const store = reactive({
    pokeCall: "https://pokeapi.co/api/v2/pokemon/",
    pokemon: [],
    userInput: "",
});