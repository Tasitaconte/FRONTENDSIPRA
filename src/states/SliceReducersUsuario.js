import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    conectado: false,
    usuario: {}
}

const sliceReducersUsuario = createSlice({
    name: 'extension',
    initialState,
    reducers: {
        usuario: (estado, accion) => {
            estado.conectado = accion.payload.conectado
            estado.usuario = accion.payload.usuario
        }
    }
})

export const { usuario } = sliceReducersUsuario.actions
export default sliceReducersUsuario.reducer