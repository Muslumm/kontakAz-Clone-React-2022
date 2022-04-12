import { createSlice,createEntityAdapter } from "@reduxjs/toolkit";
import { categoriesData } from "./categoriesData";


export const categoriesAdapter = createEntityAdapter({
        selectId: (item) =>item.id,
        sortComparer: (prevItem,nexItem) => prevItem.id.localCompare(nexItem.id)
})



const initialState = {
      status: 'idle',
      error: null,
      links:categoriesData,
}


const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers:{},
    extraReducers:{}
})


export const categoriesSelectors = categoriesAdapter.getSelectors((state)=>state.categories.links)
export default categoriesSlice.reducer;