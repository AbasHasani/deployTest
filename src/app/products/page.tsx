import { prisma } from "@/db";
import Product from "./product";
import Sidebar from "./sidebarOptions";

const Page = async () => {
  const products = await prisma.product.findMany();
  const options = [
    "پربازدیدترین",
    "ارزان ترین",
    "گران ترین",
    "پیشنهاد و خریداران",
  ];
  return (
    <div className="flex gap-2 items-start mt-5">
      <Sidebar />
      <div className="flex-1">
        <div className="flex justify-around border border-info/20 p-3 rounded">
          {options.map((option) => (
            <p>{option}</p>
          ))}
        </div>
        {products.map((product) => (
          <Product {...product} />
        ))}
      </div>
    </div>
  );
};

export default Page;
