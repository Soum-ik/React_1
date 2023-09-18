import { useState } from "react";
import TextInput from "./textInput";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
// import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const [email, setEmail ] = useState()
    const [password, setPassword ] = useState()

    // const navigate = useNavigate()


    // const [ error, sete ] = useState()
  return (
    <>
      <form action="" className=" space-y-6 mt-12" >
        <TextInput
          type="email"
          placeholder="enter your mail"
          required
          value = {email}
          icon={<MdOutlineEmail />}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextInput
          type="password"
          placeholder="enter your password"
          required
          value = {password}
          icon={<RiLockPasswordFill />}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* {error && (
          <p className="mx-7 text-center rounded-xl box-border px-2 py-2 bg-red-400 shadow-lg text-white">
            {error}
          </p>
        )} */}
        <h1 className="mx-7">I don't have account Creata account</h1>
      </form>
    </>
  );
}
