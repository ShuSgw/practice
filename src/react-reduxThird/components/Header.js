import React from "react";
import {connect} from "react-redux";

// {num} = props.num
const Header = (props, {num}) => (
  <div>
    {console.log(props)}
    <h1>{num}</h1>
  </div>
);

const LnkHeader = connect(
  s => {
    return {num: s.num, text: s.text};
  },
  d => {
    return {
      sample: () => {
        d({num: "texst", text: "text"});
      }
    };
  }
)(Header);

export default LnkHeader;
