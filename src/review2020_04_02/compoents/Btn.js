import React from "react";
import { connect } from "react-redux";

const Btn = ({ add }) => {
  return (
    <div>
      <button
        onClick={() => {
          add(10);
        }}
      >
        aaa
      </button>
    </div>
  );
};

const mapStateToProps = state => ({ num: state.num });

const actionCreator = amount => {
  console.log("Add Dispach");
  return { type: "ADD", amount: amount };
};

const mapDispatchToProps = dispatch => {
  return {
    add: amount => {
      dispatch(actionCreator(amount));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Btn);
