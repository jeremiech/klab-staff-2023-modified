import axios from "axios";
import React from "react";
import { useState } from "react";
function Listing() {
  const [employees, setEmployees] = useState([]);
  const url = "http://localhost:5000/employee";
  axios
    .get(url)
    .then((res) => {
      setEmployees(res.data);
    })
    .catch((err) => {
      console.log(err.message);
    });
  console.log(employees);
  return (
    <div className="cont">
      {employees
        ? employees.map((data) => {
          <table>
              <thead>
                <th>ID</th>
                <th>Date of B</th>
                <th>Email</th>
                <th>Gender</th>
              </thead>
              <tbody>
                <tr>
                  <td key={data.id}>{data.val.full}</td>
                  <td key={data.id}>{data.val.dob}</td>
                  <td key={data.id}>{data.val.email}</td>
                  <td key={data.id}>{data.val.sx}</td>
                </tr>
              </tbody>
            </table>;
            
            
            

          })
        : "No Data Found"}
    </div>
  );
}

export default Listing;
