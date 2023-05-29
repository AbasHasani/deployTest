import { prisma } from "@/db";
import Product from "./product";

const Page = async () => {
  const products = await prisma.product.findMany({
    where: { loans: { gt: 0 } },
  });
  return (
    <div className="p-5">
      <div className="md:grid flex flex-col md:grid-cols-4 gap-5 auto-rows-fr">
        {products?.map((product: any) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Page;
