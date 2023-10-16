import React from 'react'
const PageIndex= React.lazy(()=> import('../views/pages/PageIndex'))
const Usuario = React.lazy(() => import('../views/herramientas/crear/usuario/Usuario'))

const routes = [
  { path: '/', exact: true, name: 'Inicio', element: PageIndex},
  { path: '/crear/usuario', name: 'Usuario', element: Usuario }
]

export default routes
