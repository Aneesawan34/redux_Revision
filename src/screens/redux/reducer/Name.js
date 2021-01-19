import Storage from '../../../services/Storage';
var myName = Storage.get('MY_NAME') ? Storage.get('MY_NAME') : "Anees";

const Name = (state = myName, action) => {
  console.log("state of name reducer", state);
  console.log("action of nmae reducer", action.type);
 
  if (action.type === "NAMECHANGE") {
    Storage.set('MY_NAME', action.payload);
    state = action.payload;
    return state;
  }
  return state;
};

export default Name;
