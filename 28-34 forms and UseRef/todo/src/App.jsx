import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    // Using the functional form of the state updater (setTodoItems((currValue) => ...) ensures you are working with the most recent state, which is particularly useful in scenarios where state updates may be batched or delayed.

    /* below is a short-hand:
    setTodoItems((currValue) =>{
      const newTodoItems=[...currValue,{ name: itemName, dueDate: itemDueDate },];
      return newTodoItems;
    });
    */
    setTodoItems((currValue) => [...currValue,{ name: itemName, dueDate: itemDueDate }]);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem}/>
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItem}>
      </TodoItems>
    </center>
  );
}

export default App;
