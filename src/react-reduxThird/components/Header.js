import React from "react";
import {connect} from "react-redux";

// {num} = props.num
const Header = ({num, text}) => (
  <div>
    {console.log()}
    <h1>{text}</h1>
  </div>
);

// connect()
// 第一引数にstate。このstateの中にはdispacthも含まれるが
// 第二引数を定義すると第一引数のdispatchは上書きされる
const LnkHeader = connect(
  (s, props) => {
    return {text: s.text};
  },
  d => {
    return {
      plus: () => {
        d({type: "ADD", amount: 1});
      }
    };
  }
)(Header);

export default LnkHeader;
