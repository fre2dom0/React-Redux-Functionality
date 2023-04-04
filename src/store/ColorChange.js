import { createSlice } from "@reduxjs/toolkit"

export const colorChan = createSlice({
    name: "colorChanging",
    initialState: {color: "black"},
    reducers: {
        changeC(state,action){
            state.color = action.payload
            console.log(state.color + " bc")
        },
        resetC(state,action){
            state.color = "black"
            console.log(state.color + " br")
        }

    }
})

export const colorChangeAction = colorChan.actions
