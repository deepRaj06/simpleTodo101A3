import React from 'react'
import TodosInput from './TodosInput.jsx'
import TodosList from './TodosList.jsx'
import TodosListitem from './TodosListitem.jsx'
import {v4 as uuidv4} from 'uuid';
import styles from './todos.module.css';


const TodosApp = () => {
    const[todos, setTodos] = React.useState([]);

    const addItem = (newtodo) => {

        setTodos([
            ...todos, 
            {
                id: uuidv4(),
                value: newtodo,
                isCompleted: false
            }

        ])

    }
    const removeBtn = (value) => {
        let filteredTodo = todos.filter( (todo) => {
            return todo.value !== value
        })
        setTodos(filteredTodo);
    }
  return (
    <div className={styles.todosBgColor}>
        <TodosInput addItem={addItem}></TodosInput>

        <TodosList>
        {todos.map( (todo) => (
            <TodosListitem key={todo.id} todo={todo} removeBtn={removeBtn}></TodosListitem>
        ))}
        </TodosList>
    </div>
  )
}

export default TodosApp