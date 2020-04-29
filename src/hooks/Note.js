import React, { useState, useEffect } from "react";
// useEffect
const Note = (props) => {
  // const localstrage = [
  //   { title: "title", text: "text" },
  //   { title: "title", text: "text" },
  // ];);

  const localDt = JSON.parse(localStorage.getItem("notes"));
  const [notes, setNotes] = useState(localDt || []);
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  });

  const addNote = (e) => {
    e.preventDefault();
    setNotes([...notes, { title: title, text: text }]);
    setTitle("");
    setText("");
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
        <br />
        <textarea
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <br />
        <button>Add</button>
        <small style={{ display: "block" }}>{title}</small>
        {/*  */}
        {notes.map((note, index) => (
          <div key={index}>
            <h4>
              {note.title}{" "}
              <span
                style={{ cursor: "pointer" }}
                onClick={() => {
                  removeNote(note.title);
                }}
              >
                ❌
              </span>
            </h4>
            <p>{note.text}</p>
          </div>
        ))}
        {/*  */}
      </form>
    </div>
  );
};

export default Note;
