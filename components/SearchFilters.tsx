"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { SearchIcon } from "lucide-react";
import { Separator } from "./ui/separator";
import SearchInput from "./SearchInput";
import MobileSearchBar from "./MobileSearchBar";

interface SearchFormData {
  location: string;
  skill: string;
  dateRange: string;
}

const SearchFilters: React.FC = () => {
  const [searchData, setSearchData] = useState<SearchFormData>({
    location: "Mcleodganj, Himachal Pradesh",
    skill: "Content Creator",
    dateRange: "24 Sep 2024 - 12 Oct 2024",
  });

  const searchHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(searchData);
  };

  return (
    <div>
      <section className="hidden md:block h-[80px] border-b border-[#0000001a]">
        <form
          onSubmit={searchHandler}
          className="
          mx-auto h-[60px] w-full
          sm:max-w-[600px] md:max-w-[700px]
          flex justify-between items-center gap-4
          rounded-[66px] bg-white
          border border-slate-blue
          shadow-[0px_2px_4px_rgba(7,21,27,0.06)]
          pl-5 pr-1.5 py-5
        "
        >
          <SearchInput
            label="What?"
            value={searchData.location}
            onChange={(e) =>
              setSearchData({ ...searchData, location: e.target.value })
            }
            className="w-[210px]"
            inputClassName="text-blue-green"
          />

          <Separator
            orientation="vertical"
            className="h-[34px] mt-[-7px] mb-[-7px] bg-gray-secondary"
          />

          <SearchInput
            label="Skill?"
            value={searchData.skill}
            onChange={(e) =>
              setSearchData({ ...searchData, skill: e.target.value })
            }
            className="w-[150px]"
            inputClassName="text-blue-green"
          />

          <Separator
            orientation="vertical"
            className="h-[34px] mt-[-7px] mb-[-7px] bg-gray-secondary"
          />

          <SearchInput
            label="When?"
            value={searchData.dateRange}
            onChange={(e) =>
              setSearchData({ ...searchData, dateRange: e.target.value })
            }
            className="w-[180px]"
            inputClassName="text-blue-green"
          />

          <div>
            <Button
              type="submit"
              size="icon"
              className="w-11 h-11 bg-font-primary rounded-[50px] hover:bg-font-primary/90"
            >
              <SearchIcon className="w-5 h-5 text-white" />
            </Button>
          </div>
        </form>
      </section>

      <MobileSearchBar />
    </div>
  );
};

export default SearchFilters;
