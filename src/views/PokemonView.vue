<template>
<h1>SELECCIONA EL POKEMON CORRECTO</h1>
  <pokemon-image :PokemonId="8" :mostrarImagen="true"/>
  <pokemon-options />
</template>

<script>
import PokemonOptions from "@/components/PokemonOptions.vue";
import PokemonImage from "@/components/PokemonImage.vue";

export default {
  components: {
    PokemonOptions,
    PokemonImage,
  },
};
</script>

<style>
  h1{ 
    padding-bottom:50px ;
  }
</style>
