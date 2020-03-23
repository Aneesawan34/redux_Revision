const myArray = ["eat", "sleep", "drink"];

export const Wishes = (state = myArray, action) => {
  console.log("state of wishles reducer", state);
  console.log("action of wishles reducer", action.type);
  if (action.type === "ARRAYCHANGE") {
    state = myArray.splice(1, 1, action.payload);
    return state;
  }
  return state;
};
