
import { CButton, CCol, CFormInput, CFormSelect, CRow } from '@coreui/react';
import React, { useState } from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';


function FormularioCreacionDocente({ errores, callback }) {

    const [nombres, setNombre] = useState();
    const [apellidos, setApellidos] = useState();
    const [correo, setCorreo] = useState();
    const [numero_identificacion, setNumeroIdentificacion] = useState();
    const [carrera, setCarrera] = useState();

    const sendForm = (e) => {
        e.preventDefault();
        callback({ nombres, apellidos, correo, numero_identificacion, carrera })
    }

    return (
        <Form id='formularioCreacionDocente' onSubmit={sendForm}>
            <CRow>
                <CCol xs>
                    <CFormInput onChange={e => setNombre(e.target.value)} name='nombres' id='nombres' type='text' placeholder="Nombres" aria-label="Nombres" required />
                </CCol>
                <CCol xs>
                    <CFormInput onChange={e => setApellidos(e.target.value)} name='Apellidos' id='Apellidos' type='text' placeholder="Apellidos" aria-label="Apellidos" required />
                </CCol>
            </CRow>
            <CRow className='mt-2'>
                <CCol xs>
                    <CFormInput onChange={e => setCorreo(e.target.value)} name='Correo' id='Correo' type='email' placeholder="Correo" aria-label="Correo Electronico" required />
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

                <CCol xs="auto">
                    <CButton color='success' type="submit">Guardar</CButton>
                </CCol>
            </CRow>
        </Form>
    );
}

export { FormularioCreacionDocente };