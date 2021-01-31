const getAllFiscalias = async () => {
    const url = 'http://localhost:5000/api/fiscalias';

    let data = {
        method: 'GET',
        headers: {
            'Accept':       'application/json',
            'Content-Type': 'application/json',
        }
      }

      return new Promise( (resolve, reject) => {
        fetch(url, data)
        .then( response => response.json())
        .then( (responseData) => {

            resolve(responseData);
          /*guardarFiscalias(
            responseData
          )
          */
          console.log("FISCALIAS: ",responseData);
        })
        .catch( ((error) => { reject(error); console.error(error);}));
      })
      
              //.then(json => dispatch(receiveAppos(json)));
        
  }  


const getFiscalia = async (id) => {
    const url = `http://localhost:5000/api/fiscalias/${id}`;

    let data = {
        method: 'GET',
        headers: {
            'Accept':       'application/json',
            'Content-Type': 'application/json',
        }
    }
    return new Promise((resolve, reject) => {
    fetch(url, data)
    .then( response => response.json())
    .then( (responseData) => {
        //console.log('respuesta de fiscalia',responseData);
        resolve(responseData);
    })
    .catch( ((error) => { 
        console.error(error);
        reject(error);
    }));
    }); 
}


const deleteFiscalia = async (id) => {
    const url = `http://localhost:5000/api/fiscalias/${id}`;

    let data = {
        method: 'DELETE',
        headers: {
            'Accept':       'application/json',
            'Content-Type': 'application/json',
        }
    }
    return new Promise((resolve, reject) => {
    fetch(url, data)
    .then( response => response.json())
    .then( (responseData) => {
        console.log('respuesta de eliminar fiscalia',responseData);
        resolve(responseData);
    })
    .catch( ((error) => { 
        console.error(error);
        reject(error);
    }));
    }); 
}



const updateFiscalia = async (fiscalia) => {
    console.log('Actualizar fiscalia: ',fiscalia)
    const url = `http://localhost:5000/api/fiscalias/`;

    let data = {
        method: 'PUT',
        headers: {
            'Accept':       'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(fiscalia)
    }
    return new Promise((resolve, reject) => {
    fetch(url, data)
    .then( response => response.json())
    .then( (responseData) => {
        console.log('respuesta de actualizar fiscalia',responseData);
        resolve(responseData);
    })
    .catch( ((error) => { 
        console.error(error);
        reject(error);
    }));
    }); 
}





module.exports = {
    getAllFiscalias: getAllFiscalias,
    getFiscalia: getFiscalia,
    deleteFiscalia: deleteFiscalia,
    updateFiscalia: updateFiscalia
} 
