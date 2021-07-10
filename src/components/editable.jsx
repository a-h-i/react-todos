import React from 'react';
import PropTypes from 'prop-types';

class Editable extends React.Component {
  render() {
    if(this.props.editing) {
      return <Edit value={this.props.value} onEdit={(e) => this.props.onEdit(e)} />
    } else {
      return <span>value: {this.props.value} </span>
    }
  }
}

Editable.propTypes = {
  value: PropTypes.string.isRequired,
  editing: PropTypes.bool.isRequired,
  onEdit: PropTypes.func.isRequired
}

class Edit extends React.Component {
  render() {
    return (<input
      type="text"
      autoFocus={true}
      defaultValue={this.props.value}
      onBlur={(e) => this.finishEdit(e)}
      onKeyPress={(e) => this.checkEnter(e)} 
    />)
  }

  checkEnter(e) {
    if(e.key === 'Enter') {
      this.finishEdit(e);
    }
  }
  finishEdit(e) {
    const value = e.target.value;
    this.props.onEdit(value);
  }
}

Edit.propTypes = {
  value: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired
}

export default Editable;