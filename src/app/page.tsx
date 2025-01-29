import FAQ from "@/components/FAQ";
import { HomePreview } from "@/components/HomePreview";
import PopularCases from "@/components/PopularCases";
import { ServicesGrid } from "@/components/ServicesGrid";
import { ProjectsGrid } from "@components/ProjectsGrid";
import Request from "@components/Request";

export default function Home() {
  return (
    <main>
      <HomePreview/>
      <ProjectsGrid/>
      <ServicesGrid/>
      <PopularCases/>
      <Request/>
      <FAQ/>
    </main>
  );
}
