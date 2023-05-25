import { prisma } from "@/db";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Post from "./post";
import Form from "./form";

export const createPost = async (id: string, title: string) => {
  "use server";
  await prisma.post.create({data: {authorId: id}})
};

export default async function Home() {
  const session = await getServerSession();
  if (!session) {
    redirect("/signin?callbackUrl=protected/server");
  }
  const user = await prisma.user.findUnique({
    where: { email: session.user?.email || "" },
  });

  const posts = await prisma.post.findMany({ where: { authorId: user?.id } });

  return (
    <div className="px-3">
      <h1>Hello next 13</h1>
      <Link className="p-1 rounded bg-green-900 text-green-100" href="/new">
        New
      </Link>
      <p>{user?.email}</p>
      <Form id={user?.id || ""} createPost={createPost} />
      <div>
        {posts.map((post) => (
          <Post {...post} key={post.id} />
        ))}
      </div>
    </div>
  );
}
