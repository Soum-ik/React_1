"use client";

import { Carousel } from "flowbite-react";
import illustion from "../assets/Agency/Frame_35.png";
export default function Provider() {
  return (
    <>
      <div className=" bg-neutralSilver">
        <div className=" px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
          <Carousel className=" w-10/12 mx-auto">
            <div className="md:mx-10  my-10 md:my-8 py-12 flex flex-col md:flex-row-reverse item-center justify-between gap-12">
              <div>
                <img src={illustion} alt="" />
              </div>
              <div className=" md:w-1/2 pt-10">
                <h1 className=" text-3xl md:text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                  Lessons and insights{" "}
                  <samp className=" text-brandPrimar leading-snug">
                    from 8 years
                  </samp>
                </h1>
                <p className=" text-neutralDGrey text-base gap-y-16">
                  Where to grow your business as a photographer: site or social
                  media?{" "}
                </p>
                <button className="buttom mt-3 first-letter:">Regeister</button>
              </div>
            </div>

            <div className="md:mx-10  my-10 md:my-8 py-12 flex flex-col md:flex-row-reverse item-center justify-between gap-12">
              <div>
                <img src={illustion} alt="" />
              </div>
              <div className=" md:w-1/2 pt-10">
                <h1 className=" text-3xl md:text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                  Learn and earn{" "}
                  <samp className=" text-brandPrimar leading-snug">
                    in 4 month's
                  </samp>
                </h1>
                <p className=" text-neutralDGrey text-base gap-y-16">
                  Where to grow your business as a photographer: site or social
                  media?{" "}
                </p>
                <button className="buttom mt-3 first-letter:">Regeister</button>
              </div>
            </div>
            <div className=" md:mx-10  my-10 md:my-8 py-12 flex flex-col md:flex-row-reverse item-center justify-between gap-12">
              <div>
                <img src={illustion} alt="" />
              </div>
              <div className=" md:w-1/2 pt-10">
                <h1 className=" text-3xl md:text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                  keep doing{" "}
                  <samp className=" text-brandPrimar leading-snug">go up!</samp>
                </h1>
                <p className=" text-neutralDGrey text-base gap-y-16">
                  Where to grow your business as a photographer: site or social
                  media?{" "}
                </p>
                <button className="buttom mt-3 first-letter:">Regeister</button>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}
