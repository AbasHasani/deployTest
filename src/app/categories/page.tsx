import Link from "next/link";

const Categories = async () => {
  const categories = [
    {
      title: "موبایل",
      items: ["آیفون", "سامسونگ", "شیایومی", "هوآوی", "نوکیا", "ال جی"],
    },
    {
      title: "کنسول بازی",
      items: ["PS5", "PS4", "XBOX"],
    },
    {
      title: "سرمایشی کولر",
      items: ["کولر گازی", "کولر آبی"],
    },
  ];
  const getu = await new Promise((res, rej) => setTimeout(() => res(""), 2000));
  
  return (
    <div className="grid grid-cols-3 mt-5">
      {categories.map(({ title, items }) => (
        <div key={title}>
          <h1 className="font-bold text-lg">{title}</h1>
          {items.map((item) => (
            <p key={item}>
            <Link href={`/products?category=${item}`} >{item}</Link>
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Categories;
