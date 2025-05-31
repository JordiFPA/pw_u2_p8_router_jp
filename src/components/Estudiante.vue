<template>
  <div class="container">
    <div class="formulario">
      <label for="id_nombre">Nombre</label>
      <input v-model="nuevoNombre" id="id_nombre" type="text" />

      <label for="id_apellido">Apellido</label>
      <input v-model="nuevoApellido" id="id_apellido" type="text" />

      <label for="id_cedula">C.I</label>
      <input v-model="nuevaCedula" id="id_cedula" type="number" />

      <label for="id_edad">Edad</label>
      <input v-model="nuevadaEdad" id="id_edad" type="number" />

      <label for="id_semestre">Semestre</label>
      <input v-model="nuevoSemestre" id="id_semestre" type="number" />

      <button v-on:click="agregarEstudiante()">Agregar</button>
      <button v-on:click="obtenerPathVariable()">Obtener</button>
    </div>
    <ul>
      <li v-for="{ nombre, apellido, cedula, edad, semestre } in lista" :key="nombre">
        Nombre:{{ nombre }} - apellido: {{ apellido }} - cedula: {{ cedula }} -
        edad {{ edad }} - semestre {{ semestre }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nuevoNombre: "nuevoNombre",
      nuevoApellido: "nuevoApellido",
      nuevaCedula: "nuevaCedula",
      nuevadaEdad: "nuevadaEdad",
      nuevoSemestre: "nuevoSemestre",

      lista: [
        {
          nombre: "Jordi",
          apellido: "Pila",
          cedula: "1752908085",
          edad: "22",
          semestre: "8"
        },
        {
          nombre: "Melany",
          apellido: "Caizapasto",
          cedula: "1452908075",
          edad: "24",
          semestre: "4"
        },
        {
          nombre: "Adriana",
          apellido: "Pila",
          cedula: "1456908085",
          edad: "25",
          semestre: "2"
        },
        {
          nombre: "Byron",
          apellido: "Flores",
          cedula: "1698908085",
          edad: "24",
          semestre: "6"
        },
        {
          nombre: "Michael",
          apellido: "Barrios",
          cedula: "1456908085",
          edad: "32",
          semestre: "10"
        },
        {
          nombre: "Maria",
          apellido: "Montero",
          cedula: "1789908085",
          edad: "19",
          semestre: "1"
        },
        {
          nombre: "Jordy",
          apellido: "Caiza",
          cedula: "02032908085",
          edad: "27",
          semestre: "9"
        }
      ]
    };
  },
  methods: {
    agregarEstudiante() {
      const nuevo = {
        nombre: this.nuevoNombre,
        apellido: this.nuevoApellido,
        cedula: this.nuevaCedula,
        edad: this.nuevadaEdad,
        semestre: this.nuevoSemestre
      };
      //this.lista.unshift(nuevo);
      this.lista.push(nuevo);
    },
    obtenerPathVariable() {
      const cedula = this.$route.params.cedula;
      console.log(cedula);
      const anio = this.$route.query.anio;
      const mes = this.$route.query.mes;
      console.log(anio, mes);
    }
  },
  beforeCreate() {
    //Se declara como si fuera un metodo
    console.log("beforeCreate");
  },
  created() {
    //Se declara como si fuera un metodo
    console.log("created");
  },
  beforeMount() {
    // mas usados, ya que ya esta visualmente en el DOM
    console.log("beforeMount");
  },
  mounted() {
    this.obtenerPathVariable()
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeUnmount() {},

  unmounted() {
    console.log("unmounted");
  }
};
</script>

<style scoped>
.container {
  background: #ffffff;
  border: 1px solid;
  border-radius: 12px;
  max-width: 870px;
  margin: 50px auto;
  padding: 30px;
}

label {
  display: block;
  color: #333;
  text-align: left;
  padding-left: 2px;
}
input {
  background: #4e91f9;
  color: #ffffff;
  width: 96%;
  border-radius: 8px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  padding: 10px 15px;
  font-size: 18px;
}

button {
  margin-top: 25px;
  background-color: #4e91f9;
  color: #fff;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-size: 20px;
  cursor: pointer;
  width: 150px;
}

ul {
  list-style: none;
  margin-top: 50px;
}
li {
  background: #e6ecf3;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 15px;
  color: #333;
  font-size: 20px;
}
</style>