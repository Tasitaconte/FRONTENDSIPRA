const API_URL="https://localhost:7150"

export const SIGNUP_POST_ENDPOINT= API_URL+"/usuario";
export const SIGIN_POST_ENDPOINT= API_URL+"/usuario/login"
export const MISPARTIDOS_GET_ENDPOINT= API_URL+"/usuario/mispartidos";
export const CREARPARTIDO_POST_ENDPOINT= API_URL+"/partido";
export const PARTIDOSCREADOS_GET_ENDPOINT= API_URL+"/partido";
export const PARTIDODETALLE_GET_ENDPOINT= API_URL+"/partido";
export const ELIMINARPARTIDO_DELETE_ENDPOINT= API_URL+"/partido";
export const ACTUALIZARPARTIDO_PUT_ENDPOINT= API_URL+"/partido";

export const LOGIN_POST_ENDPOINT = API_URL+"/login";
export const CREARUSUARIO_POST_ENPOINT = API_URL+"/usuario"
export const CREARUSUARIOEXTENSION_POST_ENDPOINT =API_URL+"/crear/extension";
export const CREARUSUARIODOCENTE_POST_ENDPOINT = API_URL+"/crear/docente";
export const CREARUSUARIOESTUDIANTE_POST_ENDPOINT = API_URL+"/crear/estudiante";