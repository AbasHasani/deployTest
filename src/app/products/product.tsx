import React from "react";
import Link from "next/link";
import toPersianNumber from "../../utils/toPersianNumber";
const Product = ({ name, id, min, max, percent, prepayment, image }:any) => {
  return (
    <Link href={`/product/${id}`}
      className="flex flex-col items-center transition-all justify-around bg-dark-blue/20 p-2 hover:scale-105 group hover:shadow-lg hover:shadow-dark-blue"
      style={{ minHeight: "10rem" }}
    >
      <img src={image ? image.replace("public","") : "https://archive.org/download/no-photo-available/no-photo-available.png"} className="w-full h-36 object-cover object-center" alt="" />
      <p className="mt-3 text-cyan-500 p-1 rounded cursor-pointer transition-all group-hover:bg-cyan-500 group-hover:text-black">
        {name || "None"}
      </p>
      <div className="flex flex-col items-center">
        <p>حداقل: <span className="group-hover:text-cyan-500">{toPersianNumber(min)}</span></p>
        <p>حداکثر:<span className="group-hover:text-cyan-500">{toPersianNumber(max)}</span></p>
        <p>پیش پرداخت: <span className="group-hover:text-cyan-500">{toPersianNumber(prepayment)}</span></p>
      </div>
    </Link>
  );
};

export default Product;
