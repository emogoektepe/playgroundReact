import React, { useEffect, useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { Todo } from './model';

// "https://www.youtube.com/watch?v=FJDVKeh7RJI&t=147s&ab_channel=freeCodeCamp.org" minute 18:15

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      const newTodo = [...todos, { id: Date.now(), todo: todo, isDone: false }];
      setTodos(newTodo);
      setTodo("");
      localStorage.setItem('todos', JSON.stringify(newTodo));
    }
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);


  return (
    <div className="app">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
