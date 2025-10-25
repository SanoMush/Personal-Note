import React from 'react';


function NoteSearch({ searchQuery, onSearchChange }) {
  return (
    <div className="note-search">
      <input 
        type="text" 
        placeholder="Cari catatan ..." 
        value={searchQuery}
        onChange={onSearchChange}
      />
    </div>
  );
}

export default NoteSearch;