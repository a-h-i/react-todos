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
          task: 'Learn React',
          editing: false
        },
        {
          id: uuidv4(),
          task: 'Do laundry',
          editing: false
        }
      ]
    }
  }
  render() {
    return (
      <div>
        <button onClick={ () => this.addNote()}>+</button>
        <Notes notes={this.state.notes} onDelete={(id, e) => this.deleteNote(id, e)} 
          onEdit={(id, e) => this.editNote(id, e)}
          onNoteClick={(id) => this.activateNoteEdit(id)}
        />
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
        task: 'New Task',
        editing: false
      } ])
    });
  }

  editNote(id, task) {
    this.setState({
      notes: this.state.notes.map((note) => {
        if(note.id === id) {
          note.editing = false;
          note.task = task;
        }
        return note;
      })
    });
  }

  activateNoteEdit(id) {
    this.setState({
      notes: this.state.notes.map((note) => {
        if(note.id === id) {
          note.editing = true;
        }
        return note;
      })
    })
  }
}

export default App;