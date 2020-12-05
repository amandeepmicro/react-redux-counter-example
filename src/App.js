import { connect } from "react-redux";
import Counter from "./Counter";
import actionTypes from "./actions/actionTypes";
import { incrementByValue, decrementByValue } from "./actions";

const mapStateToProps = (state, ownProps) => {
  //console.log(state);
  return { value: state.counterReducer.value };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    incrementByOne: () => dispatch({ type: actionTypes.incrementByOne }),
    decrementByOne: () => dispatch({ type: actionTypes.decrementByOne }),
    incrementByValue: (v) => dispatch(incrementByValue(v)),
    decrementByValue: (v) => dispatch(decrementByValue(v))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
