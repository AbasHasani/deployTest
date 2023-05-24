"use client";

const Error: any = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
};

export default Error;
