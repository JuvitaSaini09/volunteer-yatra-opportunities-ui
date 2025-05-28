import Experiences from "@/components/Experiences";
import Header from "@/components/Header";
import Opportunities from "@/components/Opportunities";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { TabType } from "@/types";

const Home: React.FC = () => {
  return (
    <Tabs defaultValue={TabType.Opportunities} className="w-full">
      <Header />

      <main className="pt-20">
        <TabsContent value={TabType.Opportunities}>
          <Opportunities />
        </TabsContent>

        <TabsContent value={TabType.Experiences}>
          <Experiences />
        </TabsContent>
      </main>
    </Tabs>
  );
};

export default Home;
