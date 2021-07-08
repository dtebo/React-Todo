// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Todo from '../components/Todo';

import {
    Button
} from '@material-ui/core';

const TodoList = props => {
    const {todos} = props;

    return (
        <div
            className='todo-list'
        >
            {todos.map(todo => (
                <Todo
                    key={todo.id}
                    toggleCompleted={props.toggleCompleted}
                    todo={todo}
                />
            ))}
            <Button
                className='clear-button'
                variant='contained'
                color='primary'
                size='large'
                onClick={(e) => props.clearCompleted(e)}
            >
                Clear Completed
            </Button>
        </div>
    );
};

export default TodoList;