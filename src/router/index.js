import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EstudianteView from "../views/EstudianteView.vue";
import HolaMundoView from '../views/HolaMundoView.vue';
import VehiculoView from "../views/VehiculoView.vue";

const routes = [ //Arreglo de rutas, donde cada una es un objeto, con 3 atribut 
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/estudiante/:cedula',
    name: 'estudianteView',
    component: EstudianteView
  },
  {
    path: '/holamundo',
    name: 'holamundoView',
    component: HolaMundoView
  },
  {
    path: '/vehiculo',
    name: 'vehiculoView',
    component: VehiculoView
  },


  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

  {
    path: '/contador/numeros',
    name: 'contadorView',
    component: () => import(/* webpackChunkName: "ContadorView" */ '../views/ContadorView.vue')
  },
  {
    path: '/perrito',
    name: 'perritoView',
    component: () => import(/* webpackChunkName: "Perrito" */ '../views/PerritoView.vue')
  }, 
   {
    path: '/taller/pregunta',
    name: 'preguntaView',
    component: () => import(/* webpackChunkName: "Perrito" */ '../views/PreguntaView.vue')
  },
  {
    path: '/pokemon',
    name: 'PokemonView',
    component: () => import(/* webpackChunkName: "Pokemon" */ '../views/PokemonView')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
