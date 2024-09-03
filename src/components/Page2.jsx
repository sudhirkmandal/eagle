import React, { useRef, useState } from "react";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

function Page2() {
  const one = useRef(null);
  const div = useRef(null)
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: one.current,
        start: "top 60%",
        end: "top bottom+=60%",
        toggleActions: "restart none none reverse",
      },
    });
    tl.from(one.current, {
      duration: 1,
      y: 100,
      opacity: 0,
    },"a");
    tl.from(div.current, {
      duration: 1,
      y: 100,
      opacity: 0,
      stagger:.2,
      delay:.2
    },"a");
  });
  const [val, setVal] = useState([
    {
      image: img4,
      heading: "Discovery",
      title:
        "We will meet to discuss your desired outcomes and get to know your design preferences. At this stage, your must haves will become ours.",
    },
    {
      image: img5,
      heading: "Design",
      title:
        "The vision begins to come to life with a detailed plan of action. We will share our proposed selections (i.e. fine furnishings, art, construction finishes) and incorporate your feedback before we proceed.",
    },
    {
      image: img6,
      heading: "Delivery",
      title:
        "We transform your space with a white glove approach, handling all components of implementation before inviting you for a final walk-through",
    },
  ]);
  return (
    <div className="w-full h-[100vh] text-[#245656] text-center pt-[6vw] px-8">
      <h1 ref={one} className="text-[3.1vw] font-[GLAMORISE]">
        How it Works:
      </h1>
      <div ref={div} className="flex justify-between">
        {val.map((item, index) => (
          <div 
            key={index}
            className="w-[31%] h-[60vh] flex flex-col text-center py-14  gap-2 items-center justify-start px-4"
          >
            <img width={"45px"} src={item.image} alt="" />
            <h1 className="font-[GLAMORISE] text-[1.5vw]">{item.heading}</h1>
            <p className="text-black">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page2;
