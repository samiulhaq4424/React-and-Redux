function AddTodo() {
  return (
    <div className ="container">
      <div className ="row sam-row">
        <div className ="col-6">
          <input type="text" placeholder="Enter Todo Here" /> {/* for text input */}
        </div>
        <div className ="col-4">
          <input type="date" /> {/* for date */}
        </div>
        <div className ="col-2">
          <button type="button" className ="btn btn-success Mybutton"> 
            {/* ADD button, taken from bootstrap: https://getbootstrap.com/docs/5.3/components/buttons/ */}
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;

/*
Above code is taken from bootstarp and it is modified: https://getbootstrap.com/docs/5.3/layout/grid/

<div className ="container text-center">
  <div className ="row">
    <div className ="col">col</div>
    <div className ="col">col</div>
    <div className ="col">col</div>
    <div className ="col">col</div>
  </div>
  <div className ="row">
    <div className ="col-8">col-8</div>
    <div className ="col-4">col-4</div>
  </div>
</div>

*/
