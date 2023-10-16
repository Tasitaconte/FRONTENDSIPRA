import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    sidebarShow: true,
}


const sliceReducers = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        sidebar: (estado, accion) => {
            estado.sidebarShow = accion.payload.sidebarShow
        }
    }
})

export const { sidebar } = sliceReducers.actions
export default sliceReducers.reducer