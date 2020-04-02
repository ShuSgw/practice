import React from "react";
import { connect } from "react-redux";

const Add = props => {
  return (
    <div>
      <div>Add</div>
      <div>{console.log(props)}</div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    prop: state.num
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch1: () => {
      dispatch();
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Add);
