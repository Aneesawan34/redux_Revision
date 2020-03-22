import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Home extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Home Page</h1>
        <h2>{this.props.myName}</h2>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("my state", state);
  return {
    myName: state.name
  };
};
export default withRouter(connect(mapStateToProps)(Home));
