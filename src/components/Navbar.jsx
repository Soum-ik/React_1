import React, { useEffect, useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { Link } from "react-scroll";
// import logo from "../assets/Agency/logo.png";

export default function Navbar() {
  const [isopenManu, setIsOpenManu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  //   toggler

  console.log(isSticky);

  const toggle = () => {
    setIsOpenManu(!isopenManu);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    // Add the event listener
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); 
  const naviItem = [
    { link: "Home", path: "home" },
    { link: "Service", path: "service" },
    { link: "About", path: "about" },
    { link: "Product", path: "product" },
    { link: "Testompnial", path: "testompnial" },
    { link: "FAQ", path: "faq" },
  ];

  return (
    <>
      <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right- z-[1000] ">
        <nav
          className={`px-4 py-4 lg:px-14 2xl:px20${
            isSticky ? " static top-0 left-0 ring-0  bg-slate-50 transition-colors duration-300" : "blur-sm"
          }`}
        >
          <div className=" flex items-center justify-between text-base gap-8">
            <a href="">
              {/* <img src={logo} alt="" /> */}
            </a>

            <ul className=" md:flex md:font-medium  space-x-3 hidden cursor-pointer">
              {naviItem.map(({ path, link }) => (
                <Link
                  className=" block text-xl text-gray-900 hover:text-brandPrimar first:font-medium md:hover:text-brandPrimar select-none"
                  to={path}
                  key={path}
                  spy={true}
                  smooth={true}
                  offset={-100}
                >
                  {link}
                </Link>
              ))}
            </ul>

            <div className=" space-x-12 hidden md:flex items-center">
              <a
                href="/"
                className=" hidden md:flex items-center text-brandPrimar hover:text-gray900"
              >
                Login
              </a>
              <button className="buttom">Sing up</button>
            </div>

            <div className=" md:hidden">
              <button className=" md:hidden" onClick={toggle}>
                {isopenManu ? (
                  <FaXmark className=" h-7 w-7 text-neutralDGrey" />
                ) : (
                  <FaBars className=" h-7 w-7 text-neutralDGrey" />
                )}
              </button>
            </div>
          </div>

          {/* nav item for mobile device */}

          <div
            className={` space-y-8 mt-[10rem] text-center bg-brandPrimar  ${
              isopenManu ? "block top-0 left-0 right-0 " : " hidden"
            } `}
          >
            {naviItem.map(({ path, link }) => (
              <Link
                className=" block  text-gray-900 hover:text-brandPrimar first:font-medium md:hover:text-brandPrimar cursor-pointer text-xl"
                to={path}
                key={path}
                spy={true}
                smooth={true}
                offset={-100}
              >
                {link}
              </Link>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
}
