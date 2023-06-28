import React from "react";

const Categories = () => {
  return (
    <div>
      <h1 className="mb-5 font-bold text-lg text-light-blue">دسته بندی ها</h1>
      <div className="flex gap-2 px-6 py-3 overflow-auto">
        {Array(6)
          .fill(null)
          .map((_, i) => (
            <div
              className="flex-1 bg-cover bg-right relative bg-white transition-all flex flex-col justify-between rounded-xl overflow-hidden cursor-pointer hover:-mt-3"
              style={{
                minHeight: "18em",
                minWidth: "10rem",
                height: "100%",
                width: "100%",
                background:
                  "linear-gradient(to top, rgba(255,255,255,0) 0%,  #CCE3EB 80%), url('/category.png') no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center top ",
              }}
              key={i}
            >
              <p className="text-black text-center p-3 text-lg font-bold">
                لپتاپ
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Categories;
