import Illistion from "./Illistation";
import Navbar from "./Navbar";
import LoginPage from "./loginForm";

export default function Login() {
  return (
    <>
      <Navbar />
      <div className=" grid md:grid-cols-2 grid-cols-1  max-h-full max-w-full gap-2 mx-12 pt-28">
        <Illistion/>
        <LoginPage/>
      </div>
    </>
  );
}
