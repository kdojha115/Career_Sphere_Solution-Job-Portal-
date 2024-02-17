import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { userJobReducer } from "./Job/Reducer"

const rootReducers = combineReducers({
    job:userJobReducer,
})

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk))