import './index.css';

import TodoListItem from '../TodoListItem';

/*
Props:
  todos: array
*/

const props = {
  todos: [
    {
      id: 1,
      task: 'buy groceries',
      isComplete: true,
      category: 'to buy'
    },
    {
      id: 2,
      task: 'read Harry Potter',
      isComplete: false,
      category: 'to read'
    }
  ]
};

const TodoList = () => {
  const mappedTodos = props.todos.map((todo) => {
    return <TodoListItem 
      id={todo.id}
      task={todo.task}
      isComplete={todo.isComplete}
      category={todo.category}
      // { ...todo }
    />;
  });

  return (
    <div className="todo-list">
      <h2>All of our todos!</h2>
      { mappedTodos }
    </div>
  );
};

export default TodoList;
