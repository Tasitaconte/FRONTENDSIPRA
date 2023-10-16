import { configureStore } from "@reduxjs/toolkit"
import sidebarReducer from './sliceReducers'
import usuarioReducer from './SliceReducersUsuario'



const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    usuario: usuarioReducer
  }
})


export { store }
