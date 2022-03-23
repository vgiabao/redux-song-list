import {combineReducers} from 'redux';

const songReducer = () => {
    return [
        {title: 'bee', duration: '4:10'},
        {title: 'bee vo', duration: '4:10'},
        {title: 'bee vo 2', duration: '4:10'},
        {title: 'bee 3', duration: '4:10'}
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }
    return selectedSong;
}


export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer
})
