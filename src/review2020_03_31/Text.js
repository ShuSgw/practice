import React, { Component } from "react";
import { connect } from "react-redux";

export const Text = props => {
  return <div>Text</div>;
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Text);
