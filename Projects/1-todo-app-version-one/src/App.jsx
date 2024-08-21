import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";
import "./App.css";

function App() {
  //don't write "class", write "className"
  return (
    <center> 
      <AppName />
      <AddTodo />
      <div>
        <TodoItem1></TodoItem1>
        <TodoItem2></TodoItem2>
      </div>
    </center>
  );
  // Using <center> to center content is outdated and not recommended in modern HTML and CSS. Instead, you should use CSS for centering elements.
}

export default App;
