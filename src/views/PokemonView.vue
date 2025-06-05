<template>
  <h1>Selecciona el pokemon correcto</h1>
  <PokemonImage :PokemonId="8" :mostrarImagen="true" />
  <PokemonOptions :pokemons="vectorPokemon" />
</template>
 
<script>
import PokemonOptions from "@/components/PokemonOptions.vue";
import PokemonImage from "@/components/PokemonImage.vue";
import { obtenerOpcionesFachada } from "@/clients/PokemonClient";
export default {
  data() {
    return {
      vectorPokemon: [],
    };
  },
  components: {
    PokemonOptions,
    PokemonImage,
  },
  methods: {
    async iniciarJuego() {
      const opciones = await obtenerOpcionesFachada(4);
      this.vectorPokemon = opciones;
      console.log(this.vectorPokemon);
    },
  },
  mounted() {
    this.iniciarJuego();
  },
};
</script>
<style>
    h1 {
      padding-bottom: 50px;
    }
</style>