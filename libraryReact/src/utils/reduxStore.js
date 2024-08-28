import {configureStore,createSlice} from "@reduxjs/toolkit";
import { data } from "./mockData.js";

let items=data;
let addBookSlice=createSlice({
    name:"addBook",
    initialState:{
        items,
    },
    reducers:{
        addBook:(state,action)=>{
            state.items.push(action.payload);
        }
    }
})

let reduxStore=configureStore({
    reducer:{
        books:addBookSlice.reducer,
    },
})

export default reduxStore;