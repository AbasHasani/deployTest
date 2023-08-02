import { prisma } from "@/db";
import Product from "../product";
import Sidebar from "../sidebarOptions";
import { SegmentedControl } from "@mantine/core";
import Options from "../options";
import { FC } from "react";

const products = [
  {
    name: "Iphone",
    description: "لپتاپ دانشجویی",
    price: 20,
    prepayment: 10,
    image: "/1.jpeg",
    id: 1,
  },
  {
    name: "Iphone 1",
    description: "لپتاپ دانشجویی1",
    price: 30,
    prepayment: 20,
    image: "/2.jpeg",
    id: 2,
  },
  {
    name: "Iphone 2",
    description: "لپتاپ دانشجویی2",
    price: 40,
    prepayment: 30,
    image: "/p3.jpg",
    id: 3,
  },
  {
    name: "Iphone 2",
    description: "لپتاپ دانشجویی2",
    price: 40,
    prepayment: 30,
    image: "/p4.jpg",
    id: 4,
  },
];

interface Props {
  params: {
    query: string;
  }
}

const Page = async ({params:{query}}: Props) => {
  const products = await prisma.product.findMany({where: {
    name: {
      contains: query
    }
  }});
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
        <Options options={options} />
        <div className="grid grid-cols-fluid gap-2">
          {products.map((product) => (
            <Product {...product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
