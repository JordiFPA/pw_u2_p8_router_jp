<template>
  <h1>Selecciona el pokemon correcto</h1>
  <h1>{{ mensaje }}</h1>
  <PokemonImage
    v-if="pokemon"
    :PokemonId="pokemon.id"
    :mostrarImagen="mostrar"
    ref="miHijo1"
  />
  <PokemonOptions
    @seleccionado="recibioPadre($event)"
    :pokemons="vectorPokemon"
    ref="miHijo2"
  />
  <button @click="comunicarHijo()">Comunicar Hijo</button>
</template>
 
<script>
import PokemonOptions from "@/components/PokemonOptions.vue";
import PokemonImage from "@/components/PokemonImage.vue";
import { obtenerOpcionesFachada } from "@/clients/PokemonClient";
import { obtenerAleatorioFachada } from "@/clients/PokemonClient";
export default {
  data() {
    return {
      vectorPokemon: [],
      pokemon: null,
      mostrar: false,
      mensaje: null,
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
      //elegir un pokemon de los 4
      let pokemonCorrecto = obtenerAleatorioFachada(
        0,
        this.vectorPokemon.length
      ); //Tenemos el indice del pokemon correcto
      this.pokemon = this.vectorPokemon[pokemonCorrecto];
    },
    recibioPadre(id) {
      console.log("Mensaje recibido desde hijo");
      console.log(id);
      this.mostrar = true;
      console.log(this.mostrar);
      this.validarRespuesta(id.atributo1);
    },
    validarRespuesta(opcionSeleccionada) {
      if (opcionSeleccionada === this.pokemon.id) {
        this.mensaje = "Correcto";
      } else {
        this.mensaje = "Perdiste ñaño el correcto es: " + this.pokemon.nombre;
      }
    },
    comunicarHijo() {
      console.log(this.$refs.miHijo1.mensaje1);
      this.$refs.miHijo1.mensaje1 = "Nuevo mensaje hijo 1";
      console.log(this.$refs.miHijo2.mensaje2);
      this.$refs.miHijo2.mensaje2 = "Nuevo mensaje hijo 2"
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