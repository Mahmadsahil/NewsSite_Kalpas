import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        showNews: false,
        showForm: false,
        showNewsData: false,
        NewsData: '',
    },
    reducers: {
        addshowNewsList: (state) => {
            state.showNews = true;
        },
        addshowNewsBox: (state) => {
            state.showNews = false;
        },
        showForm: (state) => {
            state.showForm = true;
        },
        closeForm: (state) => {
            state.showForm = false;
        },
        addNewsData: (state, action) => {
            state.NewsData = action.payload;
        },
        showNewsData: (state) => {
            state.showNewsData = true;
        },
        closeNewsData: (state) => {
            state.showNewsData = false;
        }

    }
})

export const { addshowNewsList, addshowNewsBox, showForm, closeForm, addNewsData, showNewsData, closeNewsData } = appSlice.actions
export default appSlice.reducer;
