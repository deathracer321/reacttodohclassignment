import React, { useContext } from "react";
import "./TodoList.css";
import { MyContext } from "../App";

function TodoList() {
  const { todoList, setTodoList } = useContext(MyContext);

  return (
    <>
      <table>
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
                <td>{eachTodo.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default TodoList;

// number   todo    P/P   DateFixed  status
