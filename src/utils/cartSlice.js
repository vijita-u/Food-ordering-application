import { createSlice } from "@reduxjs/toolkit";

// Configure the slice
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addItems: (state, action) => {
            const existingItem = state.items.find((item) => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            }
            else {
                state.items.push({...action.payload, quantity: 1});
            }
        },
        removeItems: (state, action) => {
            const existingItem = state.items.find((item) => item.id === action.payload.id);
            if (existingItem) {
                if (existingItem.quantity > 1) {
                    existingItem.quantity -= 1;
                }
                else if (existingItem.quantity === 1) {
                    console.log("remove this item from the data")
                    state.items = state.items.filter((item) => (item.id !== existingItem.id));
                    // state.items.filter((item) => item.quantity !== 0)
                }
            }
        },
        clearCart: (state, action) => {
            state.items.length = 0; // []
        }
    }
})

/**
 * cartSlice = {
 *  actions: {},
 *  reducer: {}.
 * }
 */

export default cartSlice.reducer;
export const {addItems, removeItems, clearCart} = cartSlice.actions;