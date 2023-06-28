"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { FC, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import SignedIn from "./signedIn";
import { Session } from "next-auth";

interface Props {
  session: Session | null;
}

const Header: FC<Props> = ({ session }) => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className="w-full h-20 z-50">
      <nav className="lg:w-3/5 lg:mx-auto mx-5 flex justify-between items-center h-full">
        <Link href="/">
          <button className="flex-1 text-lg font-bold">کجاـقسط</button>
        </Link>
        <ul
          className={`flex-1 flex flex-col md:right-0 md:flex-row md:bg-inherit bg-cyan-900 transition-all justify-around items-center w-1/2 h-screen md:w-auto md:h-auto fixed top-0 md:relative ${
            openMenu ? "right-0 w-screen" : "-right-full"
          }`}
        >
          <li className="hover:bg-white/20 p-1 rounded-lg transition-all cursor-pointer">
            <Link href="/categories"> دسته بندی کالاها</Link>
          </li>
          <li className="hover:bg-secondary hover:text-primary p-1 border border-black bg-primary rounded-lg transition-all cursor-pointer">
            <Link href="/providers">وام دهندگان</Link>
          </li>
          <li className="hover:bg-white/20 p-1 rounded-lg transition-all cursor-pointer">
            <Link href="/learning">آموزش</Link>
          </li>
          <li className="hover:bg-white/20 p-1 rounded-lg transition-all cursor-pointer">
            <Link href="/">درباره ما</Link>
          </li>
          <li>
            {session?.user ? (
              <SignedIn session={session} />
            ) : (
              <button onClick={() => signIn()}>وارد شوید</button>
            )}
          </li>
        </ul>
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="md:hidden z-50"
        >
          <AiOutlineMenu
            className={`${openMenu ? "text-white" : "text-white"}`}
          />
        </button>
      </nav>
      <div
        className=""
        style={{
          height: "1px",
          background: "linear-gradient(to right,#F2E9E4, #46494C,#F2E9E4)",
        }}
      />
    </header>
  );
};

export default Header;
