import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: []
    };

const CartSlice = createSlice({ 
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action){
        const itemexists= state.cartItems.find(item => item.id === action.payload.id);
        if(itemexists){
            itemexists.quantity +=1;
        }
        else{
            state.cartItems.push({...action.payload, quantity: 1});
        }
    },
    removeItemFromCart(state, action){
        state.cartItems = state.cartItems.filter(item => item.id === action.payload);
    },
    clearCart(state){
        state.cartItems=[];
    },
    increaseItemQuantity(state, action){
        const itemToIncrease= state.cartItems.find(item => item.id === action.payload);
        if(itemToIncrease){
            itemToIncrease.quantity++;
        }
    },
    decreaseItemQuantity(state, action){
        const itemTodecrease = state.cartItems.find(item => item.id === action.payload);
        if(itemTodecrease && itemTodecrease.quantity>1){
            itemTodecrease.quantity--;
        }
    }
  }}
);

export const {
    addItemToCart,
    removeItemFromCart,
    clearCart,
    increaseItemQuantity,
    decreaseItemQuantity,
  } = CartSlice.actions;
export default CartSlice.reducer;
