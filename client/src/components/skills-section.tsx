import { useQuery } from "@tanstack/react-query";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useEffect, useState } from "react";
import type { Skill } from "@shared/schema";

export default function SkillsSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation();
  const [animateSkills, setAnimateSkills] = useState(false);
  
  const { data: skills, isLoading } = useQuery<Skill[]>({
    queryKey: ["/api/skills"],
  });

  const mobileSkills = skills?.filter(skill => skill.category === "Mobile") || [];
  const backendSkills = skills?.filter(skill => skill.category === "Backend") || [];
  const otherSkills = skills?.filter(skill => !["Mobile", "Backend"].includes(skill.category)) || [];

  if (isLoading) {
    return (
      <section id="skills" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="animate-pulse">Loading skills...</div>
          </div>
        </div>
      </section>
    );
  }

  if (!skills || skills.length === 0) {
    return (
      <section id="skills" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="text-slate">No skills found</div>
          </div>
        </div>
      </section>
    );
  }

  const SkillBar = ({ skill }: { skill: Skill }) => (
    <div className="skill-item">
      <div className="flex justify-between mb-2">
        <span className="text-slate font-medium">{skill.name}</span>
        <span className="text-accent">{skill.percentage}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-navy rounded-full transition-all duration-1000"
          style={{ width: `${skill.percentage}%` }}
        />
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy mb-4">Technical Skills</h2>
          <p className="text-slate text-lg">Technologies I work with</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-navy mb-6">Flutter & Mobile Development</h3>
              <div className="space-y-4">
                {mobileSkills.map((skill) => (
                  <SkillBar key={skill.id} skill={skill} />
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-navy mb-6">Backend & Other Skills</h3>
              <div className="space-y-4">
                {backendSkills.map((skill) => (
                  <SkillBar key={skill.id} skill={skill} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
