import React from 'react';
import PropTypes from 'prop-types';
import Note from './note';
import Editable from './editable';

class Notes extends React.Component {

  render() {
    return (
      <ul>
        {this.props.notes.map( (note) => (
          <li key={note.id}>
            <Note onClick={() => this.props.onNoteClick(note.id) }>
              <Editable 
                editing={note.editing}
                value={note.task}
                onEdit={(value) => this.props.onEdit(note.id, value)} />
              <button onClick={(e) => this.props.onDelete(note.id, e)}>x</button>
            </Note>
          </li>
        ))}
      </ul>
    );
  }
}

Notes.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onNoteClick: PropTypes.func.isRequired
}

export default Notes;