import {createSlice} from "@reduxjs/toolkit";


 const initialState= {
     currentModalId: null
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState: initialState,
    reducers: {
        setCurrentModal(state, {payload: modalId}){

            state.currentModalId = modalId
        },
        clearCurrentModal(state) {

            state.currentModalId = null
        }
    }
})

export const {actions, reducer} = modalSlice