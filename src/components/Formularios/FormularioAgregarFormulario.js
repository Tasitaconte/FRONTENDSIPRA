import {
  CButton,
  CCol,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CRow,
} from "@coreui/react";
import React, { useState } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";

function FormularioAgregarFormulario({ errores, callback }) {
  const [formulario, setFormulario] = useState();
  const [archivo, setArchivo] = useState();

  const sendForm = (e) => {
    e.preventDefault();

    const data = new FormData(
      document.getElementById("FormularioAgregarFormularios")
    );

    callback(data);
  };

  return (
    <Form id="FormularioAgregarFormularios" onSubmit={sendForm}>
      <CRow>
        <CCol sm={5}>
          <CFormInput
            onChange={(e) => setFormulario(e.target.value)}
            name="formulario"
            id="formulario"
            type="text"
            placeholder="Nombre del formulario"
            aria-label="Nombres"
            required
          />
        </CCol>
        <CCol sm={6}>
          <Input
            onChange={(e) => setArchivo(e.target.files[0])}
            name="archivo"
            id="archivo"
            type="file"
            placeholder="archivo"
            aria-label="Apellidos"
            required
          />
        </CCol>
        <CCol sm={1} className="mx-auto">
          <CButton color="success" type="submit">
            Guardar
          </CButton>
        </CCol>
      </CRow>
    </Form>
  );
}

export { FormularioAgregarFormulario };
