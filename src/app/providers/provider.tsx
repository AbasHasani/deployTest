import Image from "next/image";
import { FC } from "react";

interface Props {
  name: string;
  image: string | null;
}

const Provider: FC<Props> = ({ name, image }) => {
  return (
    <div className="flex items-center gap-2 justify-between border-info/50 my-3 rounded shadow p-6">
      <div>
        <p>سقف میزان اعتبار:500,000,000 تومان</p>
        <p>نوع ضمانت: چک و سفته</p>
        <p>نوع اعتبار: کیف پول</p>
      </div>
      <div className="flex flex-col items-center">
        <Image
          src={image || ""}
          width={70}
          height={70}
          className="rounded"
          alt={name}
        />
        <p className="p-1 mt-2 bg-secondary/10 rounded">توضیحات بیشتر...</p>
      </div>
    </div>
  );
};

export default Provider;
