import { CheckCircle, Trash } from 'phosphor-react';
import styles from './TaskList.module.css';
export function TaskList() {
  return (
    <>
      <div className={styles.tasklistContainer}>
        <header className={styles.taskListHeader}>
          <div>
            <strong className={styles.created}>Tareas creadas</strong>
            <span>5</span>
          </div>
          <div>
            <strong className={styles.finished}>Concluidas</strong>
            <span>2 de 5</span>
          </div>
        </header>
        <ul className={styles.taskList}>
          <li>
            <CheckCircle size={20} weight='fill' color='var(--purple)' />
            <p>
              Fix the bugs Lorem ipsus af DDdasava advaV wf adipisicing F q
              dolor siddt amet consectetur adipisicing elit. Impedit, asci?
            </p>{' '}
            <Trash size={20} />{' '}
          </li>
          <li>
            <CheckCircle size={20} weight='fill' color='var(--purple)' />
            <p>
              Fix the bugs Lorem ipsus af DDdasava advaV wf adipisicing F q
              dolor siddt amet consectetur adipisicing elit. Impedit, asci?
            </p>{' '}
            <Trash size={20} />{' '}
          </li>
          <li>
            <CheckCircle size={20} weight='fill' color='var(--purple)' />
            <p>
              Fix the bugs Lorem ipsus af DDdasava advaV wf adipisicing F q
              dolor siddt amet consectetur adipisicing elit. Impedit, asci?
            </p>{' '}
            <Trash size={20} />{' '}
          </li>
          <li>
            <CheckCircle size={20} weight='fill' color='var(--purple)' />
            <p>
              Fix the bugs Lorem ipsus af DDdasava advaV wf adipisicing F q
              dolor siddt amet consectetur adipisicing elit. Impedit, asci?
            </p>{' '}
            <Trash size={20} />{' '}
          </li>
          <li>
            <CheckCircle size={20} weight='fill' color='var(--purple)' />
            <p>
              Fix the bugs Lorem ipsus af DDdasava advaV wf adipisicing F q
              dolor siddt amet consectetur adipisicing elit. Impedit, asci?
            </p>{' '}
            <Trash size={20} />{' '}
          </li>
        </ul>
      </div>
    </>
  );
}
