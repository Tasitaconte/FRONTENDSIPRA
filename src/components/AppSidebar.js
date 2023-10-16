import React from 'react'
import { useSelector } from 'react-redux'
import { CSidebar, CSidebarBrand, CSidebarNav } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { sygnet } from '../assets/brand/sygnet'
import { AppSidebarNav } from './sidebar/AppSidebarNav'


import items from '../utils/sidebarnav'


const AppSidebar = () => {
  
  const sidebarShow = useSelector((estado) => estado.sidebar.sidebarShow)

  return (
    <CSidebar  
      position="fixed"
      visible={sidebarShow}
    >
      <CSidebarBrand className="d-none d-md-flex" to="/">
        <h1>SIPRA</h1>
      </CSidebarBrand>
      <CSidebarNav >
          <AppSidebarNav items={items} />
      </CSidebarNav>
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
