import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    status: "initial",
};

export const genresSlice = createSlice({
    name: "genres",
    initialState,
    reducers: {
        fetchGenresError: () => ({
            status: "error",
        }),
        fetchGenresSucces: (state, {payload: genres }) => {
            state.status = "success";
            state.genres = genres;
        },
        fetchGenres: () => ({
            status: "loading",
        }),
    },
});

export const { fetchGenresError, fetchGenresSucces, fetchGenres} = genresSlice.actions;

export const selectGenresAll = state => state.genres.genres;
export const selectGenresStatus = state => state.genres.status;

export default genresSlice.reducer;

