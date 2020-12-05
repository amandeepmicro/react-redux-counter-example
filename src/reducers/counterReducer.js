import actionTypes from "./../actions/actionTypes";

const initialState = { value: 0 };
const counterReducer = function (state = initialState, action) {
  
  switch (action.type) {
    case actionTypes.incrementByOne:
      return { ...state, value: state.value + 1 };
    case actionTypes.decrementByOne:
      return { ...state, value: state.value - 1 };
    case actionTypes.incrementByValue:
      return { ...state, value: state.value + action.payload };
    case actionTypes.decrementByValue:
      return { ...state, value: state.value - action.payload };
    default:
      return state;
  }
};

export default counterReducer;
