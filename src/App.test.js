import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from './enzyme';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


describe('addTodo', ()=>{
   it('should add todo to the list', () => {
      const wrapper = shallow(<App />);
      const instance = wrapper.instance();

      const newTodo = { newTask: "first task" } 
      const expected = [
         { id: 1, value: 'first task', done: false }
      ]
      instance.addItem(newTodo)
      expect(wrapper.state('items')).toEqual(expected)
   }),

   it('should remove todo from the list', () => {
      const wrapper = shallow(<App />);
      const instance = wrapper.instance();

      const firstTodo = { newTask: "first task" }
      const secTodo = { newTask: "second task" } 
      const expected = [
         { id: 2, value: 'second task', done: false }
      ]

      instance.addItem(firstTodo)
      instance.addItem(secTodo)

      instance.removeItem(1)
      expect(wrapper.state('items')).toEqual(expected)
   })


   it('should change status of todo in the list', () => {
      const wrapper = shallow(<App />);
      const instance = wrapper.instance();

      const firstTodo = { newTask: "first task" }
      const expected = [
         { id: 1, value: 'first task', done: true }
      ]
      
      instance.addItem(firstTodo)

      instance.changeStatus(1)
      expect(wrapper.state('items')).toEqual(expected)
   })
})