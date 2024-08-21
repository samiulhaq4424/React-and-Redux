import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems }) => { //taking array
  return (
    <div>
      {todoItems.map((item) => (
        <TodoItem 
          key={item.name} 
          todoDate={item.dueDate} 
          todoName={item.name}>
        </TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
