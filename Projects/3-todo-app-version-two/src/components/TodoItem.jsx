import styles from "./TodoItem.module.css";

function TodoItem({ todoName, todoDate }) { //here passing todoName, todoDate as arguement
  return (
    <div className="container">
      <div className="row kg-row">
        <div className={`col-6 ${styles.myClass}`}>{todoName}</div>
        <div className={`col-4 ${styles.myClass}`}>{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
