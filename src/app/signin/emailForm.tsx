"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

const EmailForm = () => {
  const [email, setEmail] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        signIn("email", { email });
      }}
    >
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button>Sign in with email</button>
    </form>
  );
};

export default EmailForm;
