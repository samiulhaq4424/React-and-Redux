import { useState } from "react";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    // console.log(event);
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    // console.log(event);
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setDueDate("");//after adding it will reset, that is input display blank hga
    setTodoName("");
  };

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={todoName} // so it can take value from todoName
            onChange={handleNameChange}/>
        </div>
        <div className="col-4">
          <input 
          type="date" 
          value={dueDate} // so it can take value from todoDate
          onChange={handleDateChange} //use the onKeyDown event handler to update the state when a key is pressed in the input fields. However, onKeyDown is used to handle keyboard events, not input changes. For updating the state based on input changes, you should use the onChange event handler.
          /> 
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddButtonClicked}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
