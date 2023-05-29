import { prisma } from "@/db";
import Image from "next/image";
import Link from "next/link";
import User from "./user";
import SearchBar from "@/comps/searchBar";
import Categories from "@/comps/categories";

// const deleteUser = async (id: string) => {
//   "use server";
//   await prisma.user.delete({ where: { id } });
// };

export default async function Home() {
  // const users = await prisma.user.create({data: {}})
  return (
    <div className="">
      <div
        className="searchBarHeight flex relative md:flex-row flex-col items-center justify-center"
        style={{ minHeight: "20rem" }}
      >
        <div className="bg-cover rounded-r-lg absolute md:relative -z-20 opacity-50 md:opacity-100 frontImage"></div>
        <SearchBar />
      </div>
      <Categories />
    </div>
  );
}
