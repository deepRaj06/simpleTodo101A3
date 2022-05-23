import React from 'react'
import styles from './todos.module.css';

const TodosInput = ({addItem}) => {
  const [value, setValue] = React.useState('');
  return (
    <div className={styles.mainInput}>
      <input 
        className={styles.inputBar}
        type="text" 
        value={value}
        placeholder='Write Something'
        onChange={ (e) => {
          setValue(e.target.value);
        }}/>

        <button
          className={styles.inputBtn}
          onClick={ () => {
            if(value !== '')
            {
              addItem(value);
            }
            setValue('');
          }}>
          +
        </button>
    </div>
  )
}

export default TodosInput