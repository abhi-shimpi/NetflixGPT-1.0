import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name : "movies",
    initialState :{
        videoTrailer: null,
        nowPlayingMovies :[],
        popular :[],
        topRated :[],
        upcoming :[],
        hindiMovies : [],
        tamilMovies : [],
        kanadaMovies : [],
        malyalamMovies : [],
        favouriteMovies : []
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
        },
        addHindiMovies : (state,action)=>{
            state.hindiMovies.push(action.payload);
        },
        addTamilMovies : (state,action)=>{
            state.tamilMovies.push(action.payload);
        },
        addKanadaMovies : (state,action)=>{
            state.kanadaMovies.push(action.payload);
        },
        addMalyalamMovies : (state,action)=>{
            state.malyalamMovies.push(action.payload);
        },
        addFavouriteMovies : (state,action)=>{
            state.favouriteMovies.push(action.payload);
        },
        removeFavouriteMovies : (state,action)=>{
            state.favouriteMovies = state.favouriteMovies.filter((movie)=>{
                return movie.imageId !== action.payload;
            })
        }
    }
});

export const {
    addNowPlayingMovies,
    addPopularMovies,
    addTopRatedMovies,
    addUpcomingMovies,
    addVideoTrailer,
    addHindiMovies,
    addTamilMovies,
    addKanadaMovies,
    addMalyalamMovies,
    addFavouriteMovies,
    removeFavouriteMovies
} = moviesSlice.actions;

export default moviesSlice.reducer;

