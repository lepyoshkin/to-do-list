import React, {useState} from 'react';
import Todolist from './Todolist';
import './App.css';
import {TaskType} from './Todolist';

export type FilterValuesType = 'all' | 'completed' | 'active';

function App() {
  let initTasks: Array<TaskType> = [
    {
      id: 1,
      title: 'html',
      isDone: true,
    },
    {
      id: 2,
      title: 'CSS',
      isDone: false,
    },
    {
      id: 3,
      title: 'js',
      isDone: true,
    },
    {
      id: 4,
      title: 'React',
      isDone: false,
    },
  ];

  const [tasks, setTasks] = useState<Array<TaskType>>(initTasks);
  const [filter, setFilter] = useState<FilterValuesType>('all');

  const removeTask = (id: number) => {
    let filteredTasks = tasks.filter((task: TaskType) => task.id !== id);
    setTasks(filteredTasks);
  };

  const changeFilter = (value: FilterValuesType) => setFilter(value);

  let tasksForTodoList = tasks;

  if (filter === 'completed') {
    tasksForTodoList = tasks.filter((task) => task.isDone === true);
  }

  if (filter === 'active') {
    tasksForTodoList = tasks.filter((task) => task.isDone === false);
  }

  return (
    <div className="App">
      <Todolist
        title="What to learn"
        tasks={tasksForTodoList}
        removeTask={removeTask}
        changeFilter={changeFilter}
      />
    </div>
  );
}

export default App;
