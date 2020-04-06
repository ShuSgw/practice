import React from "react";
import { connect } from "react-redux";

const Form = ({ add, addLater }) => {
  return (
    <div>
      <button
        onClick={() => {
          add("text");
        }}
      >
        ADD
      </button>
      <br />
      <button
        onClick={() => {
          addLater("text");
        }}
      >
        ADD　LATER
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({ num: state.num });

const actionCreator = (text) => {
  console.log("Add Dispach");
  return { type: "ADD", text: text };
};

const actionCreatorLater = (text) => {
  return (d) => {
    setTimeout(() => {
      d({ type: "ADD", text: text });
    }, 3000);
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add: (text) => {
      dispatch(actionCreator(text));
    },
    addLater: (text) => {
      dispatch(actionCreatorLater(text));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Form);
