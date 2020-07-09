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
                />
            </form>
        );
    }
}

export default TodoForm;