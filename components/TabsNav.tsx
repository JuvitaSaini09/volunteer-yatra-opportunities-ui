// components/TabsNav.tsx
import { TabsList, TabsTrigger } from "./ui/tabs";
import { TabType } from "@/types";

const TabsNav = () => (
  <TabsList className="hidden md:flex items-center gap-2.5 bg-white h-10">
    <TabsTrigger
      value={TabType.Opportunities}
      className="custom-tab-trigger font-poppins"
    >
      Opportunities
    </TabsTrigger>
    <TabsTrigger
      value={TabType.Experiences}
      className="custom-tab-trigger font-poppins"
    >
      Experiences
    </TabsTrigger>
  </TabsList>
);

export default TabsNav;
