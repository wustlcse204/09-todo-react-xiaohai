import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';
import NewTodo from './NewTodo';

class App extends Component {


  
  constructor(props){
    super(props);
    this.state = {
      todos
      
    }
  }

  componentDidMount(){
    //make initial ajax call to list todos
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            this.state.todos = JSON.parse(this.responseText);
            console.log(this.state.todos);
            console.log("sccuessfuly load todos");
            for (let i in this.state.todos){
                createTodo(this.state.todos[i].text, i);
            }
            //mytodo = getTodo(todos[2].id);
            //console.log(mytodo.text);
        }
    };

    xhttp.open("GET", "https://cse204.work/todos", true);
    xhttp.setRequestHeader("x-api-key","aa1187-288453-3a3549-391cec-8746aa");
    xhttp.send();
    console.log("load todos called");

  }

  createTodo(textValue, i){
    let todoid = this.state.todos[i].id;
    let todotext = this.state.todos[i].text;
    <NewTodo id = {todoid} text = {todotext}/>
  }

  render() {
    return (
      <div className="App">
        <div className="screen">
          <div className="app">
            <h1>TODO APP</h1>
            <form>
              <input type="text" id = "todoText" placeholder="Create Your New Todo Task Here"></input>
              <button type="submit">Create</button>
            </form>
            <ul class = "todolist" id = "todolist">
              <NewTodo />
              <Todo id = "123" text = "test"/>              
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
