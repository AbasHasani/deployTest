import { Button } from "@/app/components/ui/button";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { prisma } from "@/db";
import UserHeader from "./header";

const Page = async () => {
  return (
    <div>
      <h1>Empty page haha</h1>
    </div>
  );
};

export default Page;
