import styles from './Tasks.module.css';

export function Tasks() {
  return (
    <>
      <div className={styles.tasks}> </div>
      <form action=''>
        <input type='text' placeholder='ingresa una nueva tarea' />
        <button>Crear</button>
      </form>
    </>
  );
}
