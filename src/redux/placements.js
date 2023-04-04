import * as ActionTypes from './ActionTypes'

export const Placements = (state = {
    isLoading: true,
    errMess: null,
    placements:[]
}, action) => {
    switch (action.type){
        
        case ActionTypes.ADD_PLACEMENTS:
            return{...state, isLoading: false, errMess: null, placements:action.payload}

        case ActionTypes.PLACEMENTS_LOADING:
            return{...state, isLoading:true, errMess: null, placements:[]}

        case ActionTypes.PLACEMENTS_FAILED:
            return{...state, isLoading: false, errMess:action.payload, placements:[]}
        default:
            return state;
    }
}