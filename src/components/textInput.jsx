import React from "react";

export default function TextInput({ icon, ...rest }) {
  console.log(icon);
  return (
    <div className=" shadow w-full flex items-center border rounded-md mx-6 max-w-5xl px-3">
      <input
        className=" border-none outline-none w-full  rounded"
        {...rest}
      />
      <span className=" flex items-center justify-center">{icon} </span>
    </div>
      //  <button className="buttom mx-7">Submit Now</button>
  );
}
