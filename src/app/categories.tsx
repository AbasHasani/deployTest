import Image from "next/image";

const categories = ["موبایل", "کتاب", "خانه", "ماشین", "لپ تاپ", "دوچرخه"];

const Categories = () => {
  return (
    <div className="mb-10">
      <h2 className="text-center font-bold py-8 ">دسته بندی</h2>
      <div className="flex justify-center gap-2 md:gap-0 overflow-auto pt-3">
        {categories.map((category, i) => (
          <div
            key={category}
            className="min-w-[12rem] transition-all relative h-[17rem] overflow-hidden pt-1 hover:bg-black hover:mx-2 cursor-pointer text-center hover:pt-14 group border-slate-200 shadow"
          >
            <Image
              src={`/p${i + 1}.jpg`}
              fill
              alt=""
              className="object-cover"
              style={{
                maskImage: "linear-gradient(to bottom, transparent, black)",
              }}
            />
            <p className="relative transition-all group-hover:bg-white/50 group-hover:text-white p-1 py-2 rounded-3xl mx-10">
              {category}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
