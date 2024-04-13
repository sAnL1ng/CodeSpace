import React, { Component } from 'react'
import TodoItem from './todoItem'


export default class todoList extends Component {

  state = {
    list: ['html','css']
  }

  render() {
    return (
      <div>
        <header>
          <input type="text" />
          <button>提交</button>
        </header>
        <TodoItem list={this.state.list}/>
      </div>
    )
  }
}
