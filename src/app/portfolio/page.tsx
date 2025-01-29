import { PortfolioPreview } from "@/components/PortfolioPreview";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import Request from "@/components/Request";

export default function Portfolio() {
  return (
    <div className="page">
      <PortfolioPreview />
      <ProjectsGrid/>
      <Request/>
    </div>
  );
}
