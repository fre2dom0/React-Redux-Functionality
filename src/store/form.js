import { createSlice } from "@reduxjs/toolkit";

export const form = createSlice(
    {
        name:"form",
        initialState: {name: "", surname: "", nickname: "", email: "", password: "", closedPassword: "", closed: true},
        reducers: {
            getValue(state, action){
                state.name = action.payload.name
                state.surname = action.payload.surname
                state.nickname = action.payload.nickname
                state.email = action.payload.email
                state.password = action.payload.password
                state.closedPassword = ""
                state.closed = true
                for(let i = 0; i < state.password.length; i++){
                    state.closedPassword += "*"
                }
                
            },

            showPass(state, action){
                state.closed ? state.closed = false : state.closed = true
                console.log(state.closed)
            }, 

            resetPass(state,action){
                state.name = ""
                state.surname = ""
                state.nickname = ""
                state.email = ""
                state.password = ""
                state.closedPassword = ""
            }
        }
    }
)

export const formActions = form.actions