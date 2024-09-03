import React from "react";
import eagel from "../assets/eagle.png";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button";

function Navbar() {
  return (
    <div className="w-full h-[13vh] font-[GLAMORISE] border-b-[.7px] border-black bg-[#F8F9FA] flex px-[5.8vw] items-center justify-between">
      <img className="w-[4.65vw]" src={eagel} alt="" />
      <div className="flex gap-10 items-center">
        <NavLink
          style={(e) =>{
            return {
              color : e.isActive ? "#245656" : "",
              fontWeight : e.isActive ? "bold" : "",
            }
          }}
          className="text-[1.55vw] opacity-[.8]"
          to="/"
        >
          Home
        </NavLink>
        <NavLink style={(e) =>{
            return {
              color : e.isActive ? "#245656" : "",
              fontWeight : e.isActive ? "bold" : "",
            }
          }} className="text-[1.55vw] opacity-[.8]" to="/services">
          Services
        </NavLink>
        <NavLink style={(e) =>{
            return {
              color : e.isActive ? "#245656" : "",
              fontWeight : e.isActive ? "bold" : "",
            }
          }} className="text-[1.55vw] opacity-[.8]" to="/gallery">
          Gallery
        </NavLink>
        <NavLink style={(e) =>{
            return {
              color : e.isActive ? "#245656" : "",
              fontWeight : e.isActive ? "bold" : "",
            }
          }} className="text-[1.55vw] opacity-[.8]" to="/about">
          About
        </NavLink>
        <NavLink style={(e) =>{
            return {
              color : e.isActive ? "#245656" : "",
              fontWeight : e.isActive ? "bold" : "",
            }
          }} className="text-[1.55vw] opacity-[.8]" to="/contact">
          Contact
        </NavLink>
      </div>
      <Button hover={true} />
    </div>
  );
}

export default Navbar;
