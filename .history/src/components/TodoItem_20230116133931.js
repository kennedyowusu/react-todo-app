import React from 'react'
import styles from './TodoItem.module.css'

class TodoItem extends React.Component {
 render() {
   const completedStyle = {
     fontStyle: 'italic',
     color: '#595959',
     opacity: 0.4,
     textDecoration: 'line-through',
   }
  
   return (
     <li className={styles.item}>
       <input
         type='checkbox'
         className={styles.checkbox}
         checked={this.props.todo.completed}
         onChange={() => this.props.handleChangeProps(this.props.todo.id)}
       />
       <button onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>
         Delete
       </button>
       {this.props.todo.title}
     </li>
   )
  }
}

export default TodoItem
