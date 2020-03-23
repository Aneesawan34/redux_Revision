export const Wishes = (state = ["eat", "sleep", "drink"], action) => {
  console.log("state of wishles reducer", state);
  console.log("action of wishles reducer", action.type);

  return state;
};
