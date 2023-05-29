import React, { useState } from "react";
import Link from "next/link";
import toPersianNumber from "@/utils/toPersianNumber";
import { prisma } from "@/db";

const Product = async ({ params: { id } }: { params: { id: string } }) => {
  const product = await prisma.product.findUnique({ where: { id } });
  const offeredLoans = await prisma.offeredLoan.findMany({
    where: { productId: product?.id },
  });
  return (
    <div className="">
      <div className="p-5">
        <p className="text-lg font-bold m-5">محصول</p>
        <div className="flex items-center gap-3">
          <img
            src={
              product?.image
                ? product.image.replace("public", "")
                : "https://archive.org/download/no-photo-available/no-photo-available.png"
            }
            alt=""
            style={{ maxHeight: "15rem" }}
          />
          <div>
            <div>
              <p className="text-slate-400">عنوان :</p>
              <p className="font-bold">{product?.name}</p>
            </div>
            <div>
              <p className="text-slate-400">توضیحات :</p>
              <p className="font-bold">{product?.description}</p>
            </div>
          </div>
        </div>
        <div>
          <ul className="grid gap-1 grid-cols-3 mt-5">
            <li className="bg-dark-blue/60 p-1 rounded text-center">
              نام: {product?.name}
            </li>
            <li className="bg-dark-blue/60 p-1 rounded text-center">
              وام ها: {product?.loans || toPersianNumber(0)}
            </li>
            <li className="bg-dark-blue/60 p-1 rounded text-center">
              حداقل: {product?.min || toPersianNumber(0)}
            </li>
            <li className="bg-dark-blue/60 p-1 rounded text-center">
              حداکثر: {product?.max || toPersianNumber(0)}
            </li>
            <li className="bg-dark-blue/60 p-1 rounded text-center">
              پیش پرداخت: {product?.prepayment || toPersianNumber(0)}
            </li>
            <li className="bg-dark-blue/60 p-1 rounded text-center">
              سود: {false || toPersianNumber(0)}
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-5">
        {offeredLoans?.map((loan: any, i: number) => (
          <div
            className="flex justify-between items-center bg-dark-blue rounded-md p-2 mb-5"
            key={loan.id}
          >
            <ul className="flex flex-col items-center">
              <li>
                از {loan.min} تا {loan.max}
              </li>
              <li>سود {loan.percent} درصد</li>
              <li>پیش پرداخت {loan.prepayment} درصدی</li>
            </ul>
            <Link href={`/loan/${loan.id}`}>
              <button className="p-2 px-3 text-black bg-light-blue rounded-md">
                گرفتن وام
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
