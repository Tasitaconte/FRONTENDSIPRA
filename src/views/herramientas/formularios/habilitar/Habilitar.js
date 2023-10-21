import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormInput,
  CFormSelect,
  CRow
} from '@coreui/react'

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { FormularioHabilitar } from '../../../../components/Formularios/FormularioHabilitar';
const Habilitar = () => {

  const usuario = useSelector(estado => estado.usuario.usuario);
  const navegar = useNavigate();
  // const enviarAccion = useDispatch();
  const conectado = useSelector(estado => estado.usuario.conectado);



  const [errorCreacionDocente, setErrorCreacionDocente] = useState({});
  // const [errorCreacionEstudiante, setErrorCreacionEstudiante] = useState({});
  const [visible, setVisible] = useState(true);

  const onDismiss = () => setVisible(false);

  useEffect(() => {

    if (conectado === false) {
      return navegar("/login")
    }

    if (usuario.rol != 2) {
      navegar("/")
    }
  })

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Habilitar formularios para estudaintes practicas</strong>
          </CCardHeader>
          <CCardBody>
            <FormularioHabilitar errores={errorCreacionDocente} callback={{}} habilitado={false} nombre_formulario="Formulario F12" />

            <FormularioHabilitar errores={errorCreacionDocente} callback={{}} habilitado={true} nombre_formulario="Segundo Formulario" />
          </CCardBody>
        </CCard>
      </CCol>


    </CRow>
  )
}

export default Habilitar;
