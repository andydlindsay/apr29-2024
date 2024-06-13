// import './App.css'

import {useState} from 'react';

import TodoList from "./components/TodoList"

const App = () => {
  useState('Thursday');

  return (
    <>
      <h1>Hello world!!!!</h1>
      <TodoList />
    </>
  )
}

export default App
