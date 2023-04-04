import * as ActionTypes from "./ActionTypes";

export const InitialPrayaana = {
    firstname:'',
    lastname:'',
    course:'',
    registerNumber:'',
    batch:'2021-2023',
    collegeName:'',  
    coding:false,
    quiz:false,
    gaming:false,
    treasure:false,
    email:'',
    phoneNumber:''
}

export const Prayaanas = (state = {
    isLoading: true,
    errMess: null,
    prayaanas:[]
}, action) => {
    switch (action.type){
        
        case ActionTypes.ADD_PRAYAANAS:
            return{...state, isLoading: false, errMess: null, prayaanas:action.payload}

        case ActionTypes.PRAYAANA_LOADING:
            return{...state, isLoading:true, errMess: null, prayaanas:[]}

        case ActionTypes.PRAYAANA_FAILED:
            return{...state, isLoading: false, errMess:action.payload, prayaanas:[]}
            
        default:
            return state;
    }
}