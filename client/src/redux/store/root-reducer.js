import { reducer } from "../reducer/reducer";
import { combineReducers } from "redux";
import { funReducer } from "../reducer/functionReducer";

export const rootReducer = combineReducers({reducer,funReducer})

