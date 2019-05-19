import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import TodoForm from './TodoForm.js';
import Nav from  './Nav.js';
import TodoList from './TodoList.js';

class App extends Component {
	constructor() {
	    super()
	    this.state = {
	      items: [],
	      currentIndex: 0
	    }
	    this.itemList = [];
	}

	addItem = (item) => {
		this.itemList.push({id: this.state.currentIndex + 1, value: item.newTask, done: false});
		this.setState({items: this.itemList, currentIndex: this.state.currentIndex + 1});
	}

	removeItem = (id) => {
		var index = this.itemList.findIndex(x => x.id === id);

		this.itemList.splice(index, 1);
    	this.setState({items: this.itemList});
	}

	changeStatus = (id) => {
		var index = this.itemList.findIndex(x => x.id === id);
		this.itemList[index].done = !this.itemList[index].done;

	    this.setState({items: this.itemList});  
	}

	render () {
		return (
		    <div className="app-main">
		    	<Nav />
		    	<div className="wrapper top20">
		    		<TodoList taskList={this.state.items} removeItem={this.removeItem} changeStatus={this.changeStatus}/>
		      		<TodoForm 
		      			addItem={this.addItem}
		      		/>
		      	</div>
		    </div>
		  );
	}
}

export default App;
