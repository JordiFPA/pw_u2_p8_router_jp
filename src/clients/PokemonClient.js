import axios from "axios";
const consumirPokemon = (id) => {
    const respuesta = axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(rpt => rpt.data);
    return respuesta; 
} 
const consumirPokemOFachada = async (id) => {
                return await consumirPokemon(id); 
}
