import jwtDecode from "jwt-decode";
import { store } from "../../states/store";
import { usuario } from "../../states/SliceReducersUsuario";
import axios from "axios";

export const setAutenticacionToken = (token) => {
    (token) ? axios.defaults.headers.common['Authorization'] = `Bearer ${token}` :
        delete axios.defaults.headers.common['Authorization'];
}

export const getAutenticacionToken = () => {
    let token = localStorage.token

    if (token) {
        setAutenticacionToken(token);
        const decodificado = jwtDecode(token);
        store.dispatch(usuario({ usuario: decodificado, conectado: true }))
        const tiempoActual = Math.floor(Date.now() / 1000);
        if (decodificado.exp < tiempoActual) {
            window.location.href = "/login"
        }
    }
}