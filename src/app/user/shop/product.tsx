"use client";
import { Button } from "@/app/components/ui/button";
import Image from "next/image";
import { FC, useState } from "react";
import { ProductForm } from "./productForm";

interface Props {
  name: string;
  description: string;
  min: number | null;
  max: number | null;
  price: number;
  id: string;
  prepayment: number | null;
  image: string | null;
  createLoan: any;
  providerId: any
}

const Product: FC<Props> = ({
  name,
  description,
  min,
  max,
  price,
  image,
  id,
  prepayment,
  createLoan,
  providerId
}) => {
  const [openAddPanel, setOpenAddPanel] = useState(false);
  return (
    <div className="bg-secondary text-secondary-foreground rounded overflow-hidden">
      <div className="flex">
        <div className="flex gap-3 items-center">
          <div className="relative h-[8rem] w-[6rem] rounded overflow-hidden">
            <Image
              src={image || "/p4.jpg"}
              fill
              alt=""
              className="object-cover"
            />
          </div>
          <div>
            <p>{name}</p>
            <p>{description}</p>
          </div>
        </div>
        <div className="p-5 flex-1 grid grid-cols-2 gap-3 mx-[6rem]">
          <p className="text-center p-2 rounded bg-accent">حداقل: {min}</p>
          <p className="text-center p-2 rounded bg-accent">حداکثر: {max}</p>
          <p className="text-center p-2 rounded bg-accent">قیمت: {price}</p>
          <p className="text-center p-2 rounded bg-accent">
            پیش پرداخت: {prepayment}
          </p>
        </div>
        <div className="p-5 grid place-items-center">
          <Button onClick={() => setOpenAddPanel((prev) => !prev)}>اضافه کردن وام</Button>
        </div>
      </div>
      {openAddPanel ? <ProductForm createLoan={createLoan} providerId={providerId} productId={id} /> : null}
    </div>
  );
};

export default Product;
