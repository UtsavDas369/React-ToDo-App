import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "./Styles.css";
function EditTodo(props) {
  //State Variables
  const [id, setId] = useState(null);
  const [todoname, setName] = useState("");
  const [status, setStatus] = useState(false);
  const [description, setDescription] = useState("");
  const [month, setMonth] = useState("");
  const [priority, setPriority] = useState("Low");
  const [datecomplete, setDateComplete] = useState("");

  //Update Todo getting values and inserting in input fields.
  const updateData = () => {
    const getData = props.needupdateTodo;
    if (props.isEdit) {
      console.log(getData[0].todoname);
      setName(getData[0].todoname);
      setDateComplete(getData[0].datecomplete);
      setPriority(getData[0].priority);
      setDescription(getData[0].description);
      setMonth(getData[0].month);
      setStatus(getData[0].status);
      setId(getData[0].id);
    }
  };
  //useeffect only runs when the edit button is click and the condition gets true.
  useEffect(() => {
    updateData();
  }, [props.isEdit === true]);

  //Handling Input Changes (6) fields:
  //Name
  const onNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };
  //Description
  const onDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  //Status
  const onStatuschange = (e) => {
    setStatus(e.target.checked);
  };
  //Month
  const onMonthChange = (e) => {
    setMonth(e.target.value);
  };
  //Priority
  const onPriorityChange = (e) => {
    setPriority(e.target.value);
  };
  //Date
  const onDateChange = (e) => {
    console.log(e.target.value);
    setDateComplete(e.target.value);
  };
  //Handle the Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (id === null) {
      const newTodo = {
        id: Math.floor(Math.random() * 100),
        todoname: todoname,
        description: description,
        status: status,
        month: month,
        date: datecomplete,
        priority: priority,
      };

      console.log(newTodo);
      props.upAddDataInList(newTodo);
    } else {
      const updateTodo = {
        id: id,
        todoname: todoname,
        description: description,
        status: status,
        month: month,
        date: datecomplete,
        priority: priority,
      };
      console.log(updateTodo);
      props.upUpdateTodoList(updateTodo);
    }
    //Erasing the values in input fields
    setDescription("");
    setName("");
    setStatus("");
    setMonth("");
    setDateComplete("");
    setPriority("");
  };

  return (
    <form onSubmit={handleSubmit} className="form-horizontal center_div">
      <div class="container mt-5 mb-5 d-flex justify-content-center">
        <div class="card px-1 py-4">
          <div class="card-body">
            <h1>Edit/Add Todo</h1>

            <div class="row">
              <div class="col-sm-12">
                <div class="form-group">
                  <label>Todo Name:</label>
                  <input
                    className="form-control"
                    placeholder="Todo Name"
                    id="todoname"
                    type={"text"}
                    value={todoname}
                    onChange={onNameChange}
                  ></input>
                  <br></br>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <div class="form-group">
                  <label>Description:</label>
                  <input
                    className="form-control"
                    id="description"
                    placeholder={"Description"}
                    type={"text"}
                    value={description}
                    onChange={onDescriptionChange}
                  ></input>
                  <br></br>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <div class="form-group form-control">
                  <label className="form-check-label">Status: </label>
                  <input
                    className="form-check-input"
                    id="status"
                    type={"checkbox"}
                    value={status}
                    onChange={onStatuschange}
                  ></input>
                  <br></br>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <div class="form-group">
                  <label className="form-check-label">Month:</label>
                  <select
                    className="form-control"
                    id="month"
                    type={"text"}
                    placeholder={month}
                    value={month}
                    onChange={onMonthChange}
                  >
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                  </select>
                  <br></br>

                  <label className="form-check-label">Priority:</label>
                  <br></br>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <div class="form-group form-control">
                  <input
                    className="form-check-input radio-button"
                    type={"radio"}
                    placeholder={priority}
                    value="Low"
                    checked={priority === "Low"}
                    onChange={onPriorityChange}
                  />
                  <label className="form-check-label">Low</label>

                  <input
                    className="form-check-input radio-button"
                    type={"radio"}
                    placeholder={priority}
                    value="Medium"
                    checked={priority === "Medium"}
                    onChange={onPriorityChange}
                  />
                  <label className="form-check-label">Medium</label>

                  <input
                    className="form-check-input radio-button"
                    type={"radio"}
                    placeholder={priority}
                    value="High"
                    checked={priority === "High"}
                    onChange={onPriorityChange}
                  />
                  <label className="form-check-label">High</label>

                  <br></br>
                </div>
              </div>
            </div>
            {/*For minimum date use this: {console.log(new Date().toISOString().substring(0,10))} */}
            {/*for 10 days*/}
            {console.log(
              new Date(Date.now() - 10 * 24 * 60 * 60 * 1000)
                .toISOString()
                .substring(0, 10)
            )}
            <label className="form-check-label">Date to Complete:</label>
            <input
              className="form-control"
              id="date-complete"
              placeholder={datecomplete}
              type={"date"}
              min={new Date().toISOString().substring(0, 10).toString()}
              value={datecomplete}
              onChange={onDateChange}
            ></input>
            <br></br>
            <input
              type={"submit"}
              className="btn btn-primary confirm-button"
            ></input>
          </div>
        </div>
      </div>
    </form>
  );
}

export default EditTodo;
