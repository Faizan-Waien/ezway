import { configureStore } from '@reduxjs/toolkit'
import cartSlice  from './Slice/cartSlice'
import productSlice from './Slice/productSlice'
import singleProductSlice from './Slice/singleProductSlice'
import categoriesSlice from './Slice/categoriesSlice'
import singleCategorySlice from './Slice/singleCategorySlice'
import SearchSlice from './Slice/SearchSlice'

const store = configureStore({

    reducer: {
        cart: cartSlice,
        product: productSlice,
        singleProduct: singleProductSlice,
        categories: categoriesSlice,
        singleCategory: singleCategorySlice,
        search: SearchSlice,
    }
})

export default store 