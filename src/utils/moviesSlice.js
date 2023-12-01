import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name : "movies",
    initialState :{
        nowPlayingMovies :[],
        popular :[],
        topRated :[],
        upcoming :[]
    },
    reducers : {
        addNowPlayingMovies : (state,action)=>{
            state.nowPlayingMovies.push(action.payload);
        },
        addPopularMovies : (state,action)=>{
            state.popular.push(action.payload);
        },
        addTopRatedMovies : (state,action)=>{
            state.topRated.push(action.payload);
        },
        addUpcomingMovies : (state,action)=>{
            state.upcoming.push(action.payload);
        }

    }
});

export const {addNowPlayingMovies,addPopularMovies,addTopRatedMovies,addUpcomingMovies} = moviesSlice.actions;

export default moviesSlice.reducer;

