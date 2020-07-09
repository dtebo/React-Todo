import React from 'react';

const TodoForm = props => {
    return(
        <>
            <form>
                <input 
                    type='text'
                    onChange={(e) => props.changeHandler(e)}
                />
            </form>
        </>
    );
};

export default TodoForm;