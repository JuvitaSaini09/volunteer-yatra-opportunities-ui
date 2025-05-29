import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import ProfileButton from "./ProfileButton";
import TabsNav from "./TabsNav";

const Header: React.FC = () => {
  return (
    <header className="h-20 fixed top-0 w-full z-50 bg-white">
      <nav className="h-full px-5 flex justify-between items-center max-w-[1440px] mx-auto">
        <Logo />
        <TabsNav />
        {/* Profile */}
        <div className=" flex justify-end items-center h-full gap-2.5 py-3 px-[21px]">
          <Link
            href="/register-as-host"
            className="hidden sm:block font-bold text-sm leading-[16px] text-font-primary "
          >
            Become a host
          </Link>
          <ProfileButton />
        </div>
      </nav>
    </header>
  );
};

export default Header;
