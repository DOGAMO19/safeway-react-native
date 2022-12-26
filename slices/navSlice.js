import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    origen: null, //El origen de la persona inicia en null
    destino: null, //El destino de la persona inicia en null  
    tiempoViaje: null //El tiempo del viaje inicia en null
}

export const navSlice = createSlice({
    name: 'navegacion', //Nombre del ojeto/slice
    initialState, //Toma el initialState previamente declarado
    reducers: { //Acciones que tendra el slice
        setOrigen: (state,action) => {
            state.origen = action.payload; //El estado del origen sera igual a la accion que se cargue
        },
        setDestino: (state,action) => {
            state.destino = action.payload; //El estado del destino sera igual a la accion que se cargue
        },
        setTiempoViaje: (state,action) => {
            state.tiempoViaje = action.payload; //El estado del tiempo de viaje sera igual a la accion que se cargue
        },
    },
});

export const { setOrigen, setDestino, setTiempoViaje } = navSlice.actions; //Exportamos las acciones que se pueden disparar

//Selectors (Tomar valores del state para usar en otros sitios del app)

export const selectOrigen = (state) => state.navegacion.origen; //Extrae el valor del origen del state del objeto navegacion
export const selectDestino = (state) => state.navegacion.destino; //Extrae el valor del destino del state del objeto navegacion
export const selectTiempoViaje = (state) => state.navegacion.tiempoViaje; //Extrae el valor del tiempo de viaje del state del objeto navegacion