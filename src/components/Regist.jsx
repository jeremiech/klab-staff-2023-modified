import React from "react";
import { useState } from "react";
import './regist.css'
function Regist() {
  const [inputs, setInputs] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    console.log(inputs);
    alert(inputs)
  }
  function handleChange(e) {
    const names = e.target.name;
    const value = e.target.value;

    setInputs((val) => ({ ...val, [names]: value }));
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
   <div className="bd">
   <label htmlFor="full">Full name</label>
      <input
        type="text"
        name="full"
        value={inputs.full ||""}
        onChange={(e) => handleChange(e)}
        id="full"
      />
      <label htmlFor="age">Age</label>
      <input
        type="date"
        value={inputs.age || ""}
        onChange={(e) => handleChange(e)}
        name="age"
      />
      <label htmlFor="clevel">Class Level</label>
      <select value={inputs.lv || ""} onChange={(e) => handleChange(e)} name="lv">
        <option value="lower">Lower</option>
        <option value="medium">Medium</option>
        <option value="higher">Higher</option>
      </select>
      <button type="submit">Submit</button>
   </div>
    </form>
  );
}

export default Regist;
