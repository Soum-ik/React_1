import React, { useState } from "react";
import { Link } from "react-router-dom";

import TextInput from "./textInput";
import {  BsFillPersonFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
// import CheckBox from './checked';

export default function SingUpForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [con_password, setCon_password] = useState("");
  const [error, setError] = useState(false);

  async function handlechange(e) {

    e.preventDefault();

    if (password !== con_password) {
        return setError("you're password didn't match")
    }

  }

  return (
    <>
      <form className=" space-y-6 mt-12" onSubmit={handlechange}>
        <TextInput
          type="text"
          placeholder="enter name"
          required
          value={username}
          icon={<BsFillPersonFill />}
          onChange={(e) =>setUsername(e.target.value)}
        />
        <TextInput
          type="email"
          placeholder="enter your mail"
          required
          icon={<MdOutlineEmail />}
          onChange={(e) =>setEmail(e.target.value)}
        />
        <TextInput
          type="password"
          placeholder="enter your password"
          required
          icon={<RiLockPasswordFill />}
          onChange={(e) =>setPassword(e.target.value)}
        />
        <TextInput
          type="password"
          placeholder="enter confirm password"
          required
          icon={<RiLockPasswordFill />}
          onChange={(e) =>setCon_password(e.target.value)}
        />
        {/* <CheckBox text={"I agree to the Terms & Conditions"}/> */}
        {/* <button type='submit'>Submit Now</button> */}
        <button className="buttom mx-7">Submit Now</button>
        {error && <p className="mx-7 text-center rounded-xl box-border px-2 py-2 bg-red-400 shadow-lg text-white">{error}</p>}
        <h1 className="mx-7">Already have an account? Login Now  instead</h1>
      </form>
    </>
  );
}
