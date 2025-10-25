import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, onDelete, onArchive }) {
  
  if (!notes.length) {
    return (
      <section className="notes-list-empty">
        <p className="notes-list__empty-message">Tidak ada catatan</p>
      </section>
    );
  }

  return (
    <section className="notes-list">
      {
        notes.map((note) => (
          <NoteItem 
            key={note.id} 
            id={note.id}
            onDelete={onDelete}
            onArchive={onArchive} 
            {...note} 
          />
        ))
      }
    </section>
  );
}

export default NoteList;