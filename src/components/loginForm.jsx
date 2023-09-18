import { useState } from "react";
import TextInput from "./textInput";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleChange = () => {
    
  };

  return (
    <>
      <form action="" className=" space-y-6 mt-12">
        <TextInput
          type="email"
          placeholder="enter your mail"
          required
          value={email}
          icon={<MdOutlineEmail />}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextInput
          type="password"
          placeholder="enter your password"
          required
          value={password}
          icon={<RiLockPasswordFill />}
          onChange={(e) => setPassword(e.target.value)}
        />

        <h1 className="mx-7">I don't have account! {<Link to="/SingUp" className="text-brandPrimar">Creata account</Link>}</h1>
      </form>
    </>
  );
}
