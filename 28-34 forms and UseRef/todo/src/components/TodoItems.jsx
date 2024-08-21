import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name} //key given
          todoDate={item.dueDate}
          todoName={item.name}
          onDeleteClick={onDeleteClick}>
        </TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
