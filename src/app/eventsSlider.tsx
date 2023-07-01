"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
const Events = () => {
  const imgPaths = ["/p8.jpg", "/p9.jpg", "/p10.jpg"];
  const sliderRef = useRef<HTMLDivElement>(null);
  const slide = (direction: string) => {
    if (sliderRef?.current?.scrollLeft != 0) {
      if (
        //@ts-ignore
        (-sliderRef.current?.scrollLeft % sliderRef.current.offsetWidth) %
          //@ts-ignore
          sliderRef.current?.scrollLeft !=
        0
      ) {
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
    <div className="mx-auto">
      <h1 className="text-center p-3 text-lg font-bold">جشنواره ها</h1>
      <div className="relative overflow-hidden rounded-lg mx-[10rem]">
        <MdKeyboardArrowRight
          size={30}
          className="z-50 hover:bg-secondary cursor-pointer h-16 absolute top-1/2 bg-primary border border-secondary border-r-0 rounded-lg rounded-tr-none rounded-br-none  text-secondary-foreground"
          onClick={() => slide("right")}
        />
        <div
          ref={sliderRef}
          style={{ scrollbarWidth: "none" }}
          className="flex scroll-smooth overflow-auto"
        >
          {imgPaths.map((path) => (
            <div className="relative min-w-full h-[35rem]" key={path}>
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
          className="z-50 cursor-pointer hover:bg-secondary h-16 absolute top-1/2 left-0 bg-primary border border-secondary border-l-0 rounded-lg rounded-tl-none rounded-bl-none text-secondary-foreground"
          onClick={() => slide("left")}
        />
      </div>
    </div>
  );
};

export default Events;
