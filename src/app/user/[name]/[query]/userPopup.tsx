"use client";
import { FC, useEffect, useState } from "react";
import {IoIosCopy} from "react-icons/io"

interface Props {
  closePopup: () => void;
  user: { username: string; email: string; number: string };
}

const UserPopup: FC<Props> = ({ closePopup, user }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center">
      <div
        className="fixed top-0 left-0 right-0 bottom-0 bg-slate-800/80 z-10"
        onClick={() => closePopup()}
      />
      <div
        className="p-20 z-20 bg-gradient-to-tr from-light-blue to-dark-blue rounded-tr-lg rounded-bl-lg"
        onClick={() => {}}
      >
        <ul className="flex flex-col gap-1 items-center text-black font-bold text-lg">
          {user.username && (
            <li className="bg-light-blue/50 p-1 rounded">{user.username}</li>
          )}
          {user.email && (
            <li className="bg-light-blue/50 p-1 rounded flex items-center cursor-pointer" onClick={()=> navigator.clipboard.writeText(user.email)}>
              <IoIosCopy size={20} />
              <p className="mr-1">{user.email}</p>
            </li>
          )}
          {user.number && (
            <li className="bg-light-blue/50 p-1 rounded flex items-center cursor-pointer" onClick={()=> navigator.clipboard.writeText(user.email)}>
              <IoIosCopy />
              <p className="mr-1">{user.number}</p>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default UserPopup;
