import React from "react";
import {connect} from "react-redux";
import {plus, minus, syncPlus} from "../actions/index";

const Contents = ({num, mappedPlus, mappedminus, mappedSyncPlus}) => (
  <div>
    <h1>{num}</h1>
    <button onClick={() => mappedPlus(1)}>Plus</button>
    <button onClick={() => mappedminus(1)}>mins</button>
    <button onClick={() => mappedSyncPlus(1)}>SyncPlus</button>
  </div>
);

const LnkContents = connect(
  (s, props) => {
    return {num: s.num};
  },
  d => {
    return {
      mappedPlus: amount => {
        d(plus(amount));
      },
      mappedminus: amount => {
        d(minus(amount));
      },
      mappedSyncPlus: amount => {
        d(syncPlus(amount));
      }
    };
  }
)(Contents);

export default LnkContents;
