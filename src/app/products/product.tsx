import Image from "next/image";
import { FC } from "react";

interface Props {
  name: string;
  image: string | null;
  description: string;
  prepayment: string | number
}

const Product: FC<Props> = ({ name, image, description, prepayment }) => {
  return (
    <div className="flex gap-2 justify-between border-info/50 my-3 rounded shadow p-6">
      <div>
        <div className="flex items-center gap-2">
          <Image src={"/p2.jpg"} className="rounded" width={50} height={50} alt="" />
          <div>
            <p>پیش پرداخت:{prepayment}</p>
            <p>نوع ضمانت: چک سفته</p>
          </div>
        </div>
        <p className="mt-5">تامین کننده اعتبار: خود فروشگاه/ بانک آینده</p>
      </div>
      <div>
        <div className="flex items-center gap-2">
          <div className="text-left">
            <p>{name}</p>
            <p>{description}</p>
          </div>
          <Image src={image || ""} className="rounded" width={80} height={80} alt="" />
        </div>
        <p className="text-left ml-5 mt-5">55,000,000</p>
      </div>
    </div>
  );
};

export default Product;
