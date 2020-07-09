// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Todo from '../components/Todo';

const TodoList = props => {
    const {todos} = props;

    return (
        todos.map((todo) => {
            return <Todo
                        key={todo.id}
                        toggleCompleted={props.toggleCompleted}
                        todo={todo}
                    />
        })
    );
};

export default TodoList;