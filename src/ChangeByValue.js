import React, { useState } from "react";

const ChangeByValue = (props) => {
  const [num, setNum] = useState(0);
  //console.log(num);
  const handleChange = (e) => {
    if (isNaN(e.target.value)) {
      return alert("Only numbers allowed!");
    }
    const value = Number(e.target.value);
    setNum(value);
  };
  return (
    <div>
      <form>
        <input onChange={(e) => handleChange(e)} value={num} />
      </form>
      <button onClick={() => props.incrementByValue(num)}>+{num}</button>
      <button onClick={() => props.decrementByValue(num)}>-{num}</button>
    </div>
  );
};
export default ChangeByValue;
