import React from 'react';

class TodoForm extends React.Component{
    constructor(){
        super();
        this.state = {
            todo: ''
        };
    }

    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({
            todo: ''
        });

        this.props.addTodo(event, this.state.todo);
    }

    render(){
        return(
            <form
                onSubmit={this.handleSubmit}
            >
                <input 
                    type='text'
                    value={this.state.todo}
                    name='todo'
                    onChange={this.changeHandler}
                    placeholder='...todo'
                />
                <button
                    type='submit'
                >
                    Add Todo
                </button>
            </form>
        );
    }
}

export default TodoForm;