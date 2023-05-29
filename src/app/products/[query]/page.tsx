import { prisma } from "@/db";
import Product from "../product";
import { URLfix } from "@persian-tools/persian-tools";

const Page = async ({ params }: { params: { query: string } }) => {
  let query: string = URLfix(`http://${params.query}`) || "";
  query = query.substring(7,query.length)
  console.log(query)
  const products = await prisma.product.findMany({
    where: { loans: { gt: 0 }, name: { contains: query } },
  });
  return (
    <div className="mx-5 p-5">
      <div className="md:grid flex flex-col md:grid-cols-4 gap-5 auto-rows-fr">
        {products?.map((product: any) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Page;
