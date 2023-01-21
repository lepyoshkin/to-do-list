import React from 'react';

export type TaskType = {
  id: number;
  title: string;
  isDone: boolean;
};

type PropsType = {
  title: string;
  tasks: Array<TaskType>;
};

function Todolist(props: PropsType) {
  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input type="text" />
        <button>+</button>
      </div>
      <ul>
        {' '}
        {props.tasks.map((task) => {
          return (
            <li>
              <input type="checkbox" checked={task.isDone} />
              {task.title}
            </li>
          );
        })}
      </ul>

      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </div>
  );
}

export default Todolist;
