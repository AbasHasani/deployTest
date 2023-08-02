import { prisma } from "@/db";
import Image from "next/image";
import Link from "next/link";

interface Props {
  params: { id: string };
}

const Page = async ({ params: { id } }: Props) => {
  const provider = await prisma.provider.findUnique({ where: { id } });
  const products = await prisma.product.findMany({ where: { providerId: id } });
  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-3">
        <div className="relative h-[15rem] w-[10rem]">
          <Image fill alt="" src="/p2.jpg" className="rounded" />
        </div>
        <div className="flex flex-col justify-end gap-3 mb-3">
          <p className="">{provider?.name}</p>
          <Link
            href={"https://"+provider?.website || ""}
            className="text-blue-500 italic underline"
          >
            سایت
          </Link>
        </div>
      </div>
      {/* info */}
      <div className="flex flex-col gap-3">
        <p>
          <span>انواع ضمانت:</span>
          <span>چک </span>
          <span>سفته</span>
        </p>
        <p>
          <span>سقف میزان اعتبار:</span>
          <span>{provider?.highestCredit}</span>
        </p>
        <p>
          <span>قرارداد های خاص:</span>
          <span>{provider?.specialContracts}</span>
        </p>
        <p>
          <span>نوع اعتبار:</span>
          <span>نقد</span>
        </p>
      </div>
      {/* Refrences */}
      <div className="flex justify-around">
        <div>
          <h2>سایت های طرف قرارداد</h2>
          <div>
            <p>{provider?.website}</p>
            <p>2.ir</p>
          </div>
        </div>
        <div>
          <h2>محصولات:</h2>
          <div>
            {products.map((product) => (
              <div key={product.id}>
                <p>{product.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
