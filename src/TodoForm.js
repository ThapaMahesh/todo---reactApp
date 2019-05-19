import React, {Component} from 'react';


class TodoForm extends Component {

	constructor(props){
		super(props)
		this.state = {value: ''};
	}

	componentDidMount = () => {
	    this.refs.itemName.focus();
	}

	onSubmit = e => {
		e.preventDefault();

		var newTask = this.state.value;

		if(newTask !== ""){
			this.props.addItem({newTask});
			this.resetForm();
			this.componentDidMount();
		}
	}

	updateState = e => {
		this.setState({value: e.target.value});
	}

	resetForm = () => {
		this.setState({value: ''})
	}

	render () {
		return (
		    <div className="todo-main top20">
		      <form ref={form => this.form = form} onSubmit={this.onSubmit}>
				  <div className="form-group">
				    <input type="text" ref="itemName" value={this.state.value} onChange={this.updateState}  className="form-control" id="task" placeholder="Tasks to complete..." />
				  </div>
				  <button type="submit" className="btn btn-primary">Submit</button>
				</form>
		    </div>
		  );
	}
}

export default TodoForm;
