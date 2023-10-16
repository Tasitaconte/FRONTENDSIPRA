import React from 'react'
import { BoxArrowDown } from 'react-bootstrap-icons'
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import {
  cilBell,
  cilLockLocked,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { useSelector } from 'react-redux'
import { eliminarSesion } from '../../connections/accions/usuarioAccion'

const AppHeaderDropdown = () => {

  const cerrarSesion = () => {
    eliminarSesion()
  }

return (
  <CDropdown variant="nav-item">
    <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
      <CAvatar className='animate__animated animate__pulse' size="md" >
        <BoxArrowDown></BoxArrowDown>
      </CAvatar>
    </CDropdownToggle>
    <CDropdownMenu className="pt-0" placement="bottom-end">
      <CDropdownHeader className="bg-light fw-semibold py-2">Cuenta</CDropdownHeader>
      <CDropdownItem href="#" onClick={cerrarSesion }>
        <CIcon icon={cilLockLocked} className="me-2" />
        Cerrar Sesión
      </CDropdownItem>
      <CDropdownDivider />
    </CDropdownMenu>
  </CDropdown>
)
}

export default AppHeaderDropdown
