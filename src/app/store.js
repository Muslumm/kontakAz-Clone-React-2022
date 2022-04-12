import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from '../features/components/categories/categoriesSlice'


const store = configureStore({
    reducer:{
        categories: categoriesReducer,
    }
})


export default store