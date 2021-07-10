import React from 'react';
import PropTypes from 'prop-types';
import Note from './note';


class Notes extends React.Component {

  render() {
    return (
      <ul>
        {this.props.notes.map( note => <li key={note.id}><Note onDelete={(e) => this.props.onDelete(note.id, e)} task={note.task}/></li>)}
      </ul>
    );
  }
}

Notes.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired
}

export default Notes;