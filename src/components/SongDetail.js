import React from "react";
import {connect} from "react-redux";

const SongDetail = ({song}) => {
    console.log('props from song detail', song)
    if (!song ) return <div> Select a song </div>
    return <div> Song Detail <div> {song?.title} <h6> Duration: {song?.duration} </h6> </div> </div>
}

const mapReduxStateToProps = (state) => {
    return {song: state.selectedSong};
}

export default connect(mapReduxStateToProps)(SongDetail);
