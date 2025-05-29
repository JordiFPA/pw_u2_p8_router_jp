<template>
  <div class="container">
    <div v-show="mostrar">
      <h1>Estudiante Guardado</h1>
    </div>
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

    <table border="1">
      <thead>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Cedula</th>
        <th>edad</th>
        <th>Semestre</th>
        <th>Ver</th>
      </thead>
      <tbody>
        <tr v-for="{ nombre, apellido, cedula, edad, semestre } in lista" :key="nombre">
          <td>{{nombre}}</td>
          <td>{{apellido}}</td>
          <td>{{cedula}}</td>
          <td>{{edad}}</td>
          <td>{{semestre}}</td>
          <td>
            <button id="Ver">Ver</button>
          </td>
        </tr>
      </tbody>
    </table>
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
      ],
      mostrar: false
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
      this.mostrar = true;
      setTimeout(() => {
        this.mostrar = false;
      }, 2000);
    }
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
table {
  margin: 50px auto;
  border-radius: 25px;
}
th {
  width: 100px;
  color: #4e91f9;
  border-radius: 15px;
}
tr {
  font-size: 15px;
  align-content: center;
}

#ver {
  margin-bottom: 25px;
}
</style>