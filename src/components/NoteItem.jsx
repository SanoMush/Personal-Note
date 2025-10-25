import React from 'react';
import NoteItemBody from './NoteItemBody';
import DeleteButton from './DeleteButton';
import ArchiveButton from './ArchiveButton';


function NoteItem({ id, title, body, createdAt, archived, onDelete, onArchive }) {
  return (
    <article className="note-item">
      <NoteItemBody title={title} createdAt={createdAt} body={body} />
      <div className="note-item__action">
        <DeleteButton id={id} onDelete={onDelete} />
        {}
        <ArchiveButton 
          id={id} 
          archived={archived} 
          onArchive={onArchive} 
        />
      </div>
    </article>
  );
}

export default NoteItem;