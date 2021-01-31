import React, { useState } from 'react'
import Header from './Header';
import ModalActualizar from '../ModalActualizar';

import apiServices from '../../services/apiServices';

import './Table.css';

const Table = ({fiscalias, fiscalia, guardarFiscalia, guardarFiscalias,  actualizarTabla}) => {

    // State para evaluar si debo editar un registro
    const [editar, editarRegistro ] = useState(false);

    const handleEditRegister = async(Id) => {
        let fisc = await apiServices.getFiscalia(Id);
        console.log("Fiscalia a editar: ",fisc);
        fiscalia = fisc;
        guardarFiscalia(
            fiscalia
        )
        editarRegistro(true);

    }
    

    const handleDeleteRegister = async(Id) => {
        // ELIMINAR UN REGISTRO
        let responseData = await apiServices.deleteFiscalia(Id);
        guardarFiscalias(
            responseData
        )

        alert('Fiscalía Eliminada.');
    }

    
    return ( 
        <>
        {
            editar ? 
            <ModalActualizar 
                isOpen={editar}
                fiscalia={fiscalia}
                fiscalias = {fiscalias}
                editarRegistro = {editarRegistro}
                guardarFiscalias={guardarFiscalias}
                guardarFiscalia={guardarFiscalia}
            />
            : null
        }
        
        <div>
            <h5 id='title'>LISTADO DE FISCALIAS</h5>
            <table id='fiscalias'>
                <tbody>
                    <tr>
                        <Header />
                    </tr>
                    {
                        fiscalias && 
                        fiscalias.map((fiscalia, index) => {
                            const { Id, Nombre, Ubicacion } = fiscalia //destructuring
                            return (
                            <tr key={index}>
                                <td>{Id}</td>
                                <td>{Nombre}</td>
                                <td>{Ubicacion}</td>
                                <td>
                                    <div className="container">
                                        <div className="row">
                                            <div className="form-group name1 col-md-6">
                                                <input
                                                    type="submit"
                                                    value="Editar"
                                                    className="waves-effect waves-light btn-large btn-block blue accent-4"
                                                    onClick={() => handleEditRegister(Id)}
                                                />
                                            </div>

                                            <div className="form-group name2 col-md-6">
                                                <input
                                                    type="submit"
                                                    value="Eliminar"
                                                    className="waves-effect waves-light btn-large btn-block red accent-4"
                                                    onClick={() => handleDeleteRegister(Id)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
            
            
        </>
     );
}
 
export default Table;