import { useState } from "react"
import Header from "./components/Header"
import TodoInput from "./components/TodoInput"
import Todo from "./components/Todo";



function App() {
  const [todos, setTodos] = useState([{
    id: "1",
    task: "Demo task"
  }]);

  //ADD TODO
  const addTodo = (newTodo) => {
    setTodos(prevTodos => [...prevTodos, newTodo])
  }

  const deleteTodo = (todoId) => {
    setTodos(todos.filter(todo => todo.id !== todoId))
  }

  console.log(todos)

  return (
    <>
      <Header />
      <TodoInput addTodo={addTodo} />
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} />
      ))}

      {/* <MotionFramer /> */}
    </>
  )
}

export default App
