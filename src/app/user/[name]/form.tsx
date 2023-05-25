"use client";

import { useRouter } from "next/navigation";
import { FC, useState } from "react";

interface Props {
  id: string;
  createPost: (id: string, title: string) => void;
}

const Form: FC<Props> = ({ id, createPost }) => {
  const [value, setValue] = useState("");
  const router = useRouter();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createPost(id, value);
        router.refresh()
      }}
    >
      <div className="flex flex-col">
        <label htmlFor="title">title</label>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          name="title"
          className="w-64 mb-3 border outline-cyan-400"
        />
      </div>
      <button type="submit" className="p-1 rounded bg-cyan-700 text-cyan-50">
        Submit
      </button>
    </form>
  );
};

export default Form;
