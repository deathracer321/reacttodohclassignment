import React, { useContext } from "react";
import "./TodoList.css";
import { MyContext } from "../App";

function TodoList() {
  const { todoList, setTodoList } = useContext(MyContext);

  const deleteTodoHandler = (event) => {
    let newArr = [...todoList];
    newArr.splice(event.target.value, 1);
    setTodoList(newArr);
  };

  const onStatusChangeHandler = (event, index) => {
    let newArr = [...todoList];
    console.log(event.target.value);
    console.log(index);
    newArr[index].status = event.target.value;
    setTodoList(newArr);
  };

  return (
    <div className="todoList-content">
      <table className="todoList-table">
        <tbody>
          <tr>
            <th>Number</th>
            <th>TODO</th>
            <th>PER/PRO</th>
            <th>Aimed Date</th>
            <th>Status</th>
            <th>Delete</th>
          </tr>
          {todoList?.map((eachTodo, ind) => {
            return (
              <tr key={ind}>
                <td>{ind + 1}</td>
                <td>{eachTodo.addTodoValue}</td>
                <td>{eachTodo.selectedOption}</td>
                <td>{eachTodo.inputDate}</td>
                <td>
                  {eachTodo.status}
                  <br></br>
                  <select
                    name="selectedOption"
                    id="selectedOption"
                    onChange={(event) => onStatusChangeHandler(event, ind)}
                  >
                    <option value="">Edit</option>
                    <option value="Pending">Pending</option>
                    <option value="InProgress">In-Progress</option>
                    <option value="Completed">Completed</option>
                  </select>
                </td>
                <td>
                  <button
                    value={ind}
                    onClick={deleteTodoHandler}
                    className="todoList-deleteButton"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TodoList;

// number   todo    P/P   DateFixed  status
