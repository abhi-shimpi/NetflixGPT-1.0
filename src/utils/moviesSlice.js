import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name : "movies",
    initialState :{
        videoTrailer: null,
        nowPlayingMovies :[],
        popular :[],
        topRated :[],
        upcoming :[]
    },
    reducers : {
        addVideoTrailer : (state,action) => {
            state.videoTrailer = action.payload;
        },
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

export const {addNowPlayingMovies,addPopularMovies,addTopRatedMovies,addUpcomingMovies,addVideoTrailer} = moviesSlice.actions;

export default moviesSlice.reducer;

