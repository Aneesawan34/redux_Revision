import Storage from '../../../services/Storage';
const myArray = ["eat", "sleep", "drink"];

const Wishes = (state = myArray, action) => {
  console.log("state of wishles reducer", state);
  console.log("action of wishles reducer", action);
  if (action.type === "ARRAYCHANGE") {
    state[1] = action.payload;
    state = [
      ...state,
    ];
    return state;
  }
  return state;
};

export default Wishes;