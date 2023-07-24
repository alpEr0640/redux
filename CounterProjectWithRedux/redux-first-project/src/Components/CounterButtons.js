import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../Redux/CounterSlice";

class CounterButtons extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.increase()}>Artır (+) </button>
        <button onClick={() => this.props.decrease()}>Azalat (-) </button>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
     increase: () => dispatch(increment()),
    decrease: () => dispatch(decrement()),
  };
};
export default connect(null, mapDispatchToProps)(CounterButtons);
