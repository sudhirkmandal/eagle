import React, { useRef, useState } from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import Button from "./Button";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";
import Page6 from "./Page6";
import { Link } from "react-router-dom";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { Navigation, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

function Home() {
  const swiperRef = useRef(null);
  const val = [
    {
      image: img1,
      name: "Welcome to",
      name2: "Eagle Corporation",
      title:
        "Elegant, versatile, and richly detailed furniture and interior design solutions. Customize with premium materials, utilize innovative design systems and components, and transform spaces with exquisite craftsmanship and thoughtful detailing.",
    },
    {
      image: img2,
      name: "Welcome to",
      name2: "Eagle Corporation",
      title:
        "Elegant, versatile, and richly detailed furniture and interior design solutions. Customize with premium materials, utilize innovative design systems and components, and transform spaces with exquisite craftsmanship and thoughtful detailing.",
    },
    {
      image: img3,
      name: "Welcome to",
      name2: "Eagle Corporation",
      title:
        "Elegant, versatile, and richly detailed furniture and interior design solutions. Customize with premium materials, utilize innovative design systems and components, and transform spaces with exquisite craftsmanship and thoughtful detailing.",
    },
  ];

  const handleGetStartedClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(0); // Reset to the first slide
    }
  };


  return (
    <>
       <Swiper
      ref={swiperRef} 
      modules={[Navigation, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      style={{ width: "100%", height: "87vh" }}
    >
      {val.map((slide, index) => (
        <SwiperSlide key={index} style={{ position: "relative" }}>
          <img
            src={slide.image}
            alt={slide.name2}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white p-8">
            <div className="p-14">
              <h1 className="text-[4.5vw] font-[GLAMORISE] leading-none mb-2">{slide.name}</h1>
              <h2 className="text-[4.5vw] font-[GLAMORISE] leading-none mb-7">{slide.name2}</h2>
              <p className="w-[60%] mb-8 text-[1.5vw]">{slide.title}</p>
              <Link
                    onClick={()=>handleGetStartedClick()
                    }
                  >
                    <Button
                      hover={false}
                      bg="bg-white text-black w-fit font-[GLAMORISE] text-zinc-800 text-sm"
                      text="Get Started!"
                    />
                  </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>           
        <div>
          <Page2 />
          <Page3 />
          <Page4 />
          <Page5 />
          <Page6 />
        </div>      
    </>
  );
}

export default Home;
