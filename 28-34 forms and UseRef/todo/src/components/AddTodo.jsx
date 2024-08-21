import { useRef } from "react"; //importing useRef
import { BiMessageAdd } from "react-icons/bi"; //importing react-icons "BiMessageAdd"

function AddTodo({ onNewItem }) {
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();//default behaviour ha onSubmit ka data collect karo and server pe bhj do, so event.preventDefault() says ki ap kch mat karo, jo karna ha wo me khud karlunga jaise defined kiya jayega, you can see by commenting it kya hoga
    /**here, todoNameElement.current is the input element jaha todoNameElement is passed as reference, and todoNameElement.current.value is the value inside the input */
    const todoName = todoNameElement.current.value; // here is todoNameElement.current is <input> and todoNameElement.current.value is the value of input
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    onNewItem(todoName, dueDate);
  };

  return (
    <div className="container">
      {/* using form instead of div*/}
      {/* "onSubmit" is an event handler used in forms to define what should happen when a user submits the form. This can be particularly useful for validating form data, preventing the default form submission */}
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>  
        <div className="col-6"> 
          <input
            type="text" //here "value" not defined, we
            ref={todoNameElement} //reference to this input
            placeholder="Enter Todo Here"/>
        </div>
        <div className="col-4">
          <input 
          type="date" 
          ref={dueDateElement}//reference to this input
          />
        </div>
        <div className="col-2">
          {/* in "form", button has by default type="submit", even if you don't write it chalega, see what will happen if you remove "type" */}
          <button type="submit" className="btn btn-success kg-button"> 
            {/* we are using react-icons "BiMessageAdd", write inside <name/> by copying name from the website */}
            <BiMessageAdd />  
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
