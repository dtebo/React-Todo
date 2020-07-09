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

    render(){
        return(
            <form>
                <input 
                    type='text'
                    onChange={this.changeHandler}
                    placeholder='...todo'
                />
                <button
                    type='submit'
                >
                    Add Todo
                </button>
                <button>
                    Clear Completed
                </button>
            </form>
        );
    }
}

export default TodoForm;