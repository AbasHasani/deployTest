import { prisma } from "@/db";
import Product from "./product";
import Sidebar from "./sidebarOptions";

export const products = [
  {name: "لپتاپ", description: "لپتاپ دانشجویی", price: 20, prepayment: 10, image: "/1.jpeg", id: 1},
  {name: "1لپتاپ", description: "لپتاپ دانشجویی1", price: 30, prepayment: 20, image: "/2.jpeg", id: 2},
  {name: "2لپتاپ", description: "لپتاپ دانشجویی2", price: 40, prepayment: 30, image: "/3.jpeg", id: 3},
]

const Page = async () => {
  // const products = await prisma.product.findMany();
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
            <p key={option}>{option}</p>
          ))}
        </div>
        {products.map((product) => (
          <Product {...product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Page;
