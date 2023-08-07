"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Input, Tooltip } from "@mantine/core";
import { Button } from "@mantine/core";

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
    <div className="w-full flex flex-col items-center justify-around px-2 mt-5">
      <p className="font-extrabold text-3xl mb-10">
        سایتی برای پیدا کردن وام های مردمی
      </p>
      <Input
        className="w-1/3"
        icon={<FiSearch />}
        placeholder="نام محصول ..."
        rightSection={
          <div className="m-2">
            <Button
              className="m-2"
              variant="gradient"
              gradient={{ from: "indigo", to: "cyan" }}
            >
              جستجو
            </Button>
          </div>
        }
      />
      <div className="w-full mt-5 text-center" style={{ maxWidth: "30em" }}>
        دیگه لازم نیست دنبال وام از جاهای مختلف بگردی با کجا قسط هر قسطی با هر
        شرایطی رو میتونی اینجا پیدا کنی
      </div>
    </div>
  );
};

export default SearchBar;
