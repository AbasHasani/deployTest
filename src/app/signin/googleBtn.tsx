"use client";

import { signIn } from "next-auth/react";

const GoogleBtn = () => {
  return (
    <button
      onClick={() => signIn("google")}
      className="p-1 px-3 bg-form-blue text-light-blue rounded-md"
    >
      <span>وارد شدن با گوگل</span>
    </button>
  );
};

export default GoogleBtn;
