import React, { useState } from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';


function FormularioInicioSesion({ errores, callback }) {

    const [correo, setCorreo] = useState();
    const [contraseña, setContraseña] = useState();

    const sendForm = (e) => {
        e.preventDefault();
        callback({ correo, contraseña })
    }

    return (
        <Form onSubmit={sendForm}>
            <FormGroup >
                <Label for="correo">Correo electrónico</Label>
                <Input onChange={e => setCorreo(e.target.value)} id='correo' name='correo' type='email' required></Input>
            </FormGroup>
            <FormGroup >
                <Label for="password">Contraseña</Label>
                <Input onChange={e => setContraseña(e.target.value)} id='password' name='password' type='password' required></Input>
            </FormGroup>
            <div className='d-flex justify-content-end'>
                <button type='submit' className='btn btn-dark btn-block ' >Iniciar Sesión</button>
            </div>
        </Form>
    );
}

export { FormularioInicioSesion };