import React from 'react';
import Todolist from './Todolist';
import './App.css';
import {TaskType} from './Todolist';

function App() {
  let tasks1: Array<TaskType> = [
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

  let tasks2: Array<TaskType> = [
    {
      id: 1,
      title: 'html2',
      isDone: true,
    },
    {
      id: 2,
      title: 'CSS2',
      isDone: false,
    },
    {
      id: 3,
      title: 'js2',
      isDone: true,
    },
    {
      id: 4,
      title: 'React2',
      isDone: false,
    },
  ];

  return (
    <div className="App">
      <Todolist title="What to learn" tasks={tasks1} />
      <Todolist title="Movies" tasks={tasks2} />
    </div>
  );
}

export default App;
