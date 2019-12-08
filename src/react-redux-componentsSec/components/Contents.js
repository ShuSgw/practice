import React from "react";
import { connect } from "react-redux";
// import { removePost } from "../actions/index";
import { databaseRmovePost } from "../actions/index";

// actions
// import {stateOneChange} from "../actions/index";
// react-router
import { Link } from "react-router-dom";
// modules
import Post from "./Post";
const Contents = props => (
  <div>
    <Post />
    {props.allState.map((one, num) => (
      <ul key={num}>
        <li>
          <Link to={`/edit/${one.id}`}>Name: {one.name}</Link>
        </li>
        <li>Text: {one.text}</li>
        <li>id: {one.id}</li>
        <li>
          <button
            onClick={() => {
              props.dispatch(databaseRmovePost(one.id));
            }}
          >
            Remove
          </button>
        </li>
      </ul>
    ))}
  </div>
);

const LnkContents = connect(s => {
  const selector = () => {
    return s.one.filter(one => {
      const textMatch = one.name.includes(s.two.filter);
      return textMatch;
    });
  };
  return { allState: selector() };
})(Contents);

export default LnkContents;
