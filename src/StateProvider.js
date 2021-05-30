import {createContext, useContext, useReducer} from "react"

export const StateContext= createContext(); //esto es para poder rodear toda la aplicación con el flujo de datos
//Es decir como si fuera un circuito electrico y cada componente sería un elemento que se conecta a la corriente

/*
....componente1.....componte2.
.                            .
.                            .
componentex.                 .
.                            .
............componenteN.......


..............................
.                            .
.                            .
.         StateContext       .
.         (ContextApi)       .
.                            .
..............................
*/

export const StateProvider = ({reducer, initialState, children})=>(
    //Este es la herramienta para poder pasar los datos de un componente a otro
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
)

export const useStateValue= ()=> useContext(StateContext)//Es lo que pemite consumir desde cualquier componete los cambios de estado