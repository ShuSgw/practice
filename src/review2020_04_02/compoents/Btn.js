import React from "react";
import { connect } from "react-redux";

const Btn = ({ add }) => {
  return (
    <div>
      <button onClick={add}>aaa</button>
    </div>
  );
};

const mapStateToProps = state => ({ num: state.num });

const actionCreator = () => {
  return { type: "ADD" };
};

const mapDispatchToProps = dispatch => {
  return {
    add: () => {
      dispatch(actionCreator);
    }
  };
};
// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     dispatch1: () => {
//       dispatch(actionCreator)
//     }
//   }
// }
export default connect(mapStateToProps, mapDispatchToProps)(Btn);
