import React , {Component} from "react";
import {connect} from 'react-redux';
import {selectSong} from '../actions';

class SongList extends Component {


    renderList=()=>{
       console.log("Props are :" );
       console.log(this.props);
        return this.props.songs.map((song) =>{
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button onClick={()=>{this.props.selectSong(song)}}
                        className="ui button primary">Select</button>
                    </div>
                    <div className="content ">{song.title}
                         {song.title===this.props.favoriteTitle ?<div>Favorite! </div> : ''}
                    </div>
                </div>
            );
        });
    };

    render(){
        //console.log(this.props);
        return <div className="ui divided list">{this.renderList()}</div> ; 
    }
}
/**
 * Takes data and shows as props in the component and by convention , it is called as map state to props.
 * state : get details form redux-store.
 */
const mapStateToProps = (state) => {
   console.log(state);
    return {songs : state.songs,favoriteTitle : state.favoriteTitle};
};

export default connect(mapStateToProps, {
    selectSong : selectSong
})(SongList);