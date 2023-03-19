import React, { useState } from "react";
import EditTodo from "./EditTodo";

import TodoList from "./TodoList";

function TodoData() {
  //Dummy Todo Data
  const [todoData, setTodoData] = useState([
    {
      id: 123,
      todoname: "Bake Cake",
      description: "Bake Strawberry Cake for George Birthday.",
      status: false,
      month: "December",
      date: "2023-01-01",
      priority: "Low",
    },

    {
      id: 2,
      todoname: "Learn React",
      description: "Learn React",
      status: true,
      month: "July",
      date: "2023-02-01",
      priority: "High",
    },
    {
      id: 3,
      todoname: "Shopping",
      description: "Buy Vegetable and fruits",
      status: false,
      month: "July",
      date: "2023-01-02",
      priority: "Medium",
    },
  ]);
  //Some state Variables
  const [upDateData, setUpDateData] = useState("");
  const [isEditable, setEditable] = useState(false);

  //Add Todo
  const setNewData = (newData) => {
    console.log(newData);
    setTodoData([...todoData, newData]);
  };

  //Update Todo
  const setUpdatedTodo = (updateData) => {
    console.log(updateData);
    const indexCut = todoData.findIndex((i) => i.id === updateData.id);
    // todoData[indexCut] = updateData;

    const newArray = todoData.map((item, i) =>
      indexCut === i ? updateData : item
    );
    console.log(newArray);
    setTodoData(newArray);
    // setTodoData(()=>{

    //     console.log({...todoData[indexCut],updateData})
    //     // return [
    //     //     ...todoData.slice(0, indexCut),{...todoData[indexCut],updateData},...todoData.slice(indexCut+1)
    //     // ]

    // })
  };

  //Get Data From Two Way Binding
  const updateData = (data, editable) => {
    console.log(data);
    setUpDateData(data);
    setEditable(editable);
  };

  //Delete Todo
  const deleteData = (index) => {
    console.log(index);
    const indexCut = todoData.findIndex((i) => i.id === index);
    console.log(indexCut);
    if (indexCut > -1) {
      todoData.splice(indexCut, 1);
      console.log(todoData);
      setTodoData([...todoData]);
    }
  };

  return (
    <div>
      <EditTodo
        upAddDataInList={setNewData}
        needupdateTodo={upDateData}
        isEdit={isEditable}
        upUpdateTodoList={setUpdatedTodo}
      />
      <TodoList
        todoData={todoData}
        upUpdateData={updateData}
        upDeleteData={deleteData}
      />
    </div>
  );
}

export default TodoData;
