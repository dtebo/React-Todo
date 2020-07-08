import React from 'react';
import TodoList from './components/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
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
    };
  }

  render() {
    return (
      <div>
        <TodoList
          todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
