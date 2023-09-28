import defaultImage from "../assets/image/signup.svg";

export default function Illistion() {
  return (
    <>
      <div className=" space-y-5">
        <h1 className=" text-4xl font-medium text-neutralDGrey px-3 mb-10">
          Create an account
        </h1>
        <div className=" hidden md:display_block ">
          <div>
            <img className=" max-w-lg" src={defaultImage} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
