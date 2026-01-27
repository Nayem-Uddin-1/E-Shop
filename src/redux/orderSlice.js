import { createSlice } from "@reduxjs/toolkit";




const initialState = {
    orderData: JSON.parse(localStorage.getItem("orderData")) || null,
};


const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        setOrderData: (state, action) => {
            state.orderData = action.payload
            localStorage.setItem("orderData", JSON.stringify(action.payload));

        },
        clearOrderData: (state) => {
            state.orderData = null;
            localStorage.removeItem("orderData");
        },
    }
})

export const { setOrderData, clearOrderData } = orderSlice.actions
export default orderSlice.reducer