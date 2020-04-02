import React from "react";
import { connect } from "react-redux";

const Btn = props => {
  return (
    <div>
      <button
        onClick={() => {
          props.dispatch({ type: "INC" });
        }}
      >
        PLUS
      </button>
      <button
        onClick={() => {
          props.dispatch({ type: "DEC" });
        }}
      >
        MINUS
      </button>
      <div>{console.log(props)}</div>
    </div>
  );
};

// const mapStateToProps = state => ({ num: state.num });

// const mapDispatchToProps = dispach => ({ num: state.num });

export default connect()(Btn);
