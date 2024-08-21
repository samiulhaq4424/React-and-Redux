function TodoItem2() {
  let todoName = "Go to College";
  let todoDate = "4/10/2023";

  return (
    <div className ="container">
      <div className ="row sam-row">
        <div className ="col-6 myClass">{todoName}</div>
        <div className ="col-4 myClass">{todoDate}</div>
        <div className ="col-2">
          <button type="button" className ="btn btn-danger Mybutton">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem2;
