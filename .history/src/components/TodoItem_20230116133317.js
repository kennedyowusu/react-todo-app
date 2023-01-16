import React from 'react'
import styles from './TodoItem.module.css'

class TodoItem extends React.Component {
  render() {
   return (
     <>
       <li>
         <input
           type='checkbox'
           checked={this.props.todo.completed}
           onChange={() => this.props.handleChangeProps(this.props.todo.id)}
         />
         {this.props.todo.title}
       </li>
     <button
      onClick={() => this.props.deleteTodoProps(this.props.todo.id)}
     >Delete</button>
     </>
   )
  }
}

export default TodoItem
