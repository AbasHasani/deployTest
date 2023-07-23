import Provider from "./provider";
import SideBar from "./siebarOptions";

const Page = () => {
  const options = [
    "پربازدید ترین ها",
    "بیشترین مبلغ",
    "کمترین مبلغ",
    "پیشنهاد وام گیرندگان",
  ];
  return (
    <div className="flex gap-2 items-start mt-5">
      <SideBar />
      <div className="flex-1">
        <div className="flex justify-around border border-info/20 p-3 rounded">
          {options.map((option) => (
            <p key={option}>{option}</p>
          ))}
        </div>
        <div>
          {Array(4)
            .fill(null)
            .map((_, i) => (
              <Provider
                name={"Provider number " + i}
                image={`/p${i + 1}.jpg`}
                key={i}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
