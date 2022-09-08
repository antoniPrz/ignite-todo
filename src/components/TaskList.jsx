import { CheckCircle, Trash } from 'phosphor-react';
import styles from './TaskList.module.css';
export function TaskList() {
  const tasks = [
    {
      id: 1,
      title: 'Comprar HD',
      isFinished: false,
    },
    {
      id: 2,
      title: 'Limpiar mesa de trabajo',
      isFinished: false,
    },
    {
      id: 3,
      title: 'Hacer respaldo',
      isFinished: false,
    },
    {
      id: 4,
      title: 'Llamar por telefono',
      isFinished: false,
    },
    {
      id: 5,
      title: 'Revisar trabajo',
      isFinished: false,
    },
    {
      id: 6,
      title: 'Formatear disco duro',
      isFinished: true,
    },
  ];

  return (
    <>
      <div className={styles.tasklistContainer}>
        <header className={styles.taskListHeader}>
          <div>
            <strong className={styles.created}>Tareas creadas</strong>
            <span>{tasks.length}</span>
          </div>
          <div>
            <strong className={styles.finished}>Concluidas</strong>
            <span>2 de {tasks.length}</span>
          </div>
        </header>
        <ul className={styles.taskList}>
          {tasks.map((task) => {
            return (
              <li>
                <CheckCircle size={20} weight='fill' color='var(--purple)' />
                <p key={task.id}>{task.title}</p> <Trash size={20} />{' '}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
