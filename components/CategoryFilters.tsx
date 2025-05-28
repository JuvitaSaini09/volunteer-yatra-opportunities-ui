import Image from "next/image";
import React from "react";
import { CategoryType } from "@/types";
import { Button } from "./ui/button";

const categories: CategoryType[] = [
  "Sustainability",
  "Homestay",
  "School",
  "Ashram",
  "Treehouses",
  "Domes",
  "Farms",
];

interface CategoryFiltersProps {
  selectedCategory: CategoryType;
  setSelectedCategory: (cat: CategoryType) => void;
}

const CategoryFilters: React.FC<CategoryFiltersProps> = ({
  selectedCategory,
  setSelectedCategory,
}) => (
  <div className="hidden lg:flex justify-between h-[70px] max-w-[1185px] mx-auto">
    <div className="flex gap-[1px]">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          aria-pressed={selectedCategory === category}
          onClick={() => setSelectedCategory(category)}
          className={`flex flex-col justify-center items-center gap-1.5 w-25 cursor-pointer border-b-2 ${
            selectedCategory === category
              ? "border-font-primary text-font-primary"
              : "border-transparent text-gray-tertiary"
          }`}
        >
          <div className="w-[22px] h-10 relative">
            <Image
              src={
                selectedCategory === category
                  ? "/logos/category.svg"
                  : "/logos/inActiveCategory.svg"
              }
              fill
              alt="category icon"
            />
          </div>
          <div className="w-[70px] font-normal text-[11px] flex-none text-center">
            {category}
          </div>
        </button>
      ))}
    </div>
    <div className="flex justify-end gap-2.5 w-35 h-full items-center">
      <Button
        variant="default"
        className="flex items-center justify-center gap-2.5 w-30 h-[50px] border border-[#ECECEC] rounded-[14px] bg-white hover:bg-white"
      >
        <div className="relative w-[26px] h-[26px]">
          <Image src="/logos/filter.svg" fill alt="filter" />
        </div>
        <span className="font-bold text-[14px] text-font-primary">Filter</span>
      </Button>
    </div>
  </div>
);

export default CategoryFilters;
