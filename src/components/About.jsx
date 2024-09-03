import React from "react";
import Information from "./Information";
import img12 from "../assets/img12.avif";
import { BiCheckDouble } from "react-icons/bi";
import Button from "./Button";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";

function About() {
  return (
    <div className="w-full min-h-[87vh] py-[6vw]">
      <Information
        title="Our Best Offers"
        desc="At our core, we are dedicated to providing exceptional design and renovation solutions for spaces of all styles and sizes."
      />
      <div className="w-full h-[60vh] mt-4 flex">
        <div className="w-1/2 h-full px-[1vw] pl-[6vw] py-[2vw]">
          <img
            className="w-full h-full object-cover rounded-lg border-[1px] border-black"
            src={img12}
            alt=""
          />
        </div>
        <div className="w-1/2 h-full flex flex-col items-start px-[4vw] justify-center">
          <h1 className="font-[GLAMORISE] text-2xl mb-5">Our Services</h1>
          <div className="flex gap-14 mb-7">
            <div>
              {[
                "Prefabricated wood house",
                "Customized furniture",
                "Tensile structure",
              ].map((item, index) => (
                <h3 key={index} className="flex items-center font-[GLAMORISE] leading-8 gap-2 text-[1.3vw]">
                  <span className="text-[1.9vw] text-blue-600 font-black">
                    <BiCheckDouble />
                  </span>
                  {item}
                </h3>
              ))}
            </div>
            <div>
              {["Interior design", "Home furnishings", "Modular kitchen"].map(
                (item, index) => (
                  <h3 key={index} className="flex items-center font-[GLAMORISE] leading-8 gap-2 text-[1.3vw]">
                    <span className="text-[1.9vw] text-blue-600">
                      <BiCheckDouble />
                    </span>
                    {item}
                  </h3>
                )
              )}
            </div>
          </div>
          <Link to="/services"><Button hover={false} icon={<IoMdArrowForward />} bg="bg-[#245656] font-[GLAMORISE] flex items-center gap-2 rounded-md text-white py-[.75vw] text-sm" text="Explore" /></Link>
        </div>
      </div>
    </div>
  );
}

export default About;
