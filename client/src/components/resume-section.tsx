import { useQuery } from "@tanstack/react-query";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import type { Experience } from "@shared/schema";

export default function ResumeSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation();
  
  const { data: experiences, isLoading } = useQuery<Experience[]>({
    queryKey: ["/api/experiences"],
  });

  if (isLoading) {
    return (
      <section id="resume" className="py-20 gradient-bg">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="animate-pulse">Loading experiences...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="resume" className="py-20 gradient-bg" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-800 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <h2 className="text-4xl font-bold text-navy mb-4">Work Experience</h2>
          <p className="text-slate text-lg">My professional journey and key achievements</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent"></div>
            
            {/* Experience Items */}
            <div className="space-y-12">
              {experiences?.map((experience, index) => (
                <div 
                  key={experience.id}
                  className={`relative transition-all duration-800 ${
                    isVisible 
                      ? "opacity-100 translate-y-0" 
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="absolute left-6 w-4 h-4 bg-accent rounded-full border-4 border-white shadow-lg"></div>
                  <div className="ml-20 bg-white p-6 rounded-lg shadow-lg">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                      <h3 className="text-xl font-semibold text-navy">{experience.title}</h3>
                      <span className="text-slate font-medium">
                        {experience.startDate} - {experience.current ? "Present" : experience.endDate}
                      </span>
                    </div>
                    <div className="text-accent font-medium mb-3">{experience.company}</div>
                    <p className="text-slate">{experience.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
