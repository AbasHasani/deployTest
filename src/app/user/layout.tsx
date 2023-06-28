import { getServerSession } from "next-auth";
import UserHeader from "./header";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { prisma } from "@/db";

const UserLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);
  const user = await prisma.user.findUnique({
    where: {
      email: session?.user?.email || "none",
    },
  });
  return (
    <div>
      <UserHeader {...user} hasProvider={false} />
      {children}
    </div>
  );
};

export default UserLayout;
