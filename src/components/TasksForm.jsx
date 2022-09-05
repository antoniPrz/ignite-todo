import { PlusCircle } from 'phosphor-react';
import styles from './TasksForm.module.css';

export function TasksForm() {
  return (
    <>
      <div className={styles.tasksFormContainer}>
        <form action='' className={styles.taskForm}>
          {/* <p>hola</p>
          <p>mundo</p> */}
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
