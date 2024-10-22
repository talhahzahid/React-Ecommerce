

import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartitem: [],
    },
    reducers: {
        addItem:(state,action)=>{
          state.cartitem.push(action.payload.add)
        }
    }   
});

// Export actions
export const { addItem } = cartSlice.actions;

// Export reducer
export default cartSlice.reducer;
