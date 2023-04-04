import * as ActionTypes from "./ActionTypes";

export const Announcements = (state = {
    isLoading: true,
    errMess: null,
    announcements: []
}, action) => {
switch(action.type){
    case ActionTypes.ADD_ANNOUNCEMENTS:
        return { ...state, isLoading: false, errMess: null, announcements: action.payload }

    case ActionTypes.ANNOUNCEMENT_LOADING:
        return { ...state, isLoading: true, errMess: null, announcements: [] }
    
    case ActionTypes.ANNOUNCEMENT_FAILED:
            return{...state, isLoading: false, errMess:action.payload, announcements: []}

    case ActionTypes.ADD_ANNOUNCEMENT:
        var announcement = action.payload;
        return {...state, announcements: state.announcements.concat(announcement) };

    default:
        return state;
}
}