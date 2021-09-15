import './App.css';

// Tasks imports
import Task1 from './exam-tasks/task-1/Task1';
import Task2 from './exam-tasks/task-2/Task2';
import Task3 from './exam-tasks/task-3/Task3';
import Task4 from './exam-tasks/task-4/Task4';
import Task5 from './exam-tasks/task-5/Task5';
import Task6 from './exam-tasks/task-6/Task6';
import Task7 from './exam-tasks/task-7/Task7';

function App() {
  return (
    <div className='App'>
      <Task1 />
      <hr />

      <Task2 />
      <hr />

      <Task3 />
      <hr />

      <Task4 />
      <hr />

      <Task5 />
      <hr />

      <Task6 />
      <hr />

      {/* <Task7 />
      <hr /> */}
    </div>
  );
}

export default App;
