import Navbar from "./Navbar";
import SingUpForm from "./singUpForm";
import Illistion from "./Illistation";

export default function SingUp() {
  return (
    <>
      <Navbar />
      <div
        className=" grid md:grid-cols-2 grid-cols-1  max-h-full max-w-full gap-2 mx-12 pt-28     "
      >
        <Illistion />
        <SingUpForm />
      </div>
    </>
  );
}
