import { useState } from "react";

export default function (props) {
  const [selectedButton, setSelectedButton] = useState(null);
  

  let date = props.currentDate;

 
  

  return (
    <>
      <button onClick={props.Addon}>+</button>
      {/* <p> {date} </p> */}
      <p>{date}</p>
      {/* <p> {new Date().toDateString()} </p> */}
      <button onClick={props.Sub}>-</button>
    </>
  );
}
