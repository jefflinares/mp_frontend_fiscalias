import React, {Fragment, useState, useEffect} from 'react';
import apiServices from '../services/apiServices';
//import { showMessage, hideMessage } from "react-native-flash-message";


const Formulario = ({titulo, editar, fiscalia, guardarFiscalia, fiscalias, guardarFiscalias, setModalIsOpen, editarRegistro}) => {

    // State para el formulario
   
    // state de erro
    const [error, guardarError ] = useState(false);


    const { Nombre, Ubicacion } = fiscalia;

    useEffect(() => {
        if(editar){
            console.log('Formulario se va a editar: ',fiscalia);
        }else{
            guardarFiscalia({
                Nombre:'',
                Ubicacion:''
            })
        }
    }, [])


    // funcion que coloca los elementos en el state

    const handleChange = e => {
        // actulaizar el state
        guardarFiscalia({
            ...fiscalia,
            [e.target.name]: e.target.value
        })
    }

    // Cuando el usuario envíe el formulario
    const handleSubmit = async (e) => {
        e.preventDefault();

        const isEmpty = (val) => {
            return val.trim() === '';
        }
        
        if(isEmpty(Nombre) || isEmpty(Ubicacion)){
            guardarError(true);
            return;
        }

        guardarError(false);


        if(editar){
            let actualizar = await apiServices.updateFiscalia(fiscalia);
            let responseData = await apiServices.getAllFiscalias();
            guardarFiscalias(
                responseData
            );
            console.log('Registro actualizado: ',actualizar);

            //regresar a false el state 
            editarRegistro(false);

            alert('Fiscalía Actualizada.');

        }else{

            // REGISTRAR EN LA BASE DE DATOS
            const insertData = async () => {
                const url = 'http://localhost:5000/api/fiscalias';

                let data = {
                    method: 'POST',
                    headers: {
                        'Accept':       'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                    Nombre: Nombre,
                    Ubicacion: Ubicacion
                    }),
                
                }
                let respuesta = await fetch(url, data)
                                .then( response => response.json())
                                .then( (responseData) => {
                                    console.log('respuesta',responseData);
                                    guardarFiscalias([
                                        ...fiscalias,
                                        responseData
                                    ])
                                    
                                })
                                .catch( ((error) => {console.error(error);}));
                                //.then(json => dispatch(receiveAppos(json)));
                console.log(respuesta);
            }
            insertData();
            alert('Fiscalía creada.');
        }

        //Cerrar el modal
        setModalIsOpen(false);

        // Reiniciar modal para registro
        guardarFiscalia({
            nombre:'',
            ubicacion:''
        })
    }

    return ( 
        <Fragment>
            <h4>{titulo}</h4>
            <br/>
            <br/>
            <form
                onSubmit={handleSubmit}
            >
                {
                    error ? 
                    <p className="error">Todos los campos son obligatorios</p> :
                    null
                }
                <div className="container">
                    <div className="row">
                        <div className="col m9 s12">
                            <div className="input-field col s12">
                                <input
                                    type="text"
                                    name="Nombre"
                                    id="Nombre"
                                    value={fiscalia && fiscalia.Nombre}
                                    onChange={handleChange }
                                />
                                <label htmlFor="Nombre">Nombre *</label>
                            </div>
                            
                        </div>
                    </div>
                    <div className="row">
                        <div className="col m9 s12">
                            <div className="input-field col s12">
                                <input
                                    type="text"
                                    name="Ubicacion"
                                    id="Ubicacion"
                                    value={fiscalia && fiscalia.Ubicacion}
                                    onChange={handleChange }
                                />
                                <label htmlFor="Ubicacion">Ubicación *</label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col m6 s12">
                            <div className="input-field col s6">
                                <input
                                    type="submit"
                                    value={editar?"Actualizar":"Registrar"}
                                    className="waves-effect waves-light btn-large btn-block green accent-4"
                                    onSubmit={handleSubmit}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                
            </form>    
        </Fragment>
        
    );
}
 
export default Formulario;