import {createSlice} from "@reduxjs/toolkit"

export const changeTextColor = createSlice({
    name: "changeTextColor",
    initialState: {color: "red"},
    reducers: {
        changeT(state,action){
            state.color = action.payload
            console.log(state.color + " tc")
        },
        resetT(state,action){
            state.color = "red"
            console.log(state.color + " tr")
        }

    }
})

export const changeTextColorActions = changeTextColor.actions