import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "product",
  initialState: {
    info:[]
  }, 
  reducers: {
    setProducts: (state, action) => {
      state.info = action.payload
    },
    addProduct: (state, action) => {
      state.info.push(action.payload);
    },
    updateProduct: (state, action) => {
      const id = action.payload.id;
      const updatedProduct = action.payload.product;
      
      console.log("action: ",action);
      const productIndex = state.info.findIndex(product => product.id === id);
      
      if (productIndex !== -1) {
        state.info[productIndex] = { ...state.info[productIndex], ...updatedProduct };
      }
    },
    
    removeProduct: (state, action) => {
      const productIdToRemove = action.payload;
      state.info = state.info.filter(product => product.id !== productIdToRemove);
    },
  },
});


export const { setProducts, addProduct, updateProduct, removeProduct } =  productsSlice.actions;
export default productsSlice.reducer;
