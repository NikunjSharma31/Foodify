import { createSlice } from "@reduxjs/toolkit";
import { data } from "../data/data";

const initialState = {
    cartItems:[],
    items: data, 
    cartTotalQuantity:0,
    cartTotalAmount: 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{

        addToCart: (state, action)=>{
          state.cartItems.push(action.payload);
        }

    }
});

export const {addToCart} = cartSlice.actions;

export default cartSlice.reducer;