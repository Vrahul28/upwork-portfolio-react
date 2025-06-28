import { useQuery } from "@tanstack/react-query";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@shared/schema";

export default function ProjectsSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation();
  
  const { data: projects, isLoading, error } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });



  if (isLoading) {
    return (
      <section id="projects" className="py-20 gradient-bg">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="animate-pulse">Loading projects...</div>
          </div>
        </div>
      </section>
    );
  }

  if (!projects || projects.length === 0) {
    return (
      <section id="projects" className="py-20 gradient-bg">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="text-slate">No projects found</div>
          </div>
        </div>
      </section>
    );
  }

  const getTechColor = (tech: string) => {
    const colors = {
      "Flutter": "bg-blue-100 text-blue-800",
      "Dart": "bg-blue-100 text-blue-800",
      "Firebase": "bg-orange-100 text-orange-800",
      "Provider": "bg-green-100 text-green-800",
      "REST APIs": "bg-purple-100 text-purple-800",
      "Node.js": "bg-green-100 text-green-800",
      "MongoDB": "bg-green-100 text-green-800",
      "PostgreSQL": "bg-gray-100 text-gray-800",
    };
    return colors[tech as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <section id="projects" className="py-20 gradient-bg" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy mb-4">Featured Projects</h2>
          <p className="text-slate text-lg">A showcase of my recent work and case studies</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects?.map((project, index) => (
            <div 
              key={project.id}
              className="project-card bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-navy mb-2">{project.title}</h3>
                <p className="text-slate mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className={`px-3 py-1 rounded-full text-sm ${getTechColor(tech)}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  {project.liveUrl && (
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-accent hover:text-navy"
                      onClick={() => window.open(project.liveUrl!, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-accent hover:text-navy"
                      onClick={() => window.open(project.githubUrl!, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                  )}
                  {!project.liveUrl && !project.githubUrl && (
                    <div className="text-sm text-slate italic">Coming Soon</div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
