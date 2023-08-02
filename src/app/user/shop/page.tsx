import { prisma } from "@/db";
import { getUser } from "../session";
import { ShopForm as Form } from "./form";
import Header from "./header";
// import { products } from "@/app/products/page";
import Product from "./product";

const createProduct = async (
  description: string,
  name: string,
  price: number,
  min: number,
  max: number,
  prepayment: number,
  providerId: string
) => {
  "use server";
  await prisma.product.create({
    data: {
      description,
      name,
      price,
      max,
      min,
      prepayment,
      providerId,
    },
  });
  console.log("Hi")
};

const createLoan = async (min: string, max: string, prepayment: string, percent: string, providerId: string , productId: string) => {
  "use server";
  await prisma.loan.create({
    data: {
      max: Number(max),
      min: Number(min),
      percent: Number(percent),
      prepayment: Number(prepayment),
      providerId,
      productId
    }
  })
}

const Page = async () => {
  const { id: userId, name } = await getUser();
  const shop = await prisma.provider.findUnique({ where: { userId } });
  const products = await prisma.product.findMany({
    where: { providerId: shop?.id },
  });
  return (
    <div>
      <Header />
      <div className="max-w-[40rem] mx-auto">
        <Form createProduct={createProduct} providerId={shop?.id || ""} />
      </div>
      <div className="mt-5">
        {products.map((product) => (
          <Product key={product.id} {...product} createLoan={createLoan} providerId={shop?.id || ""} />
        ))}
      </div>
    </div>
  );
};

export default Page;
