import { createSlice } from '@reduxjs/toolkit';

export const moviesSlice = createSlice({
    name: 'favorites',
    initialState: {
        list: [],
    },
    reducers: {
        addToFavorites: (state, action) => { state.list.push(action.payload); },
        removeFromFavorites: (state, action) => {
            state.list
                .filter((movie) => movie !== action.payload);
        },
    },
});

export const { addToFavorites, removeFromFavorites } = moviesSlice.actions;

export default moviesSlice.reducer;
