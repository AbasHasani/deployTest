"use client";
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

const Button = () => {
  const { data: session } = useSession();

  return (
    <li>
      {session?.user?.name ? (
        <p className="flex">
          <span className="bg-orange-600 rounded p-1">{session?.user?.name} </span>
          <button onClick={() => signOut()} className="ml-1 p-1 bg-red-500 rounded">Sign out</button>
        </p>
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
