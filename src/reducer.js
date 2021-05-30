export const initialState={
    cesta: []
}

export const actionTypes={
    ADD_TO_CESTA: "ADD_TO_CESTA",
    REMOVE_ITEM: "REMOVE_ITEM",
}

export const getPrecioTotal =(cesta)=>{
    //funcion de javascript reduce que se usa para acumular valores de un array
    return cesta?.reduce((acumulador, vrActual)=>vrActual.precio + acumulador ,0)
    //acumulador: estará sumando cada precio que encuentre identificado en el item
    //item.precio: es el valor del producto que se ha agregado a la cesta y lo que envía el backend al front
    //0= que empiece a contar desde el primer item agregado
}


const reducer=(state, action)=>{
    // console.log(action.item)
    switch(action.type) {
        case "ADD_TO_CESTA":
            return {
                ...state,
                cesta: [...state.cesta, action.item],
            }
        case "REMOVE_ITEM":
            //para determinar cual es el item a eliminar
           const index= state.cesta.findIndex(cestaItem=> cestaItem.id=== action.id)
           
           //hace una copia de la cesta
           let newCesta= [...state.cesta]

           if (index>=0) {
               //si encuentra el item en la cesta entonces...
               newCesta.splice(index,1)
               //splice= es método de javascript para array que encuentra el indice (index) y elimina 
               //los elementos que se indique a partir de ese indice para el caso 1.
           }else{
               console.log("No se puede eliminar producto")
           }
            return {
                ...state,
                cesta: newCesta,
            }
        default: return state
            
    } 
}

export default reducer