

import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartitem: [],
        quantity:[{}],
    },
    reducers: {
        addItem:(state,action)=>{
          state.cartitem.push(action.payload.add)
        },
        // addQuantity:(state,action)=>{
        //     state.quantity.push(action.payload.addd) +1  
        // },
        addQuantity: (state, action) => {
            const itemId = action.payload.addd; // Assuming the item has an `id` property
            if (state.quantity[itemId]) {
                state.quantity[itemId] += 1; // Increment existing quantity
            } else {
                state.quantity[itemId] = 1; // Initialize quantity to 1 if it doesn't exist
            }
        },
        removeQuantity: (state, action) => {
            const itemId = action.payload.removee; // Assuming the item has an `id` property
            if (state.quantity[itemId]) {
                state.quantity[itemId] -= 1; // Increment existing quantity
            } else {
                state.quantity[itemId] = 1; // Initialize quantity to 1 if it doesn't exist
            }
        },
    }   
});

// Export actions
export const { addItem , addQuantity , removeQuantity} = cartSlice.actions;

// Export reducer
export default cartSlice.reducer;
