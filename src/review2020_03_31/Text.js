import React from "react";
import { connect } from "react-redux";

const Text = props => {
  return (
    <div>
      <h1>{props.num}</h1>
      <div>{console.log(props)}</div>
    </div>
  );
};

const mapStateToProps = state => ({ num: state.num });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Text);
