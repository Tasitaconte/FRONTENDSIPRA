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

export const POST_AGREGAR_FORMULARIO_PDF = API_URL+"/agregar/formulario/pdf";
export const GET_DESCARGAR_FORMULARIO_PDF = API_URL+"/descargar/formulario/pdf/{idFormulario}";
export const POST_SUBIR_FORMULARIO_ESTUDIANTE_PDF = API_URL+"/subir/estudiante/formulario/pdf/{IdFormulario}";
export const DELETE_FORMULARIO_BASE_PDF = API_URL+"/eliminar/formulario/pdf/";
export const GET_FORMULARIO_CARGADOS_ESTUDIANTE_PDF = API_URL+"/formulario/all/estudiante";
export const GET_FORMULARIO_ALL_PDF = API_URL+"/formulario/all";
