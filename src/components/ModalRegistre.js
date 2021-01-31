import React, {useState} from 'react';
import Modal from 'react-modal';
import Formulario from './Formulario';
import '../index.css';


function ModalRegistro ({fiscalia, guardarFiscalia, fiscalias, guardarFiscalias}){


    const [modalIsOpen,setModalIsOpen] = useState(false);

    const setModalIsOpenToTrue =()=>{
        setModalIsOpen(true)
    }

    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false)
    }
    
    const titulo = 'Registrar Fiscalia'

    return(
        <>
        <div className="container">
            <button className="btn-add" onClick={setModalIsOpenToTrue}>+</button>

            <Modal isOpen={modalIsOpen}
                appElement={document.getElementById('root')}
            >
                <button  onClick={setModalIsOpenToFalse}>x</button>
                <Formulario
                    titulo={titulo}
                    editar={false}
                    fiscalia={fiscalia}
                    fiscalias = {fiscalias}

                    setModalIsOpen = {setModalIsOpen}
                    guardarFiscalias={guardarFiscalias}
                    guardarFiscalia={guardarFiscalia}
                />
            </Modal>
        </div>
            
        </>
    )
}
export default ModalRegistro;