//import global from './global'

/**
 *  Metodo usado para hacer peticiones get
 * @param endPoint ruta a la cual apuntar
 * @param callback funcion a ejecutar despues de que termine la peticion
 */

 //callback= corresponde a una función que se ejecuta depués de realizar la petición
 //endPoint= corresponde a la parte final de la uRL de la ruta
 //header= corresponde al método http


export async function getRequest(endPoint, callback) {
    const header= {
        method: "GET",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
    };
    await request(endPoint, header, callback);
}

export async function postRequest(
    endPoint,
    data,
    callback
) {
    const header = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',            
        },
    };
    await request(endPoint, header, callback);
}


export async function postRequestRegister(
    endPoint,
    data,
    callback
) {
    console.log(data)
    const header = {
        method: "POST",
        body: data,
        headers: {
            "Accept": "application/json",
            //'content-type': 'multipart/form-data',
            //'content-type': 'application/x-www-form-urlencoded',            
            //'Content-Type': 'application/json',          
        },
    };
    await request(endPoint, header, callback);
}

export async function putRequest(
    endPoint,
    data,
    callback
) {
    const header = {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json; charset=utf-8",
        },
    };
    await request(endPoint, header, callback);
}

async function request(endPoint, header, callback) {
    //console.log(global.api + endPoint)
    try {
        const response = await fetch(endPoint, header);
        const responseJson = await response.json();        
        await callback(responseJson);
    } catch (error) {
        console.error(error.name + '-error-hdr: ' +error.message)        
    }    
}