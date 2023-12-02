import React, { useState } from "react";
import { CCard, CCardBody, CCardHeader, CCol, CRow } from "@coreui/react";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { FormularioAgregarFormulario } from "../../../../components/Formularios/FormularioAgregarFormulario";
import { Alert } from "bootstrap";

import axios from "axios";
import {
  DELETE_FORMULARIO_BASE_PDF,
  GET_FORMULARIO_ALL_PDF,
  POST_AGREGAR_FORMULARIO_PDF,
} from "../../../../connections/helpers/endpoints";
import { CardFormularios } from "../../../../components/Cards/CardFormularios";

const FormularioAgregar = () => {
  const navegar = useNavigate();
  const [FormulariosCargados, setFormulariosCargados] = useState([]);
  const [formu, setformu] = useState([]);
  const [errorAgregarFormulario, setErrorAgregarFormulario] = useState({});
  const [visible, setVisible] = useState(true);
  const onDismiss = () => setVisible(false);

  const obtenerFormularios = async () => {
    try {
      const response = await axios.get(GET_FORMULARIO_ALL_PDF);
      return response.data;
    } catch (error) {
      console.error("Error al obtener formularios:", error);
      throw error;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data = await obtenerFormularios();
        setFormulariosCargados(data);
      } catch (err) {
        // Maneja errores
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log(FormulariosCargados);
  }, [FormulariosCargados]); // Este efecto se ejecutará cuando FormulariosCargados cambie

  const FormularioAgregar = (entidadFormulario) => {
    const error = {};
    setErrorAgregarFormulario(error);
    axios
      .post(POST_AGREGAR_FORMULARIO_PDF, entidadFormulario)
      .then(async () => {
        const data = await obtenerFormularios();
        setFormulariosCargados(data);
      })
      .catch((err) => console.error(err));
  };

  const eliminar = (id) => {
    console.log(id);
    axios
      .delete(DELETE_FORMULARIO_BASE_PDF + id)
      .then(async (response) => {
        console.log(response);
        const data = await obtenerFormularios();
        setFormulariosCargados(data);
      })
      .catch((err) => console.error(err));
  };
  const editar = (id) => {
    console.log(id);
  };

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Ingresar Formulario</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Rellene los campos correctamente
            </p>
            {errorAgregarFormulario.ingresar && (
              <Alert
                isOpen={visible}
                toggle={onDismiss}
                color="danger"
                className=""
                closeAriaLabel="true"
              >
                asduhadsjhasj
              </Alert>
            )}
            <FormularioAgregarFormulario
              errores={errorAgregarFormulario}
              callback={FormularioAgregar}
            ></FormularioAgregarFormulario>
          </CCardBody>
        </CCard>
      </CCol>

      {FormulariosCargados.map((formulario, index) => {
        console.log(index);
        return (
          <CardFormularios
            key={index++}
            formulario={formulario}
            eliminar={eliminar}
            editar={editar}
            cargado={true}
          />
        );
      })}
    </CRow>
  );
};

export default FormularioAgregar;
