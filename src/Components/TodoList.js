import React from "react";
import Todo from "./Todo";

function TodoList(props) {
  const todoData = props.todoData;
  //Get ID of the todo
  const getId = (e) => {
    // console.dir(e.target.getAttribute("todo-index"))
    if (e.target.getAttribute("id") === "delete-button") {
      console.log("In delete Button");
      const index = Number(e.target.getAttribute("todo-index"));
      console.log(index);
      props.upDeleteData(index);
    } else {
      const index = Number(e.target.getAttribute("todo-index"));

      const data = todoData.filter((obj) => obj.id === index);
      const editable = true;
      console.log(data);
      props.upUpdateData(data, editable);
    }
  };

  return (
    <div>
      {todoData.map((x) => (
        <div key={x.id}>
          <Todo
            todoname={x.todoname}
            priority={x.priority}
            description={x.description}
            status={x.status}
            date={x.date}
            month={x.month}
          />
          <button todo-index={x.id} className="btn btn-primary" onClick={getId}>
            Edit Todo
          </button>
          <button
            id="delete-button"
            className="btn btn-primary"
            todo-index={x.id}
            onClick={getId}
          >
            Delete Todo
          </button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
