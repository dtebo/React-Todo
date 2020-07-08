import React from 'react';

const Todo = props => {
    const {todo} = props;

    return (
        <p>{todo.task}</p>
    );
};

export default Todo;