import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="screen">
          <div class="app">
            <h1>TODO APP</h1>
            <form>
              <input type="text" id = "todoText" placeholder="Create Your New Todo Task Here"></input>
              <button type="submit">Create</button>
            </form>
            <ul class = "todolist" id = "todolist">
              
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
