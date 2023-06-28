import Image from "next/image";
import { FC } from "react";

interface Props {
  name: string;
  image: string | null;
}

const Article: FC<Props> = ({ name, image }) => {
  return (
    <div className="flex gap-2 justify-between items-center border-info/50 my-3 rounded shadow p-6">
      <div>
        <div className="flex items-center gap-2">
          <div>
            <p>چگونه حساب کاربری بسازیم؟</p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-2">
          <div className="text-left">
            <p>{name}</p>
          </div>
          <Image src={image || ""} className="rounded" width={80} height={80} alt="" />
        </div>
        <p className="text-left ml-5 mt-5">55,000,000</p>
      </div>
    </div>
  );
};

export default Article;
