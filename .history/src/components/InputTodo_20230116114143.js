import React, { Component } from 'react'

class InputTodo extends Component {
  state = {
    title: '',
  }

 onChange = (e) => { },
 
  render() {
    return (
      <form>
        <input type='text' placeholder='Add todo...' value={this.state.title} />
      <button
      >Submit</button>
      </form>
    )
  }
}
export default InputTodo
