import React from 'react'
import styles from './TodoItem.module.css'

class TodoItem extends React.Component {
 render() {

  const { completed, id, title } = this.props.todo

   const completedStyle = {
     fontStyle: 'italic',
     color: '#595959',
     opacity: 0.4,
     textDecoration: 'line-through',
   }
  
   return (
    div
   )
  }
}

export default TodoItem
