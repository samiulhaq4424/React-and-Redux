import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";

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
      {/* passing array 'todoItems' below */}
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
