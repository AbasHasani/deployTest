import { prisma } from "@/db";
import Image from "next/image";
import Link from "next/link";
import User from "../user";

const deleteUser = async (id: string) => {
  "use server";
  await prisma.user.delete({where: {id}})
};

export default async function Home() {
  const users = await prisma.user.findMany();

  return (
    <div className="">
      <h1>Hello next 13</h1>
      <Link className="p-1 rounded bg-green-900 text-green-100" href="/new">
        New
      </Link>
      {users.map((user) => (
        <User {...user} key={user.id} deleteUser={deleteUser} />
      ))}
    </div>
  );
}
