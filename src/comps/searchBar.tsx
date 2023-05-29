"use client"
import { useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const brands = [
  { name: "Samsung mobile" },
  { name: "Samsung TV" },
  { name: "LG mobile" },
  { name: "LG laundrary" },
];

const SearchBar = () => {
  const router = useRouter();
  const [productValue, setProductValue] = useState("");
  const search = (e: React.FormEvent) => {
    e.preventDefault();
    if (!productValue) {
      router.push(`/products`);
      return;
    }
    router.push(`/products/${productValue}`);
  };
  const [suggestions, setSuggestions] = useState<string[]>([]);

  return (
    <div className="w-full flex flex-col items-center justify-around px-2">
      <p className="font-extrabold text-3xl mb-10">سایتی برای پیدا کردن وام های مردمی</p>
      <p className="font-bold text-xl mb-5">
        <span className="border-b border-gray-300">محصول</span> خود را جستجو
        کنید
      </p>
      <form
        className="flex items-center bg-light-blue justify-between rounded-3xl h-12 w-full"
        style={{ maxWidth: "35em" }}
      >
        <FiSearch className="m-5 text-lg" />
        <div className="w-full h-full relative bg-inherit">
          <input
            type="text"
            className="w-full h-full bg-inherit outline-none"
            style={{
              direction: "rtl",
            }}
            placeholder="اسم محصول را اینجا تایب کنید..."
            value={productValue}
            onChange={(e) => {
              setProductValue(e.target.value);
              let array = [];
              brands.forEach((brand) => {
                if (
                  brand.name
                    .toLocaleLowerCase()
                    .includes(e.target.value.toLowerCase())
                ) {
                  array.push(brand.name);
                }
              });
              if (e.target.value === "") {
                array = [];
              }
              // console.log(array);
              // setSuggestions(array);
            }}
          />
          {/* <div
            className="absolute top-full left-0 w-full mt-2 rounded-md overflow-hidden"
            style={{ maxHeight: "20rem" }}
          >
            {suggestions.map((suggestion, i) => (
              <div
                className="h-12 w-full flex border-b border-white items-center text-gray-800 px-5 bg-gray-200"
                onClick={() => setProductValue(suggestion)}
                key={i + suggestion}
              >
                {suggestion}
              </div>
            ))}
          </div> */}
        </div>
        <button
          type="submit"
          className="mr-2 h-full px-5 rounded-full  bg-dark-blue"
          onClick={(e) => search(e)}
        >
          جستجو
        </button>
      </form>
      <div className="w-full mt-5 text-center" style={{maxWidth: "30em"}}>دیگه لازم نیست دنبال وام از جاهای مختلف بگردی با کجا قسط هر قسطی با هر شرایطی رو میتونی اینجا پیدا کنی</div>
    </div>
  );
};

export default SearchBar;
