import React from 'react'
import CIcon from '@coreui/icons-react'

import { cilChevronCircleRightAlt, cilPuzzle } from '@coreui/icons'

import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'
import jwtDecode from 'jwt-decode';

let token = localStorage.token

let decodificado;

if (token != undefined) decodificado = jwtDecode(token);

const getSideBarNav = () => {

  let sidebarnav;

  if (decodificado == undefined) {
    return [];
  }

  let rol = decodificado.rol
  console.log(rol);
  switch (rol) {
    case "1":
      sidebarnav = [
        {
          component: CNavTitle,
          name: 'Herramientas Sipra Extension',
        },
        {
          component: CNavGroup,
          name: 'Herramientas',
          to: '/herramientas',
          icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
          items: [
            {
              component: CNavItem,
              name: ' Crear Usuario',
              to: '/crear/usuario',
              icon: <CIcon icon={cilChevronCircleRightAlt} />
            },
            {
              component: CNavItem,
              name: 'Cargar Formulario',
              to: '/agregar/formulario',
              icon: <CIcon icon={cilChevronCircleRightAlt} />
            },
          ],
        },
      ]
      break;
    case "2":
      sidebarnav = [
        {
          component: CNavTitle,
          name: 'Herramientas Sipra Docente'
        },
        {
          component: CNavGroup,
          name: 'Herramientas',
          to: '/herramientas',
          icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
          items: [
            {
              component: CNavItem,
              name: 'Habilitar Formularios',
              to: '/formularios/habilitar',
              icon: <CIcon icon={cilChevronCircleRightAlt} />
            },
          ]
        },
      ]
      break;
    case "3":
      sidebarnav = [
        {
          component: CNavTitle,
          name: 'Herramientas Sipra Docente'
        },
        {
          component: CNavGroup,
          name: 'Herramientas',
          to: '/herramientas',
          icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
          items: [
            {
              component: CNavItem,
              name: 'Rellenar Formularios',
              to: '/cargar/formularios',
              icon: <CIcon icon={cilChevronCircleRightAlt} />
            },
          ]
        },
      ]
      break;
    default:
      break;
  }

  return sidebarnav;
}

const sidebarnav = getSideBarNav();

export default sidebarnav;