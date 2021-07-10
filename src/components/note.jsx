import React from 'react';
import PropTypes from 'prop-types';


class Note extends React.Component {
  render() {
    return (
      <div onClick={this.props.onClick}>
        {this.props.children}
      </div>
    )
  }


}

Note.propTypes = {
  children: PropTypes.array,
  onClick: PropTypes.func.isRequired
}

export default Note;