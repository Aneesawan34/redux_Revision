import React from "react";
import { useSelector, useDispatch } from "react-redux";

const About = ()=> {
  const wishState = useSelector((state)=> state.wishes);
  const dispatchWish = useDispatch();
  console.log("wishState: ", wishState);
    return (
      <div>
        <h1>About Page</h1>
        <ul>
          {wishState.map(val => (
            <li>{val}</li>
          ))}
        </ul>
        <button
          className="waves-effect waves-light btn"
          onClick={() => dispatchWish({type: "ARRAYCHANGE", payload: "wakeup"})}
        >
          Second Item Change
        </button>
      </div>
    )
}

export default About;
