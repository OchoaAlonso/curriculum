const GET_DATA_REDUCER = (state = [], action) => {
    switch (action.type){    
    case "GET_DATA_PENDING": return state;
    case "GET_DATA_FULFILLED": return action.payload.data.success.notas;
    case "GET_DATA_REJECT": return state;
    default: return state;
}
/* pending-
applymyddleare- funciones en especifico
conbineReducers- los guarda
createStore- crea y guarda reducers
promice

*/
}
export {GET_DATA_REDUCER};