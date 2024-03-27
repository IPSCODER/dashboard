import * as types from "../actions/actionType"

const initialState = {
    comfirmBtn:null,
    ordColor:'#1abc9c',
    paginationData:[],
    ham :false,
    user:'',
    isLoading:true
}



export const funReducer = (state=initialState,action) =>{
    switch(action.type){
        case types.COMFIRM_MSG:
            return {
                ...state,
                comfirmBtn:action.payload,
                
            };
            case types.ORD_COLOR:
            return {
                ...state,
                ordColor:action.payload
            };
            case types.PAGINATION_DATA:
            return {
                ...state,
                paginationData:action.payload
            };
            case types.HAM:
            return {
                ...state,
                ham: !state.ham
            };
            case types.USER:
            return {
                ...state,
                user:action.payload
            };
            case types.LOADING:
            return {
                ...state,
                isLoading:action.payload
            };
            default:
                return state;
    }
}