import { createSlice } from "@reduxjs/toolkit";


const cartUiSlice = createSlice({
    name: 'cartUi',
    initialState: {
        cartIsVisible: false
    },
    reducers: {
        toggle: (state) => {
            state.cartIsVisible = !state.cartIsVisible
        }
    }
})

export const { toggle } = cartUiSlice.actions;
// export const selectedIsCartOpen = (state) => state.cartUi.cartIsVisible
export default cartUiSlice;