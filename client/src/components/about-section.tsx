import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function AboutSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-800 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <h2 className="text-4xl font-bold text-navy mb-4">About Me</h2>
          <p className="text-slate text-lg max-w-2xl mx-auto">
            I'm a passionate developer with expertise in Flutter and worked on multiple projects that prove my ability.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className={`lg:w-1/2 transition-all duration-800 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <img
              src="https://www.kindpng.com/picc/m/112-1127747_software-development-full-stack-developer-hd-png-download.png"
              alt="Professional developer portrait in modern office setting"
              className="rounded-2xl shadow-lg w-full max-w-md mx-auto"
            />
          </div>
          
          <div className={`lg:w-1/2 transition-all duration-800 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <h3 className="text-2xl font-semibold text-navy mb-6">Hi, I'm Rahul Verma</h3>
            <p className="text-slate mb-6 leading-relaxed">
              Flutter Developer with expertise in cross-platform mobile 
              development using Flutter and Dart. I develop innovative mobile solutions and create 
              exceptional user experiences with modern technologies.
            </p>
            <p className="text-slate mb-8 leading-relaxed">
              I specialize in Flutter framework, Firebase integration, REST API implementation, 
              and state management using Provider, Getx. My passion lies in transforming complex mobile 
              app requirements into beautiful, functional applications that users love.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-navy">5+</div>
                <div className="text-slate">Projects</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-navy">2</div>
                <div className="text-slate">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
