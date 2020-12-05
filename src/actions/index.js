// action creators
import actionTypes from "./actionTypes";

// export const incrementByOne = function () {
//   return {
//     type: actionTypes.incrementByOne
//   };
// };

// export const decrementByOne = function () {
//   return {
//     type: actionTypes.decrementByOne
//   };
// };

export const incrementByValue = function (payload) {
  return {
    type: actionTypes.incrementByValue,
    payload
  };
};

export const decrementByValue = function (payload) {
  return {
    type: actionTypes.decrementByValue,
    payload
  };
};
