import { PlusCircle } from 'phosphor-react';
import { useState } from 'react';
import styles from './TasksForm.module.css';

export function TasksForm() {
  const [newTask, setNewTask] = useState({});
  const [newTaskList, setNewTaskList] = useState([]);

  return (
    <>
      <div className={styles.tasksFormContainer}>
        <form action='' className={styles.taskForm}>
          <input
            type='text'
            placeholder='Ingresa una nueva tarea'
            className={styles.taskInput}
          />
          <button className={styles.taskFormButton}>
            Crear
            {<PlusCircle size={20} />}
          </button>
        </form>
      </div>
    </>
  );
}
