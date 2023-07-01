import { prisma } from "@/db";
import { getUser } from "../session";
import { ShopForm as Form } from "./form";
import Header from "./header";
import { products } from "@/app/products/page";

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
  // await prisma.product.create({
  //   data: {
  //     description,
  //     name,
  //     price,
  //     max,
  //     min,
  //     prepayment,
  //     providerId,
  //   },
  // });
  console.log("Hi")
};

const Page = async () => {
  const { id: userId, name } = await getUser();
  // const shop = await prisma.provider.findUnique({ where: { userId } });
  // const products = await prisma.product.findMany({
  //   where: { providerId: shop?.id },
  // });
  return (
    <div>
      <Header />
      <div className="max-w-[40rem] mx-auto">
        <Form createProduct={createProduct} providerId={"123"} />
      </div>
      <div className="mt-5">
        {products.map((product) => (
          <div key={product.id} className="p-3 rounded bg-primary">
            <p>{product.name}</p>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
