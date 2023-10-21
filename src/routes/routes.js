import React from 'react'
const PageIndex = React.lazy(() => import('../views/pages/PageIndex'))
const Usuario = React.lazy(() => import('../views/herramientas/crear/usuario/Usuario'))
const Formularios = React.lazy(() => import('../views/herramientas/Cargar/formularios/Formularios'))
const Habilitar = React.lazy(() => import('../views/herramientas/formularios/habilitar/Habilitar'))

const routes = [
  { path: '/', exact: true, name: 'Inicio', element: PageIndex },
  { path: '/crear/usuario', name: 'Usuario', element: Usuario },
  { path: '/cargar/formularios', name: 'Formularios', element: Formularios },
  { path: '/formularios/habilitar', name: 'Formularios', element: Habilitar },
]

export default routes
