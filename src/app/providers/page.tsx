import { prisma } from "@/db";
import Options from "./options";
import Provider from "./provider";
import SideBar from "./siebarOptions";

const Page = async () => {
  const options = [
    "پربازدید ترین ها",
    "بیشترین مبلغ",
    "کمترین مبلغ",
    "پیشنهاد وام گیرندگان",
  ];
  const providers = await prisma.provider.findMany();
    return (
    <div className="flex gap-2 items-start mt-5">
      <SideBar />
      <div className="flex-1">
        {/* <div className="flex justify-around border border-info/20 p-3 rounded"> */}
          <Options options={options} />
        {/* </div> */}
        <div>
          {providers.map((provider) => (
              <Provider
                {...provider}
                key={provider.id}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
