import { prisma } from "@/db";
import Image from "next/image";
import Link from "next/link";
import User from "./user";
import SearchBar from "./searchBar";
import Categories from "@/comps/categories";
import Events from "./eventsSlider";

export default async function Home() {
  return (
    <div className="">
      <SearchBar />
      <Events />
      <Categories />
    </div>
  );
}
