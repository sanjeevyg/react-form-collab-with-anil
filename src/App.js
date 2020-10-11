import React from 'react';
import ToDoItem from './components/ToDoItem';
import Form from './components/Form';
import './App.css';

class App extends React.Component {
  state = { todos: [
    {title: "Todo first", content: "Do first"},
    {title: "Todo second", content: "Do second"},
    {title: "Todo third", content: "Do third"}
  ]}

  displayTodos = () => this.state.todos.map(todo => 
    <ToDoItem key={todo.title} todo={todo} deleteItem={this.deleteItem}/>
  )

  addToDo = (todo) => {
    this.setState({todos: [...this.state.todos, todo]})
  }

  deleteItem = (todo) => {
    const todos = this.state.todos.filter(existingToDo => existingToDo !== todo)
    this.setState({todos})
  }


  render() {
    return (
      <div className="App">
        <Form addToDo={this.addToDo}/>
        <h1>Hello World!</h1>
        <div>{this.displayTodos()}</div>
      </div>
    )
  }
}

export default App;
