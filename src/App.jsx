import { Header } from './components/Header';
import { TaskList } from './components/TaskList';
import { TasksForm } from './components/TasksForm';
import './global.css';
function App() {
  return (
    <div>
      <Header />
      <TasksForm />
      <TaskList />
    </div>
  );
}

export default App;
