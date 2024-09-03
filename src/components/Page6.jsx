import React, { useState } from 'react'
import img11 from "../assets/img11.jpg"
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";

function Page6() {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: " WHY SHOULD I CHOOSE EAGLE CORPORATION?",
      answer: "You should choose Eagle Corporation for their unmatched expertise, innovative solutions, extensive resources, meticulous project management, stringent quality assurance, and exceptional customer service. They excel in delivering top-notch results tailored to your specific needs and preferences.",
    },
    {
      question: "WHY IS EAGLE CORPORATION BETTER THAN A REGULAR INTERIOR DESIGNER'S?",
      answer:
        "Eagle Corporation surpasses regular interior designers with its expertise, innovative solutions, scale, project management capabilities, quality assurance, and exceptional customer service.",
    },
    {
      question: "WHAT MAKES EAGLE CORPORATION DIFFRENT FROM OTHER'S?",
      answer:
        "What sets Eagle Corporation apart from others is their unparalleled expertise, innovative approach, extensive resources, meticulous project management, stringent quality assurance standards, and commitment to exceptional customer service. They go above and beyond to deliver tailored solutions that exceed expectations and ensure the success of every project.",
    },

    {
      question: "WHAT YOU WILL GET IN EAGLE CORPORATION?",
      answer:
        "With Eagle Corporation, you'll receive expertly designed interiors, functional modular kitchens, and custom furniture, all crafted with exceptional quality and tailored to your preferences. Their personalized approach ensures your vision is brought to life with excellence.",
    },
    
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };


  return (
    <div className='w-full h-[150vh] flex pb-[5vw]'>
        <div className='w-1/2 h-full p-[4vw]'>
            <img className='w-full h-full object-cover rounded-lg border-[1px] border-black' src={img11} alt="" />
        </div>
        <div className='w-1/2 h-full'>          
          <div className="max-w-2xl mx-auto  flex flex-col items-center justify-center h-full">
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4 w-[78%] p-2 border-[1px] border-black">
          <div
            className="p-3 py-2 bg-primary cursor-pointer flex justify-between items-center"
            onClick={() => toggleFAQ(index)}>
            <h3 className="text-lg font-[GLAMORISE] font-bold text-[#245656]">{faq.question}</h3>
            <span className='w-8 text-[1.4vw] ml-3'>{activeIndex === index ? <SlArrowUp/> : <SlArrowDown/>}</span>
          </div>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              activeIndex === index ? "max-h-40" : "max-h-0"
            }`}>
            <p className="p-3 text-black">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>

          </div>
        </div>
   
  )
}

export default Page6