"use client";
const Error = ({
  error,
  reset,
}: {
  error: { message: string };
  reset: () => void;
}) => {
  return (
    <div>
      <h1>User Page</h1>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
};

export default Error;
