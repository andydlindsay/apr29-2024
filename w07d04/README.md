# W07D04 - React Developer Workflow

### To Do
* [x] CRA Alternatives
* [x] Project Structure
* [x] Data Structure/Wireframe
* [x] Component Selection
* [x] Building Components in Isolation
  * [x] Styling with hardcoded values
  * [x] Passing props
  * [x] Conditional rendering
* [x] React DevTools
* [x] `build` Command

src
  components
    Hello.jsx
    Hello.css
  styles
    Hello.css

src
  components
    Hello
      index.jsx
      index.css
    About
      index.jsx
      index.css
      ContactUs
        index.jsx

Todo App
  * see all the todos
  * mark a todo as complete/incomplete
  * be able to remove/delete a todo
  * create a brand new todo

Data Structure

```js
const todo = {
  id: 1,
  task: 'buy groceries',
  isComplete: false,
  category: 'to buy'
};

const todos = [];
```

Component Selection
App - state: todos
  NavBar - props: todos
  TodoList - props: todos
    TodoListItem - props: todo
  TodoForm - state: formData, props: setTodos
  Footer

Building Components in Isolation
* very diff to create/style components in the DOM tree
* rendering each component on it's own in App
* test the props
















