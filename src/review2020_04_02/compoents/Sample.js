import React from "react";
import { connect } from "react-redux";
import Btn from "./Btn";

const Sample = props => {
  return (
    <div>
      <div>{console.log(props)}</div>
      <div>{props.num}</div>
      <Btn />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    num: state.num
  };
};
const mapDispatchToProps = dispatch => {
  return {
    // dispatch1: () => {
    //   dispatch(actionCreator)
    // }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Sample);
