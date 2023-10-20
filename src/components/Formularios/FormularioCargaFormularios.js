import { CButton, CCard, CCardBody, CCardHeader, CCol, CFormInput, CInputGroup, CInputGroupText, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow } from '@coreui/react';
import React, { useState } from 'react';
import { ArrowUpCircle, Check, Check2Circle, CheckCircle, Circle, Icon1CircleFill } from 'react-bootstrap-icons';
import { Button, CardBody, Form, FormGroup, Input, Label } from 'reactstrap';


function FormularioIniciacionPracticas({ errores, callback, nombre_formulario, cargado }) {

    const [nombre_empresa, setNombreEmpresa] = useState();
    const [correo, setCorreo] = useState();
    const [representante_legal, setRepresentanteLegal] = useState();
    const [nit, setNit] = useState();
    const [modalVisible, setModalVisible] = useState(false)

    const sendForm = (e) => {
        e.preventDefault();
        console.log(nombre_formulario + "hola");
        setModalVisible(true)
        // callback({ correo, })
    }

    return (
        <>
            <Form className='mt-2' onSubmit={sendForm}>
                <CCard>
                    <CCardHeader>{nombre_formulario}</CCardHeader>
                    <CCardBody>
                        {cargado ? (
                            <h3>Formulario Cargado</h3>
                        ) : (
                            <>
                                <CInputGroup>
                                    <CFormInput type="file" id="formFile" placeholder="Default file input example" />
                                    <Button type="submit" color='success'><ArrowUpCircle></ArrowUpCircle></Button>
                                </CInputGroup>
                            </>
                        )}
                    </CCardBody>
                </CCard>
            </Form>

            <CModal
                alignment="center"
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                aria-labelledby="VerticallyCenteredExample"
            >
                <CModalHeader>
                    <CModalTitle id="VerticallyCenteredExample">Modal Confirmacion</CModalTitle>
                </CModalHeader>
                <CModalBody>
                  FORMULARIO CARGADO CORRECTAMENTE
                </CModalBody>
                <CModalFooter>
                    <CButton color="primary" onClick={() => setModalVisible(false)}>ACEPTAR</CButton>
                </CModalFooter>
            </CModal>
        </>
    );
}

export { FormularioIniciacionPracticas };