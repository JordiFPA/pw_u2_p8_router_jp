<template>
  {{ mensaje1 }}
  <div class="image-container">
    <img
      :src="imagenFuente"
      alt="No se encuentra la imagen"
      class="ocultar"
      v-if="!mostrarImagen"
    />
    <img
      :src="imagenFuente"
      alt="No se encuentra la imagen"
      v-if="mostrarImagen"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      mensaje1: "mensaje1",
    };
  },
  props: {
    PokemonId: {
      type: Number,
      required: true,
    },
    mostrarImagen: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  computed: {
    imagenFuente() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.PokemonId}.svg`;
    },
  },
};
</script>

<style scoped>
img {
  height: 200px;
  right: 32%;
}
.ocultar {
  filter: brightness(0);
}
.image-container {
  height: 250px;
}
</style>