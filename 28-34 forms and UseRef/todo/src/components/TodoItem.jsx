import styles from "./TodoItem.module.css";
import { AiFillDelete } from "react-icons/ai"; //using react-icons

function TodoItem({ todoName, todoDate, onDeleteClick }) {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className={`col-6 ${styles.myClass}`}>{todoName}</div>
        <div className={`col-4 ${styles.myClass}`}>{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => onDeleteClick(todoName)}>
              {/* using react icons */}
            <AiFillDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
