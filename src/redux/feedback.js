import * as ActionTypes from "./ActionTypes";

export const InitialFeedback = {
    firstname:'',
    lastname:'',
    telnum:'',
    email:'',
    agree:false,
    contactType:'Contact Number',
    message:''
}

export const Feedbacks = (state = {
    isLoading: true,
    errMess: null,
    feedbacks:[]
}, action) => {
    switch (action.type){
        
        case ActionTypes.ADD_FEEDBACKS:
            return{...state, isLoading: false, errMess: null, feedbacks:action.payload}

        case ActionTypes.FEEDBACK_LOADING:
            return{...state, isLoading:true, errMess: null, feedbacks:[]}

        case ActionTypes.FEEDBACK_FAILED:
            return{...state, isLoading: false, errMess:action.payload, feedbacks:[]}
        default:
            return state;
    }
}