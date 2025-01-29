import { ProjectInfo } from "@/components/ProjectInfo";
import { ProjectPreview } from "@/components/ProjectPreview";
import { ProjectImages } from "@/components/ProjectsImages";
import Request from "@/components/Request";

export default function PortfolioProject() {
  const project = {
    title: "INSPIRATION",
    subtitles: [
      "Inspiration — это проект, направленный на вдохновение и мотивацию. Мы создаем уникальные решения и креативные идеи, которые помогут вам достигать новых высот. ",
    ],
  };

  return (
    <div className="page">
      <ProjectPreview title={project.title} subtitles={project.subtitles} />
      <ProjectImages/>
      <ProjectInfo/>
      <Request />
    </div>
  );
}
