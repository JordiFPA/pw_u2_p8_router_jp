<template>
  <div class="container">
    <h1>Formulario de carros</h1>
    <div class="formulario">
      <div v-show="mostrar">
        <h2>Auto Agregado Correctamente</h2>
      </div>
      <div v-show="completo">
        <h2 id="alerta">Complete todos los campos</h2>
        
      </div>

      <p type="Modelo">
        <input type="text" name="" id="id_modelo" v-model="nuevoModelo" />
      </p>
      <p type="Marca">
        <input type="text" name="" id="id_marca" v-model="nuevaMarca" />
      </p>
      <p type="Color">
        <input type="text" name="" id="id_color" v-model="nuevoColor" />
      </p>
      <p type="Tipo">
        <input type="text" name="" id="id_Tipo" v-model="nuevoTipo" />
      </p>
      <p type="Placa">
        <input type="text" name="" id="id_Placa" v-model="nuevaPlaca" />
      </p>
      <div class="centrarBoton">
        <button v-on:click="agregarVehiculo(), limpiar()">Agregar</button>
      </div>
    </div>

    <div class="Tabla">
      <table>
        <thead>
          <th>Modelo</th>
          <th>Marca</th>
          <th>Color</th>
          <th>Tipo</th>
          <th>Placa</th>
        </thead>
        <tbody>
          <tr
            v-for="{ modelo, marca, color, tipo, placa } in lista"
            :key="modelo"
          >
            <td>{{ modelo }}</td>
            <td>{{ marca }}</td>
            <td>{{ color }}</td>
            <td>{{ tipo }}</td>
            <td>{{ placa }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nuevoModelo: "",
      nuevaMarca: "",
      nuevoColor: "",
      nuevoTipo: "",
      nuevaPlaca: "",
      lista: [
        {
          modelo: "CX3",
          marca: "Mazda",
          color: "Plomo",
          tipo: "Sedan",
          placa: "Pda-3698s",
        },
      ],
      mostrar: false,
      completo: false,
    };
  },
  methods: {
    agregarVehiculo() {
      if (
        this.nuevoModelo === "" ||
        this.nuevaMarca === "" ||
        this.nuevoColor === "" ||
        this.nuevoTipo === "" ||
        this.nuevaPlaca === ""
      ) {
        this.completo= true;
        setTimeout(() => {
        this.completo = false;
       
      }, 2000);
        return;
      }
      const nuevoVehiculo = {
        modelo: this.nuevoModelo,
        marca: this.nuevaMarca,
        color: this.nuevoColor,
        tipo: this.nuevoTipo,
        placa: this.nuevaPlaca,
      };
      this.lista.push(nuevoVehiculo);
      this.mostrar = true;
      setTimeout(() => {
        this.mostrar = false;
       
      }, 2000);
    },
    limpiar() {
      this.nuevoModelo = "";
      this.nuevaMarca = "";
      this.nuevoColor = "";
      this.nuevoTipo = "";
      this.nuevaPlaca = "";
    },
  },
};
</script>

<style scoped>
body {
  background-color: #3d5c8e;
  font-family: Arial, sans-serif;
}
p::before {
  content: attr(type);
  display: block;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
}

.formulario {
  border-radius: 10px;
  border: solid rgb(3, 3, 40);
  background-color: #5f7292;
  padding: 30px 25px;
}

.centrarBoton {
  display: flex;
  justify-content: center;
  align-items: center;
}
button {
  margin-top: 20px;
}
table {
  margin-top: 50px;
}
h1 {
  background: #87919e;
  padding: 15px;
  border-radius: 10px;
  color: #f0f0f0;
  border: solid rgb(3, 3, 40);
}
h2 {
  color: white;
  text-align: center;
  font-size: 30px;
}
p {
  font-size: 25px;
  color: white;
}
input {
  margin-top: 10px;
  padding: 10px 40px;
  border: solid rgb(3, 3, 40);
  border-radius: 10px;
  background: #ecebeb;
  color: rgb(3, 3, 40);
  font-size: 25px;
  text-align: left;
}
th {
  background: #87919e;
  color: white;
  width: 200px;
  height: 50px;
  text-align: center;
  border: solid rgb(3, 3, 40);
  border-radius: 10px;
  font-size: 30px;
}
table {
  font-size: 25px;

  border-radius: 10px;
}

button {
  border: solid rgb(3, 3, 40);
  color: rgb(3, 3, 40);
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 25px;
}
td {
  background: #ffffff;
  color: rgb(3, 3, 40);
  border: solid rgb(3, 3, 40);
  font-size: 30px;
  text-align: center;
  border-radius: 10 px;
} 
#alerta {
  color: red;
  text-align: center;
  font-size: 30px;
}
</style>