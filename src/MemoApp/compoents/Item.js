import React from "react";
import { connect } from "react-redux";

const Item = ({ data }) => {
  const datas = data.map((data, index) => {
    const ms = data.ms;
    const hour = data.date.getHours();
    const min = data.date.getMinutes();
    return (
      <li key={index}>
        {ms} | {hour}:{min}
      </li>
    );
  });
  return <ul>{datas}</ul>;
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};
export default connect(mapStateToProps)(Item);
