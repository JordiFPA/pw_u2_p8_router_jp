import axios from 'axios';
const constultarRespuesta = async () => {
    const respuesta = axios.get("https://dog.ceo/api/breeds/image/random").then(r => r.data);
    return respuesta;
}
export const consultarRespuestaFachada = async () => {
    return await constultarRespuesta();
}
