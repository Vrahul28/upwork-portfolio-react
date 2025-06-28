import { Button } from "@/components/ui/button";
import { Download, ArrowDown } from "lucide-react";

export default function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadResume = () => {
    window.open("https://drive.google.com/file/d/1Qkf56Cx92IjveLWDuBns2_FOJzKateVN/view", "_blank");
  };

  return (
    <section id="home" className="min-h-screen gradient-bg flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 text-center lg:text-left animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold text-navy mb-6 leading-tight">
              Rahul
              <span className="text-accent ml-4">Verma</span>
            </h1>
            <p className="text-lg text-slate mb-8 max-w-lg">
            Crafting beautiful cross-platform mobile applications with Flutter and Dart.
              <br />
              <span className="text-base">
                {/* Crafting beautiful cross-platform mobile applications with Flutter and Dart. */}
              </span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg"
                onClick={scrollToProjects}
                className="bg-navy hover:bg-navy/90 text-white px-8 py-4 text-lg"
              >
                View My Work
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={downloadResume}
                className="border-2 border-navy text-navy hover:bg-navy hover:text-white px-8 py-4 text-lg"
              >
                Download Resume
                <Download className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800"
              alt="Professional developer workspace with multiple monitors"
              className="rounded-2xl shadow-2xl animate-float w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
