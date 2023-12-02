import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CContainer,
  CModal,
  CRow,
} from "@coreui/react";
import React, { useState } from "react";
import {
  FilePdf,
  FilePdfFill,
  PencilSquare,
  Trash,
} from "react-bootstrap-icons";

import { Button, Container, Form } from "reactstrap";

const CardFormularios = ({
  errores,
  eliminar,
  editar,
  formulario,
  callback,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const sendForm = (e) => {
    e.preventDefault();
    setModalVisible(true);
  };

  const setPdf = (archivo) => {
    const binaryData = atob(archivo);
    const arrayBuffer = new ArrayBuffer(binaryData.length);
    const uint8Array = new Uint8Array(arrayBuffer);

    for (let i = 0; i < binaryData.length; i++) {
      uint8Array[i] = binaryData.charCodeAt(i);
    }

    const blob = new Blob([arrayBuffer], { type: "application/pdf" });
    console.log(URL.createObjectURL(blob));
    return URL.createObjectURL(blob);
  };

  const eliminarId = (id) => {
    eliminar(id);
  };

  const editarId = (id) => {
    editar(id);
  };

  return (
    <CCol sm={4}>
      <CCard className="mt-2 mx-2">
        <CCardHeader className="">
          <Button
            className="btn btn-danger"
            onClick={(e) => {
              e.preventDefault();
              eliminarId(formulario.idFormulario);
            }}
          >
            <Trash></Trash>
          </Button>
        </CCardHeader>
        <CCardHeader className="">
          <h6>Nombre Formulario : {formulario.formulario1.toUpperCase()}</h6>
        </CCardHeader>
        <CCardBody>
          <CRow>
            <CCol sm={7}>
              <h1>Revisar Formulario</h1>
            </CCol>

            <CCol sm={4}>
              <div>
                <a
                  className=""
                  target="black"
                  href={setPdf(formulario.pdfContent)}
                >
                  <FilePdf size={80}></FilePdf>
                </a>
              </div>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </CCol>
  );
};

export { CardFormularios };
