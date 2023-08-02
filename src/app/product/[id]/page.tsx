import { prisma } from "@/db";
import Heading from "./heading";
import OnlineShops from "./onlineShops";

interface Props {
  params: {
    id: string;
  }
}

const Page = async ({params:{id}}:Props) => {
  const product = await prisma.product.findUnique({where: {id}});
  return (
    <div>
      <Heading {...product} />
      <OnlineShops />
    </div>
  );
};

export default Page;
