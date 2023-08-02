import { getServerSession } from "next-auth";
import UserHeader from "./header";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { prisma } from "@/db";
import { getUser } from "./session";

const UserLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);
  const { id } = await getUser();
  const hasProvider = await prisma.provider.findUnique({
    where: { userId: id },
  });
  return (
    <div>
      {/* @ts-ignore */}
      <UserHeader {...session?.user} hasProvider={hasProvider.id ? true : false}
      />
      {children}
    </div>
  );
};

export default UserLayout;
