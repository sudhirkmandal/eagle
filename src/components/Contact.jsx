import React, { useState } from "react";
import Information from "./Information";
import { IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { LuAsterisk } from "react-icons/lu";

function Contact() {
  // const [val, setVal] = useState([
  //   { name: "Full Name", placeholder: "Your full name", initialValue: "Your full name" },
  //   { name: "Email", icon: <HiOutlineMail />, placeholder: "Your email address" },
  //   { name: "Phone Number", icon: <HiOutlinePhone />, placeholder: "Your phone number" },
  //   { name: "Message", placeholder: "Your message", initialValue: "Your message" },
  // ]);

  return (
    <div className="w-full min-h-[87vh] py-[6vw] flex flex-col items-center">
      <Information
        title="Your Feedback"
        desc="The best way to contact us is to use our contact form below. Please fill out all of the required fields and we will get back to you as soon as possible."
      />
      <hr className="w-[25%] h-[.9px] bg-gray-300 mt-10" />
      <div className="w-[65%] min-h-[90vh] border-[1px] mt-[6vw] shadow-md rounded-lg">
        <div className="px-16 py-14 w-full">
          <form className="w-[100%]">
            <div className="w-[100%]">
              <div className="w-full">
                <h3 className="font-[GLAMORISE]">
                  Full Name <span className="text-[#ffa750]">*</span>
                </h3>
                <input
                  type="text"
                  className="input px-3 py-2 mt-3  input-bordered rounded-md border-[1.3px] border-zinc-400 w-full"
                />
              </div>

              <div className="flex w-[100%] gap-5">
                <div className="w-full mt-10">
                  <h3 className="font-[GLAMORISE]">
                    Email <span className="text-[#ffa750]">*</span>
                  </h3>
                  <label className="input input-bordered flex items-center gap-2 px-3 py-2 mt-3 rounded-md border-[1.3px] border-zinc-400 w-[100%]">
                   <span className="inline-block text-xl"><TfiEmail /></span>
                    <input
                      type="text"
                      className="outline-none w-full"
                      
                    />
                  </label>
                </div>
                <div className="w-full mt-10">
                  <h3 className="font-[GLAMORISE]">Phone Number</h3>
                  <label className="input input-bordered flex items-center gap-2 px-3 py-2 mt-3 rounded-md border-[1.3px] border-zinc-400 w-[100%]">
                   <span className="inline-block text-xl">
                   <IoCallOutline />
                   </span>
                    <input
                      type="text"
                      className="w-full outline-none"
                    
                    />
                  </label>
                </div>
              </div>

              <div className="w-full mt-10">
                <h3 className="font-[GLAMORISE]">
                Message <span className="text-[#ffa750]">*</span>
                </h3>
                <textarea className="textarea textarea-bordered px-3 py-2 mt-3 h-[100px] rounded-md border-[1.3px] border-zinc-400 w-full"></textarea>
              </div>             
            </div>
            <input
              type="submit"
              className="w-full font-[GLAMORISE] bg-[#245656] text-white py-3 rounded-md text-[1.4vw] mt-10 cursor-pointer"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
