import React, {Component} from 'react'
import {connect} from 'react-redux'
import {selectSong} from "../actions";
class SongList extends Component {
    renderListSong() {
        return this.props.songs.map(song => {
            return <div key={song.title}>
                <div style={{display: "flex", justifyContent:'space-around', alignItems:'center', flexWrap:'nowrap'}}>
                <h1> {song.title} </h1>
                </div>
                <button onClick={() => this.props.selectSong(song)}> Select</button>
            </div>
        })
    }

    render() {
        return <div> {this.renderListSong()} </div>
    }
}

const getReduxState = (state) => {
    console.log(state)
    return {songs: state.songs}
}

export default connect(getReduxState, {selectSong})(SongList);
