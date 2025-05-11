import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const existingItem = state.items.find(item => item.name === action.payload.name);
        console.log("reducer", action.payload.name)
        if(!existingItem){
            console.log(action.payload)
            state.items.push({...action.payload, quantity: 1});
        }else{
            existingItem.quantity += 1;
        }
    },
    removeItem: (state, action) => {
        const existingItem = state.items.find(item => item.name === action.payload.name);
        state.items = state.items.filter(item => item.name !== action.payload.name);
    },
    updateQuantity: (state, action) => {
        const existingItem = state.items.find(item => item.name === action.payload.name);
        if(existingItem){
            existingItem.quantity = action.payload.quantity;
        }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
