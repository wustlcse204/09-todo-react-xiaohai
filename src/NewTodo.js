import React, { Component } from 'react';
import './NewTodo.css';


class NewTodo extends Component {
  render() {
    return (
      <div className="NewTodo">
        <input type="text" value="textValue" className="task" ></input>
        <button type="submit" >Delete</button>
        <input type="checkbox" className="check"></input>
      </div>
    );
  }
}

export default NewTodo;