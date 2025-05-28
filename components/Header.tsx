import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TabsList, TabsTrigger } from "./ui/tabs";
import { Button } from "./ui/button";
import { TabType } from "@/types";

const Header: React.FC = () => {
  return (
    <header className="h-20 fixed top-0 w-full z-50">
      <nav className="h-full px-5 flex justify-between items-center max-w-[1440px] mx-auto">
        {/* Logo */}
        <Link href="/">
          <div className="relative h-8 sm:h-9 w-auto aspect-[168/36]">
            <Image
              src="/images/logo.svg"
              fill
              className="object-contain"
              alt="logo"
            />
          </div>
        </Link>

        {/* Tabs: Opportunities and Experiences */}
        <TabsList className="hidden md:flex items-center gap-2.5 bg-white h-10">
          <TabsTrigger
            value={TabType.Opportunities}
            className="custom-tab-trigger"
          >
            Opportunities
          </TabsTrigger>
          <TabsTrigger
            value={TabType.Experiences}
            className="custom-tab-trigger"
          >
            Experiences
          </TabsTrigger>
        </TabsList>

        {/* Profile */}
        <div className=" flex justify-end items-center h-full gap-2.5 py-3 px-[21px]">
          <Link
            href="/register-as-host"
            className="hidden sm:block font-bold text-sm leading-[16px] text-font-primary "
          >
            Become a host
          </Link>
          <Button
            variant={"default"}
            className="flex gap-2.5 items-center mx-auto w-20 h-10 bg-white border-1 border-grey-primary rounded-[46px] hover:bg-gray-100"
          >
            <Image
              src="/images/user.svg"
              width={24}
              height={24}
              alt="user icon"
            />
            <Image
              className="hidden sm:block"
              src="/images/profile.svg"
              width={24}
              height={24}
              alt="profile icon"
            />
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
