const Name = (state = "anees", action) => {
  console.log("state of name reducer", state);
  console.log("action of nmae reducer", action.type);

  return state;
};
export default Name;
