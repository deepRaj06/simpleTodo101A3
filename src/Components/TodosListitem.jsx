import React from 'react'
import styles from './todos.module.css';

const TodosListitem = ({todo, removeBtn}) => {
  const[isCompleted, setisCompleted] = React.useState(todo.isCompleted)
  return (
    <div className={styles.todosItemMain}>
      <input 
        className={styles.tItemCheck} 
        type="checkbox" 
        checked={isCompleted}
        onChange={ (e) => {
          setisCompleted(e.target.checked);
        }}/>

        <div className={isCompleted ? styles.striked : styles.todoValue}>{todo.value}</div>

        <button
          className={styles.todoRemoveBtn} 
          onClick={() => {
          removeBtn(todo.value);
        }}>Remove</button>
    </div>
  )
}

export default TodosListitem