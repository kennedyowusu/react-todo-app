import React from 'react'

class TodoItem extends React.Component {
 render() {
   onChange={() => this.props.handleChangeProps()}
   return (
     <li>
       <input
         type='checkbox'
         checked={this.props.todo.completed}
         onChange={() => console.log('clicked')}
       />
       {this.props.todo.title}
     </li>
   )
  }
}

export default TodoItem
