import Header from "@/components/Header";
import SearchFilters from "@/components/SearchFilters";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { TabType } from "@/types";

const Home: React.FC = () => {
  return (
    <Tabs defaultValue={TabType.Opportunities} className="w-full">
      <Header />

      <main className="pt-20">
        <TabsContent value={TabType.Opportunities}>
          <SearchFilters />
        </TabsContent>

        <TabsContent value={TabType.Experiences}>
          <section className="h-dvh flex justify-center mt-50">
            <h3 className="text-2xl font-bold">Page under construction</h3>
          </section>
        </TabsContent>
      </main>
    </Tabs>
  );
};

export default Home;
