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
import { FormularioCreacionDocente } from '../../../../components/Formularios/FormularioCreacionDocente';
import { FormularioCreacionEstudiante } from '../../../../components/Formularios/FormularioCreacionEstudiante';
import { autenticion, crearUsuarioDocente, crearUsuarioEstudiante } from '../../../../connections/accions/usuarioAccion';
import { Alert } from 'reactstrap';

const Usuario = () => {

  const usuario = useSelector(estado => estado.usuario.usuario);
  const navegar = useNavigate();
  const enviarAccion = useDispatch();
  const conectado = useSelector(estado => estado.usuario.conectado);



  const [errorCreacionDocente, setErrorCreacionDocente] = useState({});
  const [errorCreacionEstudiante, setErrorCreacionEstudiante] = useState({});
  const [visible, setVisible] = useState(true);

  const onDismiss = () => setVisible(false);

  useEffect(() => {

    if (conectado === false) {
      return  navegar("/login")
    }

    if (usuario.rol != 1) {
      navegar("/")
    }
  })

  const FormularioDocente = ({ nombres, apellidos, correo, numero_identificacion, carrera }) => {
    const error = {};
    setErrorCreacionDocente(error);
    enviarAccion(crearUsuarioEstudiante({ nombres, apellidos, correo, numero_identificacion, carrera }))
      .then(response => navegar("/"))
      .catch(err => {
        console.error(err);
        setErrorCreacionDocente({ ingresar: "Credenciales Incorrectas" })
        setVisible(true)
      })
  }

  const FormularioEstudiante = ({ nombres, apellidos, correo, tipo_identificacion, numero_identificacion, carrera, docente_asignado }) => {
    const error = {};
    setErrorCreacionEstudiante(error);
    enviarAccion(crearUsuarioDocente({ nombres, apellidos, correo, tipo_identificacion, numero_identificacion, carrera, docente_asignado }))
      .then(response => navegar("/"))
      .catch(err => {
        console.error(err);
        setErrorCreacionEstudiante({ ingresar: "Credenciales Incorrectas" })
        setVisible(true)
      })
  }


  return (
    <CRow>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Registrar Docente</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Rellene los campos correctamente
            </p>
            {errorCreacionDocente.ingresar &&
              <Alert isOpen={visible} toggle={onDismiss} color='danger' className='' closeAriaLabel='true' >asduhadsjhasj</Alert>
            }
            <FormularioCreacionDocente errores={errorCreacionDocente} callback={FormularioDocente}></FormularioCreacionDocente>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Registrar estudiante</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Rellene los campos correctamente
            </p>
            {errorCreacionEstudiante.ingresar &&
              <Alert isOpen={visible} toggle={onDismiss} color='danger' className='' closeAriaLabel='true' >asduhadsjhasj</Alert>
            }
            <FormularioCreacionEstudiante errores={errorCreacionEstudiante} callback={FormularioEstudiante}></FormularioCreacionEstudiante>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Informacion General</strong>
          </CCardHeader>
          <CCardBody>
            <ul>
              <li>La clave del usuario sera <span><b>1234</b></span></li>
              <li>Todos los campos deben ser rellenados</li>
              <li>En caso de algun fallo o error contactarse con el administrador</li>
            </ul>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Usuario;
