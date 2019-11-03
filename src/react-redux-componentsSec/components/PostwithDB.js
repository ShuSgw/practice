import React from "react";
import {newPostWithDB} from "../actions/index";

const PostwithDB = props => (
  <div>
    <h1>Post with DB</h1>
    <form
      onSubmit={e => {
        e.preventDefault();
        // newPostWithDB(props.postState.name, props.postState.text);
        console.log(newPostWithDB(props.postState.name, props.postState.text));
        // props.dispatch(
        //   newPostWithDB(props.postState.name, props.postState.text)
        // );
      }}
    >
      <label>Name:</label>
      <br />
      <input type="text" onChange={props.onNameChange} />
      <br />
      <label>Text:</label>
      <br />
      <input type="text" onChange={props.onTextChange} />
      <br />
      <button>post</button>
    </form>
  </div>
);

export default PostwithDB;
