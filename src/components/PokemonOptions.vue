<template>
  <div class="options-container">
    <ul>
      <li v-for="pokemon in pokemons" :key="pokemon.id" > {{ pokemon.nombre }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    pokemons: {
      type: Array,
      requiered: true,
    },
  },
};
</script>
<style scoped >
ul {
  list-style-type: none;
}
li {
  background: white;
  border: solid blanchedalmond;
  border-radius: 5px;
  margin-bottom: 10px;
  width: 200px;
}
.options-container {
  display: flex;
  justify-content: center;
}
li:hover {
  background: rgb(250, 250, 159);
}
</style>