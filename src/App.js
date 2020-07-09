import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import './App.css';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    
    const stateObj = JSON.stringify({
      todos: [
        {
          task: 'Wash Dishes',
          id: 16435643564567,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 536345634577,
          completed: false
        }
      ]
    });

    if(!localStorage.getItem('state')){
      localStorage.setItem('state', stateObj);
    }

    this.state = JSON.parse(localStorage.getItem('state'));
  }

  addTodo = (event, todo) => {
    const newTodo = {
      task: todo,
      id: Date.now(),
      completed: false
    };

    this.setState({
      todos: [...this.state.todos, newTodo]
    });

    localStorage.setItem('state', JSON.stringify(this.state));
  };

  toggleCompleted = todoId => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === todoId){
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    });
  };

  clearCompleted = e => {
    e.preventDefault();

    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    });
  };

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <TodoList
          todos={this.state.todos}
          toggleCompleted={this.toggleCompleted}
          clearCompleted={this.clearCompleted}
        />
        <TodoForm
          addTodo={this.addTodo}
        />
      </div>
    );
  }
}

export default App;
