import * as types from "./actionType"
import axios from "axios"
import { loadLoading } from "./funAction";

function findUniqueValues(array, property) {
    const uniqueValues = [];
    const seenValues = new Set();
    array.forEach(obj => {
      const value = obj[property];
      if (!seenValues.has(value)) {
        seenValues.add(value);
        uniqueValues.push(value);
      }
    });
    return uniqueValues;
  } 

const get_data = (data) =>({
    type:types.GET_DATA,
    payload:data
})

const get_single_data = (data) =>({
    type:types.GET_SINGLE_DATA,
    payload:data
})

const get_topic = (data) =>({
    type:types.GET_TOPIC,
    payload:data
})

const get_sector = (data) =>({
    type:types.GET_SECTOR,
    payload:data
})

const get_country = (data) =>({
    type:types.GET_COUNTRY,
    payload:data
})

const get_pestle = (data) =>({
    type:types.GET_PESTLE,
    payload:data
})

const get_region = (data) =>({
    type:types.GET_REGION,
    payload:data
})

const get_source = (data) =>({
    type:types.GET_SOURCE,
    payload:data
})

const get_start_year = (data) =>({
    type:types.GET_START_YEAR,
    payload:data
})

const get_end_year = (data) =>({
    type:types.GET_END_YEAR,
    payload:data
})

const get_internsity = (data) =>({
    type:types.GET_INTENSITY,
    payload:data
})

const get_likelhood = (data) =>({
    type:types.GET_LIKELIHOOD,
    payload:data
})

const get_relevance = (data) =>({
    type:types.GET_RELEVANCE,
    payload:data
})






//////////////////////////////////////// 

export const loadGetData =  () =>{
    return function(dispatch){
        axios.get("https://dbackend-cyan.vercel.app/test/").then(resp=>{
            dispatch(get_data(resp.data))
            dispatch(loadLoading(false))
            const uniqueNames = findUniqueValues(resp.data, 'likelihood');
            dispatch(get_topic(findUniqueValues(resp.data, 'topic')))
            dispatch(get_sector(findUniqueValues(resp.data, 'sector')))
            dispatch(get_country(findUniqueValues(resp.data, 'country')))
            dispatch(get_pestle(findUniqueValues(resp.data, 'pestle')))
            dispatch(get_region(findUniqueValues(resp.data, 'region')))
            dispatch(get_source(findUniqueValues(resp.data, 'source')))
            dispatch(get_start_year(findUniqueValues(resp.data, 'start_year')))
            dispatch(get_end_year(findUniqueValues(resp.data, 'end_year')))
            dispatch(get_internsity(findUniqueValues(resp.data, 'intensity')))
            dispatch(get_likelhood(findUniqueValues(resp.data, 'likelihood')))
            dispatch(get_relevance(findUniqueValues(resp.data, 'relevance')))
        }).catch((err) => console.log(err))
    }
}


