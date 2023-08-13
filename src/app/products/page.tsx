// "use client";
// import { Paper, SegmentedControl } from "@mantine/core";
import { prisma } from "@/db";
import Options from "./options";
import Product from "./product";
import Sidebar from "./sidebarOptions";
import Products from "./products";

const products = [
  {
    name: "لپتاپ",
    description: "لپتاپ دانشجویی",
    price: 20,
    prepayment: 10,
    image: "/1.jpeg",
    id: 1,
  },
  {
    name: "1لپتاپ",
    description: "لپتاپ دانشجویی1",
    price: 30,
    prepayment: 20,
    image: "/2.jpeg",
    id: 2,
  },
  {
    name: "2لپتاپ",
    description: "لپتاپ دانشجویی2",
    price: 40,
    prepayment: 30,
    image: "/p3.jpg",
    id: 3,
  },
  {
    name: "3لپتاپ",
    description: "لپتاپ دانشجویی2",
    price: 100,
    prepayment: 32,
    image: "/p4.jpg",
    id: 4,
  },
  {
    name: "4لپتاپ",
    description: "لپتاپ دانشجویی2",
    price: 40,
    prepayment: 25,
    image: "/p5.jpg",
    id: 5,
  },
  {
    name: "5لپتاپ",
    description: "لپتاپ دانشجویی2",
    price: 47,
    prepayment: 13,
    image: "/p5.jpg",
    id: 6,
  },
  {
    name: "6لپتاپ",
    description: "لپتاپ دانشجویی2",
    price: 10,
    prepayment: 30,
    image: "/p5.jpg",
    id: 7,
  },
];

const Page = async ({searchParams}:any) => {
  // const products = await prisma.product.findMany();
  const getu = await new Promise((res, rej) => setTimeout(() => res(""), 2000));
  return (
    <div className="flex flex-col md:flex-row gap-2 items-start">
      <Sidebar />
      <Products products={products} />
    </div>
  );
};

export default Page;
