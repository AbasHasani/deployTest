"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { FC, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import SignedIn from "./signedIn";
import { Session } from "next-auth";

interface Props {
  session: Session | null
}

const Header: FC<Props> = ({session}) => {
  const [openMenu, setOpenMenu] = useState(false);
  // const {
  //   data: session,
  // }: { data: { user: { name: string; email: string; image: string } } } | any =
  //   useSession();
  return (
    <header className="w-full h-20 absolute top-0 left-0 z-50 text-white">
      <nav className="lg:w-3/5 lg:mx-auto mx-5 flex justify-between items-center h-full">
        <Link href="/">
          <button className="flex-1 text-lg font-bold">کجاـقسط</button>
        </Link>
        <ul
          className={`flex-1 flex flex-col text-white md:right-0 md:flex-row md:bg-inherit bg-cyan-900 transition-all justify-around items-center w-1/2 h-screen md:w-auto md:h-auto fixed top-0 md:relative ${
            openMenu ? "right-0 w-screen" : "-right-full"
          }`}
        >
          <li className="hover:bg-white/20 p-1 rounded-lg transition-all cursor-pointer">
            ارتباط
          </li>
          <li className="hover:bg-white/20 p-1 rounded-lg transition-all cursor-pointer">
            درباره
          </li>
          <li className="hover:bg-white/20 p-1 rounded-lg transition-all cursor-pointer">
            <Link href="/">خانه</Link>
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
          background: "linear-gradient(to right,#050018, white,#050018)",
        }}
      />
    </header>
  );
};

//left-0 top-0

export default Header;
