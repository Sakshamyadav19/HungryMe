import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[],
        total:0.0
    },
    reducers:{
        "add":(state,action)=>{
            state.items.push(action.payload)
            state.total+=(action.payload.price/100)
        },
        "remove":(state,action)=>{
            state.total-=(state.items[action.payload].price/100)
            state.items.splice(action.payload,1)
        },
        "clear":(state)=>{
            state.items.length=0;
        },
    }
})

export const {add,remove,clear} = cartSlice.actions

export default cartSlice.reducer;