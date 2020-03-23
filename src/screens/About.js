import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Aboutaction } from "./redux/action/aboutaction";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wishArray: this.props.myArray
    };
  }
  render() {
    console.log("state wisharray", this.state.wishArray);
    // console.log("action in about", Aboutaction);
    return (
      <div>
        <h1>About Page</h1>
        <ul>
          {this.state.wishArray.map(val => (
            <li>{val}</li>
          ))}
        </ul>
        <button
          className="waves-effect waves-light btn"
          onClick={() => this.props.stateChange()}
        >
          Second Item Change
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    myArray: state.wishes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    stateChange: () => dispatch({ type: "ARRAYCHANGE", payload: "wakeup" })
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(About));
