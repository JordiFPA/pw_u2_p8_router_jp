<template>
  <div class="Container">
    <img v-if="mensaje" :src="mensaje" alt="No" />
    <div class="container-2">
      <h1 id="idPerrito">MIRA EL PERRITO DE TUS SUEÑOS</h1>
      <input
        v-model="perrito"
        type="text"
        name=""
        id=""
        placeholder="Escribe perrito y vele la mágia"
      />
      <h2>{{ estado }}</h2>
    </div>
  </div>
</template>

<script>
import { consultarRespuestaFachada } from "@/clients/DogClient.js";
export default {
  data() {
    return {
      perrito: null,
      mensaje: null,
      estado: null,
      esValida: false,
    };
  },
  watch: {
    perrito(valor, valorAnterior) {
      this.esValida = false;
      if (valor.toLowerCase() == "perrito") {
        this.esValida = true;
        console.log("Valor actual: " + valor);
        console.log("Valor anterior: " + valorAnterior);
        this.consumirApiPerrito();
        document.getElementById("idPerrito").innerHTML ="AQUÍ ESTA EL PERRITO DE TUS SUEÑOS";
      }
    },
  },
  methods: {
    async consumirApiPerrito() {
      this.estado = "Buscando perrito....";
      const respuesta = await consultarRespuestaFachada();
      console.log(respuesta.message);
      console.log(respuesta.status);
      console.log(respuesta);
      this.mensaje = respuesta.message;
      this.estado = respuesta.status;
    },
  },
};
</script>

<style scoped>
h1 {
  color: brown;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}
input {
  width: 270px;
  padding: 10px;
  color: black;
  font-size: 20px;
  border-radius: 10px;

}

input:focus {
  outline: none;
}

img {
  height: 100vh;
  width: 100vw;
  max-height: 100%;
  max-width: 100%;
  position: fixed;
  left: 0px;
  top: 0px;
}
.container-2 {
  position: relative;
} 
h2{
  color: black;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 25px;
  margin-top: 50px;
}
</style>