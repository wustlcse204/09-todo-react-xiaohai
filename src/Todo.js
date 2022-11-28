import React, { Component } from 'react';
import './Todo.css';


class Todo extends Component {
  render() {
    return (
      <div className="Todo">
        <input type="text" value="textValue" className="task" ></input>
        <button type="submit" >Delete</button>
        <input type="checkbox" className="check"></input>
      </div>
    );
  }
}

export default Todo;