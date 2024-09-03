import React from 'react';
import Information from './Information';
import img13 from "../assets/img13.jpg";
import img14 from "../assets/img14.jpg";
import img15 from "../assets/img15.jpg";
import img16 from "../assets/img16.jpg";
import img17 from "../assets/img17.jpg";
import img18 from "../assets/img18.jpg";
import img19 from "../assets/img19.jpg";
import img20 from "../assets/img20.jpg";
import img21 from "../assets/img21.jpg";
import img22 from "../assets/img22.jpg";
import img23 from "../assets/img23.jpg";
import img24 from "../assets/img24.jpg";
import img25 from "../assets/img25.jpg";
import gsap from 'gsap';

function Gallery() {
  const handleHover = () => {
    gsap.fromTo(
      ".head",
      { x: -150, opacity: 0 },
      { x: 0, opacity: 1 }
    );
    gsap.fromTo(
      ".para",
      { x: 150, opacity: 0 },
      { x: 0, opacity: 1 }
    );
  };

  const data = [
    { image: img13, heading: "Prefabricated Wood House", para: "Prototype 1" },
    { image: img14, heading: "Prefabricated Wood House", para: "Prototype 2" },
    { image: img15, heading: "Interior Design", para: "Design 1" },
    { image: img16, heading: "Interior Design", para: "Design 2" },
    { image: img17, heading: "Modular Kitchen", para: "Prototype 1" },
    { image: img18, heading: "Modular Kitchen", para: "Prototype 2" },
    { image: img19, heading: "Boat Adventure", para: "Health" },
    { image: img20, heading: "Offroad Moves", para: "Nature" },
    { image: img21, heading: "Tensile structure", para: "Design" },
    { image: img22, heading: "Tensile structure", para: "Design" },
    { image: img23, heading: "Boat Adventure", para: "Health" },
    { image: img24, heading: "Offroad Moves", para: "Nature" },
    { image: img25, heading: "Cozy Occupancy", para: "Design" },
  ];

  return (
    <div className='w-full min-h-[87vh] py-[6vw] flex flex-col items-center'>
      <Information title="Our Projects" desc="We are passionate about creating innovative products. We believe that technology can make people's lives better." />
      <hr className='w-[25%] h-[.9px] bg-gray-300 mt-10' />

      <div className='w-full px-20 py-20 flex flex-wrap gap-6'>
        {data.map((item, index) => {
          let sizeClass = 'w-[20vw] h-[27vh]'; // Default size
          if (index === 1) {
            sizeClass = 'w-[41vw] h-[65vh]';
          } else if (index === 4) {
            sizeClass = 'w-[20vw] h-[43vh]';
          } else if (index === 5) {
            sizeClass = 'w-[20vw] h-[32vh]';
          } else if (index === 6) {
            sizeClass = 'w-[20vw] h-[70vh]';
          }else if (index === 7) {
            sizeClass = 'w-[20vw] h-[32vh]';
          }else if (index === 8) {
            sizeClass = 'w-[20vw] h-[44vh]';
          }else if (index === 9) {
            sizeClass = 'w-[20vw] h-[44vh]';
          }else if (index === 10) {
            sizeClass = 'w-[20vw] h-[32vh]';
          }else if (index === 11) {
            sizeClass = 'w-[20vw] h-[32vh]';
          }else if (index === 12) {
            sizeClass = 'w-[20vw] h-[44vh]';
          }

          return (
            <div
              key={index}
              className={`relative rounded-lg overflow-hidden cursor-pointer group ${sizeClass}`}
              onMouseEnter={handleHover}
            >
              <img className='w-full h-full scale-125 object-cover transition-transform duration-700 group-hover:scale-100' src={item.image} alt="" />
              <div className='w-full h-full font-[GLAMORISE] flex flex-col items-center justify-center bg-[rgba(0,0,0,0.5)] text-white absolute top-0 left-0 transition-opacity duration-700 opacity-0 group-hover:opacity-100 pointer-events-none'>
                <h1 className='head text-3xl'>{item.heading}</h1>
                <p className='para'>{item.para}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Gallery;
