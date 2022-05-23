import React from 'react'
import styles from './todos.module.css';

const TodosList = ({children}) => {
  return (
    <>
      <ul className={styles.todoUlPadding}>{children}</ul>
    </>
  )
}

export default TodosList