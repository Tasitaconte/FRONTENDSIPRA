// import { useState, useEffect } from "react"
// import axios from "axios"
// import { PARTIDOSCREADOS_GET_ENDPOINT } from "../../connections/helpers/endpoints";
import { CContainer, CRow, CCol } from '@coreui/react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


const PageIndex = () => {


    const conectado = useSelector(estado => estado.usuario.conectado);
    const navegar = useNavigate();

    useEffect(() => {
        if (conectado === false) {
            navegar("/login")
        }
    })

    return (
        <CContainer className="mt-3 mb-3">
            <CRow className="justify-content-md-center">
                <CCol sm="12" md="8" lg="6">
                    <h3 className="text-center">BIENVENIDO</h3>
                    <p>Sipra es un software para la gestion de estudiantes en practicas empresariales</p>

                </CCol>
            </CRow>
        </CContainer >
    )
}

export default PageIndex;

