import Article from "./article";

const Page = async () => {
  return (
    <div>
      <h1 className="text-center border-b border-info p-3">آموزش</h1>
      <div>
        {Array(5)
          .fill(null)
          .map((_, i) => (
            <Article name={"مقاله" + i} key={i} image={`/p${i + 1}.jpg`} />
          ))}
      </div>
    </div>
  );
};

export default Page;
