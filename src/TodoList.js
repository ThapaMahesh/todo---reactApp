import React, { Component } from 'react'

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  onClickClose = e => {
    this.props.removeItem(parseInt(e.target.value));
  }

  onClickDone = e => {
  	this.props.changeStatus(parseInt(e.target.value));
  }

  createListView = item => {
  	let todoClass = item.done ? "text-success complete" : "text-danger";
    return (
    		<li key={item.id} className="list-group-item ">
		        <div>
		          <label className={todoClass}>
		          <input type="checkbox" value={item.id} onClick={this.onClickDone} />
		          {item.value}
		          </label>
		          <button type="button" value={item.id} className="close" onClick={this.onClickClose}>&times;</button>
		        </div>
		      </li>
    	);
  }
  render() {
    const todoEntries = this.props.taskList
    const listItems = todoEntries.map(this.createListView)
    return <ul className="list-group">{listItems}</ul>
  }
}
export default TodoList