import "./App.css";

import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";

function App() {
  const todoItems = [ //array of objects
    {
      name: "Buy Milk",
      dueDate: "4/10/2020",
    },
    {
      name: "Go to College",
      dueDate: "4/10/2020",
    },
    {
      name: "Learn React",
      dueDate: "right now",
    },
  ];

  return (
    <center>
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}></TodoItems> {/* passing array 'todoItems' */}
    </center>
  );
}

export default App;
