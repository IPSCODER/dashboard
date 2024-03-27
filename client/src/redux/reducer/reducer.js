import * as types from "../actions/actionType"

const initialState = {
    data:[],
    single_data:[],
    topic:[],
    sector:[],
    countries:[],
    pestle:[],
    region:[],
    source:[],
    start_year:[],
    end_year:[],
    intensity:[],
    likelihood:[],
    relevance:[]
}



export const reducer = (state=initialState,action) =>{
    switch(action.type){
        case types.GET_DATA:
            return {
                ...state,
                data:action.payload
            };
            case types.GET_SINGLE_DATA:
            return {
                ...state,
                single_data:action.payload
            };
            case types.GET_TOPIC:
            return {
                ...state,
                topic:action.payload
            };
            case types.GET_SECTOR:
            return {
                ...state,
                sector:action.payload
            };
            case types.GET_COUNTRY:
            return {
                ...state,
                countries:action.payload
            };
            case types.GET_PESTLE:
            return {
                ...state,
                pestle:action.payload
            };
            case types.GET_REGION:
            return {
                ...state,
                region:action.payload
            };
            case types.GET_SOURCE:
            return {
                ...state,
                source:action.payload
            };
            case types.GET_START_YEAR:
            return {
                ...state,
                start_year:action.payload
            };
            case types.GET_END_YEAR:
            return {
                ...state,
                end_year:action.payload
            };
            case types.GET_INTENSITY:
            return {
                ...state,
                intensity:action.payload
            };
            case types.GET_LIKELIHOOD:
            return {
                ...state,
                likelihood:action.payload
            };
            case types.GET_RELEVANCE:
            return {
                ...state,
                relevance:action.payload
            };
            default:
                return state;
    }
}