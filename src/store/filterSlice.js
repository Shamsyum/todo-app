import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filterSlice",
    initialState: {
        status: 'All'
    },
    reducers: {

        filterChanged: (state, action) => {
            state.status = action.payload;
        },
    }
});

export const { filterChanged } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;