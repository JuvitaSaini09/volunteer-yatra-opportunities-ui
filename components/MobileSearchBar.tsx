import { SearchIcon } from "lucide-react";
import { Input } from "./ui/input";

const MobileSearchBar: React.FC = () => (
  <div className="block md:hidden mx-auto relative flex items-center w-[347px] h-[60px] bg-[#F9F9F9] rounded-[40px] border border-solid border-[#D2D7E6] overflow-hidden">
    <SearchIcon className="absolute left-[99px] w-5 h-5 text-[#114047]" />
    <Input
      className="h-full pl-[130px] pr-8 py-0 border-none bg-transparent font-bold text-[#114047] text-sm placeholder:text-[#114047]"
      type="text"
      placeholder="Start Your Search"
    />
  </div>
);

export default MobileSearchBar;
