import * as types from "./actionType"
import axios from "axios"


export const funMsg = (data) =>({
    type:types.COMFIRM_MSG,
    payload:data
})

export const ordColor = (data) =>({
    type:types.ORD_COLOR,
    payload:data
})

export const paginationData = (data) =>({
    type:types.PAGINATION_DATA,
    payload:data
})

export const ham = (data) =>({
    type:types.HAM,
    payload:data
})

export const user = (data) =>({
    type:types.USER,
    payload:data
})

export const loading = (data) =>({
    type:types.LOADING,
    payload:data
})




// 


export const loadOrdColor = (data) =>{
    return function(dispatch){
        dispatch(ordColor(data))
    }
}


export const loadFunMsg = (data) =>{
    return function(dispatch){
        dispatch(funMsg(data))
    }
}

export const loadPaginationData = (data) =>{
    return function(dispatch){
        dispatch(paginationData(data))
    }
}

export const loadHam = (data) =>{
    return function(dispatch){
        dispatch(ham(data))
    }
}

export const loadUser = (data) =>{
    return function(dispatch){
        dispatch(user(data))
    }
}
export const loadLoading = (data) =>{
    return function(dispatch){
        dispatch(loading(data))
    }
}