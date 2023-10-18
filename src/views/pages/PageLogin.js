import React, { useEffect, useState } from 'react';
import { Alert, Card, CardBody } from 'reactstrap';
import { FormularioInicioSesion } from '../../components/Formularios/FormularioInicioSesion';
import { autenticion } from '../../connections/accions/usuarioAccion';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const imagenes = require.context('../../assets/imagenes', true)

function PageLogin() {

    const [errores, setErrores] = useState({});
    const conectado = useSelector(estado => estado.usuario.conectado);

    const navegar = useNavigate();
    const enviarAccion = useDispatch();

    useEffect(() => {
        if (conectado === true) navegar("/")
    })

    const [visible, setVisible] = useState(true);

    const onDismiss = () => setVisible(false);

    const login = ({ correo, contraseña }) => {
        const error = {};
        setErrores(error);
        enviarAccion(autenticion({ correo, contraseña }))
            .then(response => navegar("/"))
            .catch(err => {
                console.error(err);
                setErrores({ ingresar: "Credenciales Incorrectas" })
                setVisible(true)
            })
    }

    return (

        <div className='m-0 vh-100 row justify-content-center align-items-center '>

            <div className='col-auto'>
                <img className='mb-4 mx-auto d-block img-fluid' width={200} src={imagenes('./Logo_of_FESC_University.png')} />
                {errores.ingresar &&
                    <Alert isOpen={visible} toggle={onDismiss} color='danger' className='' closeAriaLabel='true' >{errores.ingresar}</Alert>
                }
                <Card className='rounded-3 border-0 shadow' style={{ width: 450 }}>
                    <CardBody>
                        <FormularioInicioSesion errores={errores} callback={login} />
                    </CardBody>
                </Card>
            </div>
        </div>
    );
}

export { PageLogin };
