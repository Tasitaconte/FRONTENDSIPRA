
import { CButton, CCol, CFormInput, CFormSelect, CRow } from '@coreui/react';
import React, { useState } from 'react';
import { Form } from 'reactstrap';


function FormularioCreacionEstudiante({ errores, callback }) {

    const [nombres, setNombre] = useState();
    const [apellidos, setApellidos] = useState();
    const [correo, setCorreo] = useState();
    const [tipo_identificacion, setTipoIdentificacion] = useState();
    const [numero_identificacion, setNumeroIdentificacion] = useState();
    const [carrera, setCarrera] = useState();
    const [docente_asignado, setDocenteAsignado] = useState();

    const sendForm = (e) => {
        e.preventDefault();
        callback({ nombres, apellidos, correo, tipo_identificacion, numero_identificacion, carrera, docente_asignado })
    }

    return (
        <Form id='formularioCreacionEstudiante' onSubmit={sendForm}>
            <CRow>
                <CCol xs>
                    <CFormInput onChange={e => setNombre(e.target.value)} name='nombres' type='text' id='nombres' placeholder="Nombres" aria-label="Nombres" required />
                </CCol>
                <CCol xs>
                    <CFormInput onChange={e => setApellidos(e.target.value)} name='Apellidos' type='text' id='Apellidos' placeholder="Apellidos" aria-label="Apellidos" required />
                </CCol>
            </CRow>
            <CRow className='mt-2'>
                <CCol xs>
                    <CFormInput onChange={e => setCorreo(e.target.value)} name='Correo' type='email' id='Correo' placeholder="Correo" aria-label="Correo Electronico" required />
                </CCol>

                <CCol>
                    <CFormSelect onChange={e => setTipoIdentificacion(e.target.value)} id='tipo_identificacion' name='tipo_identificacion'>
                        <option>Tipo Identificacion</option>
                        <option value="1">C.C</option>
                        <option value="2">T.I</option>
                    </CFormSelect>
                </CCol>

                <CCol xs>
                    <CFormInput onChange={e => setNumeroIdentificacion(e.target.value)} name='numero_identificacion' type='text' id='numero_identificacion' placeholder="Numero Identificacion" aria-label="Numero Identificacion" required />
                </CCol>
            </CRow>
            <CRow className='mt-2'>

                <CCol xs>
                    <CFormSelect onChange={e => setCarrera(e.target.value)} id="carrera" name="carrera">
                        <option>Carrera</option>
                        <option value="1">Ingenieria de Software</option>
                        <option value="2">Diseño y Administración de Modas</option>
                        <option value="3">Diseño Grafico</option>
                        <option value="4">Gestión Logistica Empresarial</option>
                        <option value="5">Administración Turística y Hotelera</option>
                        <option value="6">Administración Negocios Internacionales</option>
                        <option value="7">Administración financiera</option>
                    </CFormSelect>
                </CCol>

                <CCol>
                    <CFormInput onChange={e => setDocenteAsignado(e.target.value)} list='docente' name='docente_asignado' id='docente_asignado' placeholder='Asignar Docente' required></CFormInput>
                    <datalist id='docente'>
                        <option value="Ejemplo 1" ></option>
                        <option value="Ejemplo 2" ></option>
                    </datalist>
                </CCol>
                <CCol xs="auto">
                    <CButton color='success' type="submit">Guardar</CButton>
                </CCol>
            </CRow>
        </Form>
    );
}

export { FormularioCreacionEstudiante };