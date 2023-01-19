import React, { Fragment } from "react";
import { FiSend } from "react-icons/fi";
import { HiBuildingOffice } from "react-icons/hi2";
import { FaUserAlt } from "react-icons/fa";
import { BsFillCalendar2DateFill } from "react-icons/bs";
import { TbGenderAndrogyne } from "react-icons/tb";
import { TfiEmail } from "react-icons/tfi";
import "./reg.css";
import axios from "axios";
import { useState } from "react";
function Register() {
  const client = axios.create({
    baseURL: "http://localhost:5000/employee"
  });
// const url=     "http://localhost:5000/employee"


  const [val, setVal] = useState({});
  const [posted,setPosted]=useState(null)
  const handleInputChange = (e) => {
    const names = e.target.name;
    const value = e.target.value;
    setVal((ev) => ({ ...ev, [names]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    client.post(val)
.then(res=>{
    setPosted(res.data)
}).catch(err=>{
    console.log("this was error while posting data",err.message)
})
};

  return (
    <Fragment>
      <form onSubmit={e=>handleSubmit(e)}>
      <div className="container">
      
        <div className="head">
          <p>Regist Form</p>
        </div>
        <div className="input-continer">
          <FaUserAlt className="icon" />
          <input
            placeholder="Full name"
            value={val.full}
            onChange={(e) => handleInputChange(e)}
            name="full"
            type="text"
            className="input-form"
          />
        </div>
        <div className="input-continer">
          <BsFillCalendar2DateFill className="icon" />
          <input
            type="date"
            placeholder="DOB"
            value={val.dob}
            onChange={(e) => handleInputChange(e)}
            name="dob"
            className="input-form"
          />
        </div>
        <div className="input-continer">
          <TbGenderAndrogyne className="icon" />
          <input
            type="radio"
            name="sx"
            onChange={(e) => handleInputChange(e)}
            className="sx"
            value="M"
          />
          <label>Male</label>
          <input
            type="radio"
            onChange={(e) => handleInputChange(e)}
            name="sx"
            className="sx"
            value="F"
          />
          <label>Female</label>
        </div>
        <div className="input-continer">
          <TfiEmail className="icon" />
          <input
            type="email"
            placeholder="Email"
            className="input-form"
            name="email"
            value={val.email}
            onChange={e=>handleInputChange(e)}
          />
        </div>
        {/* <div className="input-continer">
            <HiBuildingOffice className="icon" />
            <div className="input-form">
            <input type="checkbox"  name="staff" className="posit" /> <label>Staff</label>
            <input type="checkbox"  className="posit" /><label>Ord</label>
            <input type="checkbox"  className="posit" /><label>Maint</label>
            </div>

        </div> */}

        <div className="input-button">
          <button type="submit" className="btn">
            Submit <FiSend className="icon" />
          </button>
        </div>
      </div>
      </form>
    </Fragment>
  );
}

export default Register;
