import Experiences from "@/components/Experiences";
import Opportunities from "@/components/Opportunities";
import { TabsContent } from "@/components/ui/tabs";
import { TabType } from "@/types";

const Home: React.FC = () => {
  return (
    <main className="pt-20">
      <TabsContent value={TabType.Opportunities}>
        <Opportunities />
      </TabsContent>

      <TabsContent value={TabType.Experiences}>
        <Experiences />
      </TabsContent>
    </main>
  );
};

export default Home;
