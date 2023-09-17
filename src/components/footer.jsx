// import { useState } from "react";
import img from "../assets/image/Logo.png";
import img2 from "../assets/image/social.png";

export default function Footer() {
    // const [footer, setFooter] = useState("");
    // const handlechange = () =>{
    //     // setFooter(() =)
    // }
  return (
    <>
      <div className=" bg-[#263238] px-12 py-12 mt-12">
            <div className=" flex flex-col  items-center justify-between max-w-4xl mx-auto md:flex-row space-y-6">
                <div className=" space-y-6">
                    <img src={img} alt="" />
                    <div>
                    <p>Copyright © 2023 SOUMIK SARKAR.</p>
                    <p>All rights reserved</p>
                    </div>
                    <img src={img2} alt="" />
                </div>

                    <div className="flex md:space-x-10 flex-col md:flex-row  text-center ">
                        <div>
                        <h1 className="heading text-white py-4">Company</h1>

                        <div className="text-white px-2 space-y-3">
                            <p>About Us</p>
                            <p>Blog</p>
                            <p>Contact Us</p>
                            <p>Pricing</p>
                            <p>Testominail</p>
                        </div>
                        </div>
                        <div>
                        <h1 className="heading text-white py-4">Support</h1>

                        <div className="text-white px-2 space-y-3">
                            <p>help center</p>
                            <p>Term of condition</p>
                            <p>Contact Us</p>
                            <p>Pricing</p>
                            <p>Testominail</p>
                        </div>
                        </div>
                        

                        <div>
                        <h1 className="heading text-white py-4"> Stay up to date</h1>
                        <input
                            className=" rounded-xl placeholder:text-black"
                            type="email"
                            placeholder="Your email address"
                            name=""
                            id=""
                            onChange={(e) => e.target.value}
                        />
                        </div>
                    </div>
            </div>
      </div>
    </>
  );
}
