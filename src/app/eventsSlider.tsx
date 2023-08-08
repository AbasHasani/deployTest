"use client";
import { Carousel } from "@mantine/carousel";
import { rem } from "@mantine/core";
import Image from "next/image";
import { useRef, useState } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
const Events = () => {
  const imgPaths = ["/p8.jpg", "/p9.jpg", "/p10.jpg"];
  const sliderRef = useRef<HTMLDivElement>(null);
  const slide = (direction: string) => {
    console.log(sliderRef?.current?.scrollLeft);
    if (sliderRef?.current?.scrollLeft != 0) {
      //@ts-ignore
      if (-sliderRef.current?.scrollLeft % sliderRef.current.offsetWidth != 0) {
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
        
        <div
          ref={sliderRef}
          style={{ scrollbarWidth: "none" }}
          className="flex scroll-smooth overflow-auto"
        >
          {/* {imgPaths.map((path) => (
            <div
              className="relative min-w-full md:h-[35rem] h-[35vh]"
              key={path}
            > */}
          <Carousel
            className="w-4/5"
            mx="auto"
            withIndicators
            height={400}
            styles={{
              indicator: {
                width: rem(12),
                height: rem(4),
                transition: "width 250ms ease",

                "&[data-active]": {
                  width: rem(40),
                },
              },
              control: {
                "&[data-inactive]": {
                  opacity: 0,
                  cursor: "default",
                },
              },
            }}
          >
            {imgPaths.map((path) => (
              <Carousel.Slide key={path}>
                <div className="relative min-w-full h-full">
                  <Image
                    quality={100}
                    unoptimized={true}
                    src={path}
                    className="min-w-full h-full -z-10 object-cover"
                    fill
                    alt=""
                  />
                </div>
              </Carousel.Slide>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Events;
