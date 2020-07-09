import React from 'react';
import {
    TextField,
    Button
} from '@material-ui/core';

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
            <div className='form-wrapper'>
                 <form
                    onSubmit={this.handleSubmit}
                >
                    <TextField
                        value={this.state.todo}
                        name='todo'
                        onChange={this.changeHandler}
                        placeholder='...todo'
                    />
                    <Button
                        className='add-todo'
                        color='secondary'
                        variant='contained'
                        type='submit'
                        size='medium'
                    >
                        Add Todo
                    </Button>
                </form>
            </div>
        );
    }
}

export default TodoForm;