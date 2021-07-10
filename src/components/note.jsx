import React from 'react';
import PropTypes from 'prop-types';


class Note extends React.Component {
  render() {
    return (
      <div>
        <span>{this.props.task}</span>
        <button onClick={(e) => this.props.onDelete(e)}>x</button>
      </div>
    )
  }

  onDelete() {
    console.log('delete');
  }
}

Note.propTypes = {
  task: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default Note;