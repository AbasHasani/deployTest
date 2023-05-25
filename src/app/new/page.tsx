import { prisma } from "@/db";
import Link from "next/link";
import { redirect } from "next/navigation";

async function createUser(data: FormData) {
  "use server";

  const name = data.get("name")?.valueOf();
  console.log("Server actino");
  if (!name || typeof name != "string") return;
  console.log("name: " + name);
  await prisma.user.create({ data: { name } });
  redirect("/users");
}

const Page = () => {
  return (
    <>
      <header className="flex justify-around">
        <div>New</div>
        <Link href={"/"}>Home</Link>
      </header>
      <form action={createUser}>
        <div className="flex flex-col">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            className="border rounded p-1 w-60 mb-2"
          />
        </div>
        <button type="submit" className="bg-cyan-700 rounded p-1 text-cyan-100">
          Submit
        </button>
      </form>
    </>
  );
};

export default Page;
