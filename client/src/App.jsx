import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import EducationSection from "./components/EducationSection";
import ProjectsSection from "./components/ProjectsSection";
import CertificationsSection from "./components/CertificationsSection";
import ContactSection from "./components/ContactSection";
import FloatingDock from "./components/FloatingDock";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    window.scrollTo(0, 0); // FIXED: scroll to top on refresh
  }, []);
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <EducationSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
      <FloatingDock />
    </>
  );
}
