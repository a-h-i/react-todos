import React from 'react';
import Notes from './notes';
import { v4 as uuidv4 } from 'uuid';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          id: uuidv4(),
          task: 'Learn React'
        },
        {
          id: uuidv4(),
          task: 'Do laundry'
        }
      ]
    }
  }
  render() {
    return (
      <div>
        <button onClick={ () => this.addNote()}>+</button>
        <Notes notes={this.state.notes} onDelete={(id, e) => this.deleteNote(id, e)} />
      </div>
    );
  }

  deleteNote(id, e) {
    e.stopPropagation();
    this.setState({
      notes: this.state.notes.filter( note => note.id !== id)
    });
  }

  addNote() {
    this.setState({
      notes: this.state.notes.concat([ {
        id: uuidv4(),
        task: 'New Task'
      } ])
    });
  }
}

export default App;