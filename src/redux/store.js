import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import productsReducer from "./productSlice";
import cartReducer from "./cartSlice";
import orderReducer from "./orderSlice";




export const store = configureStore({

    reducer: {
        user: userReducer,
        product: productsReducer,
        cart: cartReducer,
        order: orderReducer

    }

})


