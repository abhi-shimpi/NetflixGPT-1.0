import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "Gpt Search",
    initialState : {
        gptSearch : false
    },
    reducers : {
        toggleGptSearchView : (state) => {
            state.gptSearch = !state.gptSearch;
        }
    }
});

export const {toggleGptSearchView} = gptSlice.actions;

export default gptSlice.reducer;

