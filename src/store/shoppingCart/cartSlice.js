import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartItems: [],
    totalCartItemsQuantity: 0,
    totalAmount: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.cartItems.find(item => item.id === newItem.id);
            state.totalCartItemsQuantity++;

            if (!existingItem) {
                state.cartItems.push({
                    id: newItem.id,
                    title: newItem.title,
                    image01: newItem.image01,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                })
            } else {
                existingItem.quantity++
                existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price)
            }
            state.totalAmount = state.cartItems.reduce((total, item) => (
                total + Number(item.price) * Number(item.quantity)
            ), 0)

 
        },
        //* Remove items
        removeItem: (state, action) => {
            const id = action.payload;
            const existingItem = state.cartItems.find(item => item.id === id)
            state.totalCartItemsQuantity--

            if (existingItem.quantity === 1) {
                state.cartItems = state.cartItems.filter(item => item.id !== id)
            } else {
                existingItem.quantity--
                existingItem.totalPrice = Number(existingItem.totalPrice) - Number(existingItem.price)
            }
            state.totalAmount = state.cartItems.reduce((total, item) =>
                total + Number(item.price) * Number(item.quantity),
                0
            );
        },

        //* Delete item
        deleteItem: (state, action) => {
            const id = action.payload;
            const existingItem = state.cartItems.find(item => item.id === id)

            if (existingItem) {
                state.cartItems = state.cartItems.filter(item => item.id !== id)
                state.totalCartItemsQuantity = state.totalCartItemsQuantity - existingItem.quantity;
            }

            state.totalAmount = state.cartItems.reduce((total, item) =>
                total + Number(item.price) * Number(item.quantity),
                0
            );
        }
    }
})

export const { addItem, removeItem, deleteItem } = cartSlice.actions;
export default cartSlice;