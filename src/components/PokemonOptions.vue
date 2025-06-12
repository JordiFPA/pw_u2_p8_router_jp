<template>
  <div class="options-container">
    {{mensaje2}}
    <ul>
      <li @click="comunicarClick(pokemon.id)" v-for="pokemon in pokemons" :key="pokemon.id" > {{ pokemon.nombre }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      mensaje2: "Mensaje2"
    }
  },
  props: {
    pokemons: {
      type: Array,
      requiered: true,
    },
  }, 
  methods:{
    comunicarClick(id){ 
      const objetoEnviado = {
        atributo1: id,
        atributo2:"Jordi",
        atributo3: true,
      }
      this.$emit("seleccionado",objetoEnviado)

    }
  }
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