import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./all.css";
import axios from "axios";

function Dashboard() {
  const baseURL="https://library-books-api.onrender.com/book/list/63b80059ca75354b962eac69";
  const navigate = useNavigate();
  const [book, setBook] = useState(null);


  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setBook(response.data);
    }).catch(err=>console.log(err));
  }, []);

  console.log(book)

  return (
    <Fragment>
      <div>this is Dashboard</div>
      {/* <div>
      <h1>{book.title}</h1>
      <p>{book.body}</p>
    </div> */}
      {/* <ul>
        <li>{book.title}</li>
        <li>{book.ISBN}</li>
        <li>{book.publisher}</li>
      </ul> */}
      <div
        onClick={() => navigate("/")}
        style={{
          cursor: "pointer",
          width: "80px",
          height: "30px",
          textAlign: "center",
          padding: "7px 14px",
        }}
      >
        Back Home
      </div>
    </Fragment>
  );
}

export default Dashboard;
