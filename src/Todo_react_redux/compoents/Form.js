import React from "react";
import { connect } from "react-redux";

const Form = ({ add }) => {
  return (
    <div>
      <button
        onClick={() => {
          add("text");
        }}
      >
        ADD
      </button>
    </div>
  );
};

const mapStateToProps = state => ({ num: state.num });

const actionCreator = text => {
  console.log("Add Dispach");
  return { type: "ADD", text: text };
};

const mapDispatchToProps = dispatch => {
  return {
    add: text => {
      dispatch(actionCreator(text));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Form);
