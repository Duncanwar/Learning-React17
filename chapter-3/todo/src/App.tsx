import { useState, useEffect, useMemo, useCallback } from "react";

import List, { Todo } from "./List";

const initialTodos = [
  { id: 1, task: "Go shopping" },
  { id: 2, task: "Pay the electricity bill" },
];

function App() {
  const [todoList, setTodoList] = useState(initialTodos);
  const [task, setTask] = useState("");
  const [term, setTerm] = useState("");

  useEffect(() => {});

  const printTodoList = () => {
    console.log("Changing todoList", todoList);
  };

  useEffect(() => {
    printTodoList();
  }, [todoList, printTodoList]);

  const handleSearch = () => {
    setTerm(task);
  };

  const handleDelete = useCallback(
    (taskId: number) => {
      const newTodoList = todoList.filter((todo: Todo) => todo.id !== taskId);
      setTodoList(newTodoList);
    },
    [todoList]
  );

  const filteredTodoList = useMemo(
    () =>
      todoList.filter((todo: Todo) => {
        console.log("Filtering...", todo);
        return todo.task.toLowerCase().includes(term.toLocaleLowerCase());
      }),
    [term, todoList]
  );

  const handleCreate = () => {
    const newTodo = {
      id: Date.now(),
      task,
    };
    // publihing newTodo list
    setTodoList([...todoList, newTodo]);
    setTask("");
  };

  return (
    <>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleCreate}>Create</button>
      <button onClick={handleSearch}>Search</button>
      <List todoList={filteredTodoList} handleDelete={handleDelete} />
    </>
  );
}

export default App;
