"use client";
import AddLoan from "@/comps/addLoan";
import toPersianNumber from "@/utils/toPersianNumber";
import moment from "moment";
import { FC, useState } from "react";
import { CreateLoanArgs } from "./page";

interface Props {
  id: string;
  prepayment: string | number | null;
  name: string | number;
  updatedAt: Date;
  loans: string | number | null;
  min: string | number | null;
  max: string | number | null;
  image: string | null;
  userId: string;
  createLoan: (args: CreateLoanArgs) => Promise<void>;
}

const Product: FC<Props> = ({
  id: productId,
  userId,
  prepayment,
  name,
  updatedAt,
  loans,
  min,
  max,
  image,
  createLoan,
}) => {
  const [openedLoan, setOpenedLoan] = useState<any>(null);
  return (
    <div
      key={productId}
      className="bg-light-blue text-black shadow-lg shadow-dark-blue rounded-md mb-5 overflow-hidden"
    >
      <div className="flex gap-2">
        <img
          src={
            image
              ? image.replace("public", "")
              : "https://archive.org/download/no-photo-available/no-photo-available.png"
          }
          className="w-32 h-36 object-cover"
          alt=""
        />
        <div className="flex flex-col justify-between flex-1 p-2">
          <ul className="grid gap-1 grid-cols-3">
            <li className="bg-dark-blue/20 p-1 rounded text-center">
              نام: {name}
            </li>
            <li className="bg-dark-blue/20 p-1 rounded text-center">
              وام ها: {loans || toPersianNumber(0)}
            </li>
            <li className="bg-dark-blue/20 p-1 rounded text-center">
              حداقل: {min || toPersianNumber(0)}
            </li>
            <li className="bg-dark-blue/20 p-1 rounded text-center">
              حداکثر: {max || toPersianNumber(0)}
            </li>
            <li className="bg-dark-blue/20 p-1 rounded text-center">
              پیش پرداخت: {prepayment || toPersianNumber(0)}
            </li>
            <li className="bg-dark-blue/20 p-1 rounded text-center">
              سود: {false || toPersianNumber(0)}
            </li>
          </ul>
          <div className="flex justify-between items-center mt-4">
            <div>
              <button className="p-1 rounded-md bg-dark-blue text-white ml-2">
                محصول
              </button>
              <button
                onClick={() =>
                  productId == openedLoan
                    ? setOpenedLoan(null)
                    : setOpenedLoan(productId)
                }
                className="p-1 rounded-md bg-dark-blue text-white"
              >
                {productId != openedLoan ? (
                  <span>اضافه کردن وام</span>
                ) : (
                  <span>بستن</span>
                )}
              </button>
            </div>
            <p
              className="text-left p-1 bg-gradient-to-r from-slate-200 to-transparent rounded-md border border-white"
              style={{ direction: "ltr" }}
            >
              {moment(updatedAt).fromNow()}
            </p>
          </div>
        </div>
      </div>
      {productId == openedLoan && (
        <AddLoan
          id={userId}
          productId={productId}
          loans={Number(loans) || 0}
          productMinMax={{ min: Number(min) || 0, max: Number(max) || 0 }}
          productPrepayment={Number(prepayment) || 0}
          createLoan={createLoan}
        />
      )}
    </div>
  );
};

export default Product;
