"use client";
import React, { useState } from "react";
import SearchFilters from "./SearchFilters";
import { CategoryType } from "@/types";
import CategoryFilters from "./CategoryFilters";
import OpportunityCards from "./OpportunityCards";

const Opportunities = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryType>("Sustainability");
  return (
    <div>
      <SearchFilters />
      <section className="px-[40px] xl:px-0">
        <CategoryFilters
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        {/* list of opporunties */}
        <OpportunityCards selectedCategory={selectedCategory} />
      </section>
    </div>
  );
};

export default Opportunities;
