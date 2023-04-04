import { createSlice } from "@reduxjs/toolkit";

export const people = createSlice(
    {
        name: "People",
        initialState: {
            list: [],
            listFilled: false,
            id: 0,
            name: "",
            surname: "",
            gender: "",
            job: "",
            age: "",
            number: ""
        },
        reducers: {
            getValue(state, action){
                state.id = action.payload.id
                state.name = action.payload.name
                state.surname = action.payload.surname
                state.gender = action.payload.gender
                state.job = action.payload.job
                state.age = action.payload.age
                state.number = action.payload.number
                const is = state.list.find(el => el.id === state.id)
                console.log(is)
                if (is == undefined){
                    state.list.push(
                        {
                            id: state.id,
                            name: state.name,
                            surname: state.surname, 
                            gender: state.gender, 
                            job: state.job,
                            age: state.age,
                            number: state.number
                        }
                    )
                }

                if(state.list.length > 0){
                    state.listFilled = true
                }   else {
                    state.listFilled = false
                }
            },

            deleteValue(state, action){
                let id = action.payload
                state.list = state.list.filter(el => el.id !== id)
                if(state.list.length > 0){
                    state.listFilled = true
                }   else {
                    state.listFilled = false
                }
            }
        }
    }
)
export const peopleActions = people.actions