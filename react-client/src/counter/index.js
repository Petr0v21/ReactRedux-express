import React from "react";
import { connect } from 'react-redux';
import { adding } from "../redux/reducer";

const SimpleCounter = (props) => {
    return (
        <div>
            <div>{props.counter.counter}</div>
           <button onClick={props.myFunc}>add</button>
        </div>
    )
  
};

const mapStateToProps = state => {
    return {
        counter: state.counter
    }
  }
const mapDispatchToProps = dispatch => {
    return {
      myFunc: () => {
        dispatch(adding())
      }
    }
  }

const Counter = connect(
    mapStateToProps,
    mapDispatchToProps
  )(SimpleCounter)

export default Counter;