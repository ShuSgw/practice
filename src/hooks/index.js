import React, { useState } from "react";
// import UseState from "./useState";
import Note from "./Note";

const Index = (props) => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");

  const addNote = (e) => {
    e.preventDefault();
    setNotes([...notes, { title: title }]);
    setTitle("");
  };
  const removeNote = (selected) => {
    const filtered = notes.filter((note) => {
      if (note.title !== selected) {
        return note;
      }
    });
    setNotes(filtered);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Notes</h1>
      <form onSubmit={addNote}>
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button>Add</button>
        <small style={{ display: "block" }}>{title}</small>
        {notes.map((note, index) => (
          <p key={index}>
            {note.title}
            &nbsp;
            <span
              style={{ cursor: "pointer" }}
              onClick={() => {
                removeNote(note.title);
              }}
            >
              ❌
            </span>
          </p>
        ))}
      </form>
    </div>
  );
};

export default Index;
