import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import ExperienceTimeline from "@/components/experience/ExperienceTimeline";
import SectionDivider from "@/components/ui/SectionDivider";
import Metrics from "@/components/experience/Metrics";
import Services from "@/components/services/Services";
import AIZubinPlaceholder from "@/components/ai/AIZubinPlaceholder";
import BlogPreview from "@/components/blog/BlogPreview";
import ContactSection from "@/components/contact/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SectionDivider />
        <ExperienceTimeline />
        <SectionDivider />
        <Metrics />
        <SectionDivider />
        <Services />
        <SectionDivider />
        <AIZubinPlaceholder />
        <SectionDivider />
        <BlogPreview />
        <SectionDivider />
        <ContactSection />
      </main>
    </>
  );
}