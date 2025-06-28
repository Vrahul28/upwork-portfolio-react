import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";

import SkillsSection from "@/components/skills-section";
import ProjectsSection from "@/components/projects-section";
import ContactSection from "@/components/contact-section";
import ChatWidget from "@/components/chat-widget";

export default function Portfolio() {
  useEffect(() => {
    document.title = "Rahul Verma Portfolio";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional Flutter developer portfolio showcasing mobile app development expertise, full-stack projects, and modern web solutions. View my work and get in touch.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Professional Flutter developer portfolio showcasing mobile app development expertise, full-stack projects, and modern web solutions. View my work and get in touch.';
      document.head.appendChild(meta);
    }

    // Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', 'RV - Flutter Developer Portfolio');
    if (!document.head.contains(ogTitle)) document.head.appendChild(ogTitle);

    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.setAttribute('content', 'Professional Flutter developer portfolio showcasing mobile app development expertise and modern web solutions.');
    if (!document.head.contains(ogDescription)) document.head.appendChild(ogDescription);

   // ✅ Add white-colored RV favicon dynamically
   const existingFavicon = document.querySelector("link[rel='icon']");
   if (existingFavicon) {
     existingFavicon.remove();
   }
 
   const favicon = document.createElement("link");
   favicon.rel = "icon";
   favicon.type = "image/svg+xml";
   favicon.href =
     "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2280%22 fill=%22white%22>RV</text></svg>";
   document.head.appendChild(favicon);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <ChatWidget />
    </div>
  );
}


