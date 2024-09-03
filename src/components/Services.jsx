import React, { useState } from "react";
import serv5 from "../assets/serv5.avif"
import serv4 from "../assets/serv4.avif"
import serv3 from "../assets/serv3.avif"
import serv6 from "../assets/serv6.avif"
import serv2 from "../assets/serv2.avif"
import serv1 from "../assets/serv1.avif"
import Information from "./Information";

function Services() {

  const [val, setVal] = useState([
    {text:"1", heading:"Prefabricated wood house", title:"Prefabricated wood houses offer eco-friendly construction, energy efficiency, quick assembly, and customizable designs. They provide a sustainable and stylish living solution.", image:serv5},
    {text:"2", heading:"Interior design", title:"Interior design transforms spaces by blending functionality with aesthetic appeal. It enhances the beauty, comfort, and usability of any room, reflecting personal style and optimizing living or working environments.", image:serv4},
    {text:"3", heading:"Home furnishings", title:"We can help you to develop a digital strategy that will help you to achieve your business goals. This includes digital marketing for your business.", image:serv3},    
  ])

  const [data, setData] = useState([
    {text:"4", heading:"Tensile structure", title:"We can help you to create a visually appealing and user-friendly website. We take into account your brand identity and target audience.", image:serv6},
    {text:"5", heading:"Modular kitchen", title:"Modular kitchens offer modern, efficient, and customizable solutions for your cooking space. They feature pre-fabricated modules that can be tailored to fit your needs, providing excellent storage, sleek designs, and easy installation.", image:serv2},
    {text:"6", heading:"Customized furniture", title:"Customized furniture offers personalized design solutions tailored to your specific needs and style preferences. It allows for unique, high-quality pieces that perfectly fit your space, enhancing both functionality and aesthetic appeal.", image:serv1},
  ])

  return <div className="w-full min-h-[87vh] py-[6vw] pb-[10vw] bg-[#F8F9FA]">   
    <Information title="Our Team" desc="We have a team of experienced and talented professionals who can help you with every aspect of the product."/>
  
    <div className="w-full flex justify-center gap-4 mt-10">
      {val.map((item, index)=>(
        <div key={index} className="w-[31%] py-3 px-5 flex flex-col items-center text-center">
        <div className="w-[3vw] h-[3vw] rounded-full mb-6 bg-[#0D6EFD] text-white flex items-center justify-center">
          <h5 className="font-semibold text-[1.7vw]">{item.text}</h5>
        </div>
          <h1 className="font-[GLAMORISE] text-[1.5vw]  text-[#245656] mb-2">{item.heading}</h1>
          <p className="font-[GLAMORISE]">{item.title}</p>
      </div>
      ))}
     
    </div>
    <div className="w-full flex items-center justify-center gap-6 mt-8">
      {val.map((item, index)=>(
        <div className="w-[30%] h-[43vh] bg-red-300 rounded-lg overflow-hidden">
          <img className="w-full h-full object-cover" src={item.image} alt="" />
        </div>
      ))}
    </div>
    <div className="w-full flex justify-center gap-4 mt-10">
      {data.map((item, index)=>(
        <div key={index} className="w-[31%] py-3 px-5 flex flex-col items-center text-center">
        <div className="w-[3vw] h-[3vw] rounded-full mb-6 bg-[#0D6EFD] text-white flex items-center justify-center">
          <h5 className="font-semibold text-[1.7vw]">{item.text}</h5>
        </div>
          <h1 className="font-[GLAMORISE] text-[1.5vw]  text-[#245656] mb-2">{item.heading}</h1>
          <p className="font-[GLAMORISE]">{item.title}</p>
      </div>
      ))}
     
    </div>
    <div className="w-full flex items-center justify-center gap-6 mt-8">
      {data.map((item, index)=>(
        <div className="w-[30%] h-[43vh] bg-red-300 rounded-lg overflow-hidden">
          <img className="w-full h-full object-cover" src={item.image} alt="" />
        </div>
      ))}
    </div>
  </div>;
}

export default Services;
