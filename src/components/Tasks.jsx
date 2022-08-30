import { PlusCircle } from 'phosphor-react';
import styles from './Tasks.module.css';

export function Tasks() {
  return (
    <>
      <div className={styles.tasks}>
        <form action='' className={styles.taskForm}>
          {/* <p>hola</p>
          <p>mundo</p> */}
          <input
            type='text'
            placeholder='Ingresa una nueva tarea'
            className={styles.taskInput}
          />
          <button className={styles.taskButton}>
            Crear
            {<PlusCircle size={20} />}
          </button>
        </form>
      </div>
    </>
  );
}
