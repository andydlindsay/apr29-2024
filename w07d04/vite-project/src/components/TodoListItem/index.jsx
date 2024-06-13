/*
Props:
  todo:
    id: number,
    task: string,
    isComplete: boolean,
    category: string,
*/

import './index.css';

// const props = {
//   id: 123,
//   task: 'walk the dog',
//   isComplete: true,
//   category: 'animal care'
// };

const TodoListItem = (props) => {
  return (
    <div className="todo-list-item">
      <section>
        { props.isComplete && <h2>✅</h2> }
        { !props.isComplete && <h2>🟩</h2> }
        <h2>Task: {props.task} ({props.id})</h2>
      </section>
      <h3>Category: {props.category}</h3>
    </div>
  );
};

export default TodoListItem;
