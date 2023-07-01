const Categories = () => {
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
  return (
    <div className="grid grid-cols-fluid">
      {categories.map(({ title, items }) => (
        <div key={title}>
          <h1 className="font-bold text-lg">{title}</h1>
          {items.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Categories;
