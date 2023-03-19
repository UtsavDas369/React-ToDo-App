import React from "react";
import "./Styles.css";
function Todo(props) {
  //TodoUI

  return (
    <div>
      <div class="container mt-5 mb-5 d-flex justify-content-center">
        <div class="card px-1 py-4">
          <div class="card-body">
            <h1>{props.todoname}</h1>
            <h4>{props.description}</h4>
            <p style={props.status ? { color: "green" } : { color: "red" }}>
              {props.status ? "Completed" : "Pending"}
            </p>
            <h2>Month: {props.month}</h2>
            <p>Date: {props.date}</p>
            <p>Priority : {props.priority}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
