import React, { useRef, useState } from "react";
import img7 from "../assets/img7.jpeg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

function Page3() {
  const h1Ref = useRef(null);
  const div = useRef(null);
  const btn = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#main",
        start: "top 70%",
        end: "top bottom+=60%",
        toggleActions: "restart none none reverse",
      },
    });

    tl.from(h1Ref.current, {
      y: 150,
      duration: 1,
      opacity: 0,
    });

    tl.from(div.current, {
      y: 150,
      duration: 1,
      opacity:0
    });
    tl.from(btn.current, {
      scale: 0,
      duration: 1,
      opacity: 0,
    });
  });

  const [val, setVal] = useState([
    { image: img7, heading: "Prefabricated wood house", title: "View more" },
    { image: img8, heading: "Interior design", title: "View more" },
    { image: img9, heading: "Home furnishing", title: "View more" },
  ]);
  return (
    <div id="main" className="w-full h-[100vh] flex flex-col items-center text-center pt-[2vw] px-8">
      <h1
        ref={h1Ref}
        className="text-[3.1vw] font-[GLAMORISE] text-[#245656] mb-8"
      >
        Our Services:
      </h1>
      <div ref={div} className="flex items-center justify-center gap-5 mb-5">
        {val.map((item, index) => (
          <div
            key={index}
            className="w-[26%] relative rounded-xl h-[68vh] flex-col overflow-hidden bg-red-600"
          >
            <img 
              className="w-full h-full object-cover hover:scale-110 duration-500"
              src={item.image}
              alt=""
            />
            <div className="absolute p-4 w-full left-0 bg-[rgba(0,0,0,0.1)] text-white bottom-0 text-start">
              <h1 className="font-[GLAMORISE]">{item.heading}</h1>
              <p className="border-b-[1.5px] w-fit">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
      <Link to="/contact">
        <Button ref={btn}
          hover={false}
          bg="bg-[#245656] font-[GLAMORISE] text-white py-[.75vw] text-sm"
          text="Get Started!"
        />
      </Link>
    </div>
  );
}

export default Page3;
