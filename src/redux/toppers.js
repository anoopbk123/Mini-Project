import * as ActionTypes from './ActionTypes'

export const Toppers = (state = {
    isLoading: true,
    errMess: null,
    toppers:[]
}, action) => {

    switch (action.type){
        case ActionTypes.ADD_TOPPERS:
            return{...state, isLoading: false, errMess: null, toppers:action.payload}

        case ActionTypes.TOPPERS_LOADING:
            return{...state, isLoading:true, errMess: null, toppers:[]}

        case ActionTypes.TOPPERS_FAILED:
            return{...state, isLoading: false, errMess:action.payload, toppers:[]}

        default:
            return state;
    }
}