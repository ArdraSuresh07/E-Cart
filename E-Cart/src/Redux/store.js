import {configureStore} from "@reduxjs/toolkit";
import WishListSlice from "./slice/WishListSlice";
import cartSlice from "./slice/cartSlice";


const store = configureStore({
    reducer:{
        wishListReducer : WishListSlice,
        cartReducer : cartSlice
    }
})

export default store