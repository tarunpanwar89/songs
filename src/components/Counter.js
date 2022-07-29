import React from "react";
import { connect } from "react-redux";
import {increment,decrement} from "../actions"

const Counter = (props)=>{

    return (
        <div className="content">
        <h2>Counter Example :</h2>
        <div className="content">
            <button className="ui button secondary" onClick={props.increment} > Increment</button>
            <button className="ui button secondary" onClick={props.decrement} > Decrement</button>
        </div>
        <div className="content">
            <br/>
           <h3>Current Count is : {props.count}</h3>    
        </div>
        </div>
    );
};

const mapStateToProps = (state)=>{
 return {count : state.counter};
};

export default connect(mapStateToProps,{
    increment : increment,
    decrement : decrement
})(Counter);