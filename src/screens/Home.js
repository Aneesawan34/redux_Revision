import React, { Component, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import './Home.css'

const Home = (props)=> {
  const nameState = useSelector((state)=> state.name);
  const dispatchName = useDispatch();
  console.log("nameState: ", nameState);
    return (
      <div>
        <h1>Home Page</h1>
        <h2>{nameState}</h2>
        <div className={"name-container"}>
        <button
          className="waves-effect waves-light btn"
          style={{marginRight:'5px'}}
          onClick={() => dispatchName({type: "NAMECHANGE", payload: "Bilal"})}
          >
          Name Change
        </button>
        <button
          className="waves-effect waves-light btn"
          onClick={() => dispatchName({type: "NAMECHANGE", payload: "Anees"})}
          >
          Refresh Name
        </button>
          </div>
      </div>
    )
}


export default Home;
