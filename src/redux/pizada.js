import * as ActionTypes from "./ActionTypes";

export const Pizadas = (state = {
    isLoading: true,
    errMess: null,
    pizadas: []
}, action) => {
switch(action.type){
    case ActionTypes.ADD_PIZADAS:
        return { ...state, isLoading: false, errMess: null, pizadas: action.payload }

    case ActionTypes.PIZADA_LOADING:
        return { ...state, isLoading: true, errMess: null, pizadas: [] }
    
    case ActionTypes.PIZADA_FAILED:
            return{...state, isLoading: false, errMess:action.payload, pizadas: []}

    case ActionTypes.ADD_PIZADA:
        var pizada = action.payload;
        return {...state, pizadas: state.pizadas.concat(pizada) };

    default:
        return state;
}
}