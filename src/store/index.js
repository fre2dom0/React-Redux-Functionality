import {configureStore} from "@reduxjs/toolkit"
import { colorChan } from "./ColorChange"
import {changeTextColor} from "./textColor"
import { form } from "./form"
import { people } from "./People"

const store = configureStore(
    {
        reducer: {
            bgColor: colorChan.reducer,
            textColor: changeTextColor.reducer,
            form: form.reducer,
            people: people.reducer 
        }
    }
)
export default store