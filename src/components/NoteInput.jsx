import React, { useState } from 'react';


function NoteInput({ addNote }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

 
  const maxChar = 50;
  const [titleCharCount, setTitleCharCount] = useState(maxChar);

  const onTitleChangeHandler = (event) => {
    const newTitle = event.target.value;
    if (newTitle.length <= maxChar) {
      setTitle(newTitle);
      setTitleCharCount(maxChar - newTitle.length);
    }
  };

  const onBodyChangeHandler = (event) => {
    setBody(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    addNote({ title, body });

    setTitle('');
    setBody('');
    setTitleCharCount(maxChar);
  };

  return (
    <form className="note-input" onSubmit={onSubmitHandler}>
      {}
      <p className="note-input__title__char-limit">
        Sisa karakter: {titleCharCount}
      </p>
      <input 
        type="text" 
        placeholder="Ini adalah judul ..." 
        value={title}
        onChange={onTitleChangeHandler}
        required 
      />
      <textarea 
        placeholder="Tuliskan catatanmu di sini ..." 
        value={body}
        onChange={onBodyChangeHandler}
        required
      />
      <button type="submit">Buat</button>
    </form>
  );
}

export default NoteInput;