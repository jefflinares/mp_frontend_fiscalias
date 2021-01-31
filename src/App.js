import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import ModalRegistro from './components/ModalRegistre';
import Table from './components/Table/Table';

import apiServices from './services/apiServices'

function App() {

  // state para creacion de la fiscalia
  const [fiscalia, guardarFiscalia] = useState({
    Nombre: '',
    Ubicacion: ''
  });


  // state para las fiscalias 
  const [ fiscalias, guardarFiscalias] = useState([]);


  // Buscar Catálogos

  useEffect(() => {
    
    const consultarFiscalias = async () => {
      let responseData = await apiServices.getAllFiscalias();
      guardarFiscalias(
        responseData
      )
    }
    
    consultarFiscalias();
   
  }, [guardarFiscalia])


  const actualizarTabla = async () => {
    console.log("se agrego una nueva supuestamente y se actualizara la tabla");
    
  }



  return (
    <Fragment >
      <Header 
        titulo='MINISTERIO PÚBLICO - FISCALÍAS'
      />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
              <div className="col m2 s12">
                <h6>Crear</h6>
                <ModalRegistro 
                  isOpen={false}
                  fiscalia={fiscalia}
                  fiscalias = {fiscalias}

                  guardarFiscalias={guardarFiscalias}
                  guardarFiscalia={guardarFiscalia}
                />
              </div>
              <div className="col m9 s12">
                  <Table 
                    fiscalia={fiscalia}
                    fiscalias={fiscalias}
                    guardarFiscalia={guardarFiscalia}
                    guardarFiscalias={guardarFiscalias}
                    actualizarTabla = {actualizarTabla}
                  />
              </div>
          </div>
        </div>
      </div>
      

    </Fragment>
    
  );
}

export default App;
