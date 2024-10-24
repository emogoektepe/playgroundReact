import React from 'react';
import "./styles.css";
import { Todo } from '../model';
import SingleTodo from './SingleTodo';

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
    return (
        <div className="todos">
            {
                todos.length > 0 ? (
                    todos.map(todo => (
                        <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
                    ))
                ) : (
                    <div style={{ textAlign: "center", fontSize: "50px" }}>Nothing to do here!</div>
                )
            }
        </div>
    );
};

export default TodoList;