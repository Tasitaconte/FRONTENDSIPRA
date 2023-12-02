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
import { FormularioCargaFormularios } from '../../../../components/Formularios/FormularioCargaFormularios';

const Formularios = () => {

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

    if (usuario.rol != 3) {
      navegar("/")
    }
  })

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Cargar Formularios Rellenados</strong>
          </CCardHeader>
          <CCardBody>
           
            <FormularioCargaFormularios errores={errorCreacionDocente} callback={{}} cargado={false} nombre_formulario="Formulario F12" />

            <FormularioCargaFormularios errores={errorCreacionDocente} callback={{}} cargado={true} nombre_formulario="Segundo Formulario" />
          </CCardBody>
        </CCard>
      </CCol>


    </CRow>
  )
}

export default Formularios;
