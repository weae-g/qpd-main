import { AboutPreview } from "@/components/AboutPreview";
import FAQ from "@/components/FAQ";
import { OurFeatures } from "@/components/OurFeatures";
import { OurFeaturesDesc } from "@/components/OurFeaturesDesc";
import Request from "@/components/Request";

export default function About() {
  return (
    <div className="page">
      <AboutPreview />
      <OurFeatures />
      <OurFeaturesDesc/>
      <Request/>
      <FAQ/>
    </div>
  );
}
