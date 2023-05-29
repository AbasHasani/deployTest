import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";

const Page = async () => {
  const session = await getServerSession(authOptions);
  return <h1>{JSON.stringify(session)}1</h1>;
};

export default Page;
