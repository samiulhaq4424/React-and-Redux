import { createContext } from "react"; 
import { useReducer } from "react";

/* 
--> "createContext" is a method used to create a 'Context object'. Context allows you to share values between components without having to pass props manually through every level of the component tree. This is especially useful for global data such as user authentication status, themes, or configuration settings.
    - createContext function in React returns an object containing two main properties:
      1) Provider: A React component that makes the context available to all its child components. You use this component to pass down the context value to the components that need it.
      2) Consumer: A React component that subscribes to the context changes. It allows components to consume the context value provided by a Provider.

-->  "reducer" function that  describes how the state changes in response to actions. This function takes two arguments:
        1) state: The current state.
        2) action: An object describing what happened.
        The "reducer" function returns the "new state based on the action".

    - "useReducer" is called with the "reducer" function and the initial state. 
    - The useReducer hook in React returns an array with two elements:
        1) state: The current state value after applying the latest action. This represents the state of your component after processing any dispatched actions.
        2) dispatch: A function that you use to send actions to the reducer function. This function allows you to update the state by passing action objects to it, which the reducer function then processes to determine the new state.

                                      const [state, dispatch] = useReducer(reducer,initialState)
    - NOTE: 
        1) useState: Best for simple state management, straightforward updates.
        2) useReducer: Ideal for complex state management and handling multiple actions.
*/

export const TodoItemsContext = createContext({ //giving the initial values to object TodoItemsContext
  todoItems: [], //empty array
  addNewItem: () => {}, //empty function
  deleteItem: () => {},
});


const todoItemsReducer = (currTodoItems, action) => { //reducer function, heere dispatchTodoItems pass newItemAction as action
  let newTodoItems = currTodoItems;
  if (action.type === "NEW_ITEM") { //action ka object for adding new item
    newTodoItems = [...currTodoItems, { name: action.payload.itemName, dueDate: action.payload.itemDueDate },];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter((item) => item.name !== action.payload.itemName);
  }
  return newTodoItems;
};


const TodoItemsContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (itemName, itemDueDate) => { //action ka object for adding new item
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  const deleteItem = (todoItemName) => { //action ka object for deleting item
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoItemName,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}>
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;
