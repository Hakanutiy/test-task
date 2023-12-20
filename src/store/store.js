import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {reducer as modalIdReducer} from "./reducers/modal.slice.js";


const rootReducer = combineReducers({
   modalReducer:  modalIdReducer
});

export const  setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}


