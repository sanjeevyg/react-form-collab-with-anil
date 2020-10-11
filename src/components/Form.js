import React from 'react';

class ToDoForm extends React.Component {

    state = {
        title: "",
        content: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value})
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        this.props.addToDo(this.state)
    }


    render() {
        return(
            <form className="item-form" onSubmit={this.handleOnSubmit}>
                <label>Title:</label>
                <input name="title" value={this.state.title} onChange={this.handleChange}/>
                <label>Content:</label>
                <input name="content" value={this.state.content} onChange={this.handleChange}/>
                <input type="submit" id="form-submit"/>
            </form>
        )
    }
}

export default ToDoForm