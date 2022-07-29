import React from "react";
import SongList from "./SongList";
import SongDetail from "./SongDetail";
import Counter from "./Counter";
const App = () => {
return (
    <div className="ui container grid">
        <div className="ui row">
            <div className="column eight wide">
                <SongList/>
            </div>
            <div className="column eight wide">
                <SongDetail/>
            </div>
        </div>   
        <hr></hr>
        <div className="ui row">
           
            <Counter/>
        </div>     
    </div>
    );
};

export default App;
