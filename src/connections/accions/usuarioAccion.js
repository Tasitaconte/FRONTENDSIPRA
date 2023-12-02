import axios from "axios";
import { setAutenticacionToken } from "../helpers/token";
import { usuario } from "../../states/SliceReducersUsuario";
import jwtDecode from "jwt-decode";
import {
  CREARUSUARIODOCENTE_POST_ENDPOINT,
  CREARUSUARIOESTUDIANTE_POST_ENDPOINT,
  CREARUSUARIOEXTENSION_POST_ENDPOINT,
  CREARUSUARIO_POST_ENPOINT,
  LOGIN_POST_ENDPOINT,
} from "../helpers/endpoints";

export const autenticion = (credenciales) => (dispatch) => {
  return new Promise((resolver, rechazar) => {
    axios
      .post(LOGIN_POST_ENDPOINT, credenciales)
      .then((response) => {
        const autorizacion = response.data.messages[0];
        localStorage.setItem("token", autorizacion);
        setAutenticacionToken(autorizacion);
        const decodificado = jwtDecode(autorizacion);
        dispatch(usuario({ conectado: true, usuario: decodificado }));
        resolver(response);
      })
      .catch((err) => {
        console.log(err);
        rechazar(err);
      });
  });
};

export const eliminarSesion = () => {
  localStorage.removeItem("token");
  window.location.href = "/login";
};

export const crearUsuarioExtension = (usuarioEntidad) => {
  return new Promise((resolver, rechazar) => {
    axios
      .post(CREARUSUARIOEXTENSION_POST_ENDPOINT, usuarioEntidad)
      .then((response) => resolver(response.data))
      .catch((err) => rechazar(err));
  });
};
export const crearUsuarioEstudiante = (usuarioEntidad) => {
  return new Promise((resolver, rechazar) => {
    axios
      .post(CREARUSUARIOESTUDIANTE_POST_ENDPOINT, usuarioEntidad)
      .then((response) => resolver(response.data))
      .catch((err) => rechazar(err));
  });
};
export const crearUsuarioDocente = (usuarioEntidad) => {
  return new Promise((resolver, rechazar) => {
    axios
      .post(CREARUSUARIODOCENTE_POST_ENDPOINT, usuarioEntidad)
      .then((response) => resolver(response.data))
      .catch((err) => rechazar(err));
  });
};
export const agregarFormulario = (formularioEntidad) => {
  return new Promise((resolver, rechazar) => {
    axios
      .post(CREARUSUARIODOCENTE_POST_ENDPOINT, formularioEntidad, {
        headers: { "content-type": "multipart/form-data" },
      })
      .then((response) => resolver(response.data))
      .catch((err) => rechazar(err));
  });
};
