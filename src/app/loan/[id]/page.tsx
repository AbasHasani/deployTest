import toPersianNumber from "@/utils/toPersianNumber";
import { getServerSession } from "next-auth";
import { prisma } from "@/db";
import MaintineForm from "./mantineForm";

const Page = async ({ params: { id: loanId } }: { params: { id: string } }) => {
  const session = await getServerSession();
  // if (!session) {
  //   redirect("/signin?callbackUrl=protected/server");
  // }
  const user = await prisma.user.findUnique({
    where: { email: session?.user?.email || "" },
  });
  const provider = await prisma.offeredLoan.findUnique({
    where: { id: loanId },
  });

  const takeLoan = async ({
    amount,
    time,
  }: {
    amount: number;
    time: number;
  }) => {
    "use server";
    if (user && user?.id && provider) {
      await prisma.takenLoan.create({
        data: {
          amount,
          time,
          prepayment: provider.prepayment,
          percent: provider.percent,
          takerId: user.id,
          productId: provider.productId,
          providerId: provider.providerId,
        },
      });
      console.log(provider?.productId);
    }
  };
  return (
    <div className="bg-form-blue shadow-lg shadow-dark-blue">
      <div className="">
      <div className="grid grid-cols-4 mt-5 rounded-md overflow-hidden shadow-lg h-full">
        <div className="bg-cyan-800 p-10 flex flex-col justify-around">
          <div className="">
            <p className="mb-2 text-gray-200">اسم محصول</p>
            <p className="h-12 bg-gray-200 text-black rounded-md p-2 flex items-center">
              گوشی سامسونگ
            </p>
          </div>
          <div className="">
            <p className="mb-2 text-gray-200">نوع ضمانت</p>
            <p className="h-12 bg-gray-200 text-black rounded-md p-2 flex items-center">
              سفته
            </p>
          </div>
        </div>
        <MaintineForm
          max={provider?.max || 0}
          min={provider?.min || 0}
          takeLoan={takeLoan}
          prepayment={provider?.prepayment || 0}
        />
      </div>
      </div>
    </div>
  );
};

export default Page;
