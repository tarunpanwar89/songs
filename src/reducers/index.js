import { combineReducers } from "redux";

const songsReducer = () =>{
    return[
        {
            title : "Highway to Hell",
            duration : '5.30'
        },
        {
            title : "Macarena",
            duration : '2.30'
        },
        {
            title : "All Star",
            duration : '3.30'
        },
        {
            title : "Gravity",
            duration : '3.30'
        }
        
    ];

};

const favoriteSong = () =>{
    return "Highway to Hell";
};

const selectedSongReducer = (selectedSong = null , action) =>{
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
};

const handleCounter =(count =0, action) =>{
    if(action.type === 'INCREMENT'){
        return count+1;
    }
    else if(action.type === 'DECREMENT'){
        return count-1;
    }
    return count;
};

export default combineReducers({
    songs : songsReducer,
    favoriteTitle : favoriteSong,
    selectedSong : selectedSongReducer,
    counter : handleCounter
});