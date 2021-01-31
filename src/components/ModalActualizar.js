import React, {useState} from 'react';
import Modal from 'react-modal';
import Formulario from './Formulario';
import '../index.css';


function ModalActualizar ({isOpen, editarRegistro, fiscalia, guardarFiscalia, fiscalias, guardarFiscalias}){


    const [modalIsOpen,setModalIsOpen] = useState(isOpen);

 

    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false)
        editarRegistro(false)
        guardarFiscalia({
            Nombre: '',
            Ubicacion:''
        })
    }
    
    const titulo = 'Modificar Fiscalia'

    return(
        <>
        <div className="container">
            {/*<button className="btn-add" onClick={setModalIsOpenToTrue}>+</button>*/}

            <Modal isOpen={modalIsOpen}
                appElement={document.getElementById('root')}
            >
                <button  onClick={setModalIsOpenToFalse}>x</button>
                <Formulario
                    titulo={titulo}
                    editar={true}
                    fiscalia={fiscalia}
                    fiscalias = {fiscalias}

                    setModalIsOpen = {setModalIsOpen}
                    guardarFiscalias={guardarFiscalias}
                    guardarFiscalia={guardarFiscalia}
                    editarRegistro={editarRegistro}
                />
            </Modal>
        </div>
            
        </>
    )
}
export default ModalActualizar;