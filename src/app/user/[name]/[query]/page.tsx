import { prisma } from "@/db";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Product from "./product";
import Form from "./form";
import AddProductPanel from "@/comps/addProductPanel";
import Loan from "./loan";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const createProduct = async (
  providerId: string,
  name: string,
  description: string
) => {
  "use server";
  await prisma.product.create({ data: { name, description, providerId } });
};

const getUser = async (id: string) => {
  "use server";
  const user = await prisma.user.findUnique({ where: { id } });
  return { username: user?.name, email: user?.email, number: user?.number };
};

export type CreateLoanArgs = {
  max: number;
  min: number;
  percent: number;
  prepayment: number;
  pPrepayment: number;
  productId: string;
  providerId: string;
  loans: number;
  pMax: number;
  pMin: number;
};

const createLoan = async ({
  max,
  min,
  prepayment,
  percent,
  productId,
  providerId,
  loans,
  pPrepayment,
  pMax,
  pMin,
}: CreateLoanArgs) => {
  "use server";
  await prisma.offeredLoan.create({
    data: {
      max,
      min,
      percent,
      prepayment,
      productId,
      providerId,
    },
  });
  await prisma.product.update({
    where: { id: productId },
    data: {
      max: pMax == 0 ? min : Math.max(max, pMax),
      min: pMin == 0 ? min : Math.min(min, pMin),
      prepayment: pPrepayment == 0 ? min : Math.min(prepayment, pPrepayment),
      loans: {
        increment: 1,
      },
    },
  });
};

export default async function User({
  params,
}: {
  params: { query: "product" | "takenLoan" | "offeredLoan" | "givenLoan" };
}) {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/signin?callbackUrl=protected/server");
  }
  const user = await prisma.user.findUnique({
    where: { email: session.user?.email || "" },
  });

  const tables = ["product", "takenLoan", "offeredLoan"];
  let query = tables.includes(params.query) ? params.query : "product";
  if (params.query == "givenLoan") {
    query = "takenLoan";
  }
  let field: string;
  if (params.query == "givenLoan") {
    field = "takerId";
  } else {
    field = "providerId";
  }
  //@ts-ignore
  const data = await prisma[query].findMany({
    where: { [field]: user?.id },
  });

  return (
    <div className="px-3 absolute top-20 left-0 right-0">
      <header className="h-80 flex items-end bg-gradient-header-d">
        <div className="flex items-center container mx-auto mb-5">
          <Image
            width={100}
            height={100}
            className="ml-3"
            style={{ borderRadius: "50%" }}
            src={session.user?.image || ""}
            alt={session.user?.name || ""}
          />
          {/* <Link href={session.user?.image || ""}>Image</Link> */}
          <div>
            <ul>
              <li className="text-light-blue/50">نام کاربری</li>
              <li className="font-bold text-lg">{session.user?.name}</li>
              <li className="text-light-blue/50">ایمیل</li>
              <li className="font-bold text-lg">{session.user?.email}</li>
            </ul>
          </div>
        </div>
      </header>
      <div className="mb-5">
        <div className="container mx-auto">
          <ul className="flex justify-around w-full">
            <li className="p-3">
              <Link href={`/user/${session.user?.name}/product`}>محصولات</Link>
            </li>
            <li className="p-3">
              <Link href={`/user/${session.user?.name}/takenLoan`}>
                وام ها گرفته شده
              </Link>
            </li>
            <li className="p-3">
              <Link href={`/user/${session.user?.name}/offeredLoan`}>
                وام های ارایه شده
              </Link>
            </li>
            <li className="p-3">
              <Link href={`/user/${session.user?.name}/givenLoan`}>
                وام های تعلق داده شده
              </Link>
            </li>
          </ul>
        </div>
        <div
          className="w-full"
          style={{
            height: 1,
            background:
              "linear-gradient(to right, transparent, rgba(80,0,80,1), transparent)",
          }}
        />
      </div>
      <div className="container mx-auto">
        {query == "product" && <AddProductPanel id={user?.id || ""} createProduct={createProduct} />}
        <div className="mt-5 flex flex-col gap-2">
          {/* {products.map((product) => (
            <Product
              {...product}
              key={product.id}
              userId={user?.id || ""}
              createLoan={createLoan}
            />
          ))} */}
          {data?.map((item: any) =>
            query == "product" ? (
              <Product
                {...item}
                key={item.id}
                userId={user?.id || ""}
                createLoan={createLoan}
              />
            ) : (
              <Loan key={item.id} loan={item} query={query} getUser={getUser} />
            )
          )}
        </div>
      </div>
    </div>
  );
}
