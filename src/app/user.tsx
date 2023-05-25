"use client";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface Props {
  name: string;
  id: string;
  deleteUser: (id: string) => void;
}

const User: FC<Props> = ({ name, id: userId, deleteUser }) => {
  const router = useRouter()
  return (
    <div className="bg-emerald-300 mb-1">
      <span className="mr-2 p-1 rounded-sm">{name}</span>
      <button onClick={() => {
        deleteUser(userId)
        router.refresh()
      }} className="mr-2 p-1 rounded-sm bg-red-400">
        Delete
      </button>
    </div>
  );
};

export default User;
