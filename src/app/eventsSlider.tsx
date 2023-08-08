"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
const Events = () => {
  const imgPaths = ["/p8.jpg", "/p9.jpg", "/p10.jpg"];
  const sliderRef = useRef<HTMLDivElement>(null);
  const slide = (direction: string) => {
    console.log(sliderRef?.current?.scrollLeft)
    if (
      sliderRef?.current?.scrollLeft != 0) {
        //@ts-ignore
        if(-sliderRef.current?.scrollLeft % sliderRef.current.offsetWidth != 0){
        console.log("It is not good");
        return;
      }
    }
    if (direction == "right") {
      //@ts-ignore
      sliderRef.current?.scrollBy(sliderRef.current.offsetWidth || 0, 0);
    } else {
      //@ts-ignore
      sliderRef.current?.scrollBy(-sliderRef.current.offsetWidth || 0, 0);
    }
  };
  return (
    <div className="">
      <h1 className="text-center p-3 text-lg font-bold">جشنواره ها</h1>
      <div className="relative overflow-hidden rounded-lg md:mx-[10rem] mx-3">
        <MdKeyboardArrowRight
          size={30}
          className="z-50 hover:bg-secondary cursor-pointer h-10 w-10 absolute top-1/2 border border-primary mr-3 rounded-full  text-secondary-foreground"
          onClick={() => slide("right")}
        />
        <div
          ref={sliderRef}
          style={{ scrollbarWidth: "none" }}
          className="flex scroll-smooth overflow-auto"
        >
          {imgPaths.map((path) => (
            <div
              className="relative min-w-full md:h-[35rem] h-[35vh]"
              key={path}
            >
              <Image
                quality={100}
                unoptimized={true}
                src={path}
                className="min-w-full h-full -z-10 object-cover"
                fill
                alt=""
              />
            </div>
          ))}
        </div>
        <MdKeyboardArrowLeft
          size={30}
          className="z-50 cursor-pointer hover:bg-secondary h-10 w-10 ml-3 absolute top-1/2 left-0 border border-primary mr-3 rounded-full text-secondary-foreground"
          onClick={() => slide("left")}
        />
      </div>
    </div>
  );
};

export default Events;
