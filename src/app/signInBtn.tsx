"use client";
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const Button = () => {
  const { data: session } = useSession();

  return (
    <li>
      {session?.user?.name ? (
        <div className="flex">
          <div className="bg-orange-600 rounded p-1 flex items-center">
            <Link
              href={`/user/${session.user.name}`}
              className="mx-3 text-red-100"
            >
              {session?.user?.name}
            </Link>
            <Image
              width={40}
              height={40}
              className=""
              src={session?.user.image || ""}
              alt=""
              style={{ borderRadius: "50%" }}
            />
          </div>
          <button
            onClick={() => signOut()}
            className="ml-1 p-1 bg-red-500 rounded"
          >
            Sign out
          </button>
        </div>
      ) : (
        <button
          className="cursor-pointer bg-emerald-500 rounded"
          onClick={() => signIn()}
        >
          Sign-in
        </button>
      )}
    </li>
  );
};

export default Button;
