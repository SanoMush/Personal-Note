import React, { useState } from 'react';
import { getInitialData } from './utils';

import NoteList from './components/NoteList';
import NoteInput from './components/NoteInput';
import NoteSearch from './components/NoteSearch';

function App() {
  const [notes, setNotes] = useState(getInitialData());
  const [searchQuery, setSearchQuery] = useState('');

  const onAddNoteHandler = ({ title, body }) => { };
  const onDeleteNoteHandler = (id) => {};
  const onSearchChangeHandler = (event) => {  };


  const onArchiveNoteHandler = (id) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === id) {
        return { ...note, archived: !note.archived }; 
      }
      return note;
    });
    setNotes(updatedNotes);
  };

  const filteredNotes = notes.filter((note) => 
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const activeNotes = filteredNotes.filter((note) => !note.archived);
  const archivedNotes = filteredNotes.filter((note) => note.archived);

  return (
    <div className="note-app">
      <header className="note-app__header">
        <h1>Personal Notes</h1>
        <NoteSearch 
          searchQuery={searchQuery} 
          onSearchChange={onSearchChangeHandler} 
        />
      </header>
      <main className="note-app__body">
        <h2>Buat Catatan</h2>
        <NoteInput addNote={onAddNoteHandler} />

        <h2>Catatan Aktif</h2>
        <NoteList 
          notes={activeNotes} 
          onDelete={onDeleteNoteHandler}
          onArchive={onArchiveNoteHandler}
        />

        <h2>Arsip</h2>
        <NoteList 
          notes={archivedNotes} 
          onDelete={onDeleteNoteHandler}
          onArchive={onArchiveNoteHandler}
        />
      </main>
    </div>
  );
}

export default App;