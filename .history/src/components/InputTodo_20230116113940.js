import React, { Component } from 'react'

class InputTodo extends Component {
  state = {
    title: '',
  }
 
  render() {
    return (
      <form>
        <input type='text' placeholder='Add todo...' value={this.state.title} />
      <button
       onChange={(e) => this.setState({ title: e.target.value })
      >Submit</button>
      </form>
    )
  }
}
export default InputTodo
