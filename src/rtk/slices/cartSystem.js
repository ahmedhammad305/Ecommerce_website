import { createSlice } from "@reduxjs/toolkit";
const initialState ={
    cart:[],
    quantity :0,
}
const cartSystem = createSlice({
    name:'user',
    initialState,
    reducers : {
        Addcart:(state, action) => {
            const finds = state.cart.find((product) => product.id === action.payload.id);
            if(finds){
                finds.quantity += 1;
            } else{
                const clone = {...action.payload, quantity: 1}
                state.cart.push(clone);
            }
        },
        deletecar:(state, action) =>{
        const next = state.cart.filter(
                product => product.id !== action.payload.id
            )
            state.cart = next;
        },
        increm:(state, action) =>{
            const itemparsint = state.cart.find((product) => product.id === action.payload.id);
            itemparsint.quantity++;
        },
        decre:(state, action) =>{
            const itemparsint = state.cart.find((product) => product.id === action.payload.id);
            if(itemparsint.quantity === 1){
                const remove = state.cart.filter((product) => product.id !== action.payload.id);
                state.cart = remove;
            } else{
                itemparsint.quantity--;
            }
        }
        
    }
})
export const {Addcart,deletecar,increm,decre}= cartSystem.actions;
export default cartSystem.reducer;
