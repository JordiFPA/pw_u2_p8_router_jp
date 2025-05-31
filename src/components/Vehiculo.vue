<template>
  <div class="container">
    <h1>Formulario de carros</h1>
    <div class="formulario">
      <div v-show="mostrar">
        <h2>{{mensajeFinal}}</h2>
      </div>

      <p type="Modelo">
        <input type="text" name id="id_modelo" v-model="nuevoModelo" />
      </p>
      <span v-if="mensaje.modeloMensaje">El modelo es obligatorio</span>
      <p type="Marca">
        <input type="text" name id="id_marca" v-model="nuevaMarca" />
      </p>
      <span v-if="mensaje.marcaMensaje">La marca es obligatoria</span>
      <p type="Color">
        <input type="text" name id="id_color" v-model="nuevoColor" />
      </p>
      <span v-if="mensaje.colorMensaje">El color es obligatorio</span>
      <p type="Tipo">
        <input type="text" name id="id_Tipo" v-model="nuevoTipo" />
      </p>
      <span v-if="mensaje.tipoMensaje">El tipo es obligatorio</span>
      <p type="Placa">
        <input type="text" name id="id_Placa" v-model="nuevaPlaca" />
      </p>
      <span v-if="mensaje.placaMensaje">La placa es obligatoria</span>
      <div class="centrarBoton">
        <button v-on:click="agregarVehiculo()">Agregar</button>
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
          <tr v-for="{ modelo, marca, color, tipo, placa } in lista" :key="modelo">
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
      nuevoModelo: null,
      nuevaMarca: null,
      nuevoColor: null,
      nuevoTipo: null,
      nuevaPlaca: null,
      validarModelo: false,
      validarMarca: false,
      mensajeFinal: "",
      mensaje: {
        modeloMensaje: null,
        marcaMensaje: null,
        colorMensaje: null,
        tipoMensaje: null,
        placaMensaje: null
      },

      lista: [
        {
          modelo: "CX3",
          marca: "Mazda",
          color: "Plomo",
          tipo: "Sedan",
          placa: "Pda-3698s"
        }
      ],
      mostrar: false,
      completo: false
    };
  },
  methods: {
    agregarVehiculo() {
      if (this.validarEntradas() == true) {
        this.completo = true;
        setTimeout(() => {
          this.completo = false;
        }, 2000);

        const nuevoVehiculo = {
          modelo: this.nuevoModelo,
          marca: this.nuevaMarca,
          color: this.nuevoColor,
          tipo: this.nuevoTipo,
          placa: this.nuevaPlaca
        };
        this.lista.push(nuevoVehiculo);
        this.mostrar = true;
        setTimeout(() => {
          this.mostrar = false;
        }, 2000);
        this.limpiar();
        this.mostrar = true;
        this.mensajeFinal = "Vehículo agregado correctamente";
      }
    },
    limpiar() {
      this.nuevoModelo = "";
      this.nuevaMarca = "";
      this.nuevoColor = "";
      this.nuevoTipo = "";
      this.nuevaPlaca = "";
      this.mensaje.modeloMensaje = null;
      this.mensaje.marcaMensaje = null;
      this.mensaje.colorMensaje = null;
      this.mensaje.tipoMensaje = null;
      this.mensaje.placaMensaje = null;
    },

    validarEntradas() {
      try {
        let numero = 5;
        if (!this.nuevoModelo) {
          this.mensaje.modeloMensaje = "El modelo es obligatorio";
          numero--;
        } else {
          this.mensaje.modeloMensaje = null;
        }
        if (!this.nuevaMarca) {
          this.mensaje.marcaMensaje = "La marca es obligatoria";
          numero--;
        } else {
          this.mensaje.marcaMensaje = null;
        }
        if (!this.nuevoColor) {
          this.mensaje.colorMensaje = "El color es obligatorio";
          numero--;
        } else {
          this.mensaje.colorMensaje = null;
        }
        if (!this.nuevoTipo) {
          this.mensaje.tipoMensaje = "El tipo es obligatorio";
          numero--;
        } else {
          this.mensaje.tipoMensaje = null;
        }
        if (!this.nuevaPlaca) {
          this.mensaje.placaMensaje = "La placa es obligatoria";
          numero--;
        } else {
          this.mensaje.placaMensaje = null;
        }
        if (numero === 5) {
          return true;
        } else {
          return false;
        }
      } catch (error) {
        this.mostrar = true;
        this.mensajeFinal = "Error al agregar el vehículo: " + error.message;
        return false;
      }
    }
  }
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