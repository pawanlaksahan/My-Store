import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: {
    products :[]
  },
  reducers: {
    addToCart: (state,action) => {
      
      const item = state.products.find(item=> item.id === action.payload.id)

      if(item){
        item.quantity += action.payload.quantity
      }else{
        state.push(action.payload)
      }
    },
     
    resetCart: (state) => {
      state.products =[]
    }
  }
})

// Action creators are generated for each case reducer function
export const { addToCart,resetCart } = cartSlice.actions

export default cartSlice.reducer