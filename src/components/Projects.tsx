import { motion } from "framer-motion";
import { ExternalLink, Github, GraduationCap, Plane, Recycle } from "lucide-react";

const projects = [
  {
    icon: GraduationCap,
    title: "Education Portal for J&K Students",
    description: "A comprehensive web application for students to upload and manage their certificates. Built as a Smart India Hackathon (SIH) 2025 project to identify and verify student certificates efficiently.",
    frontend: ["TypeScript", "JavaScript", "React"],
    backend: ["Java", "MySQL"],
    highlight: "SIH 2025",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: Plane,
    title: "Kerala Travel Companion App",
    description: "An all-in-one travel application designed for tourists visiting Kerala. Provides comprehensive travel resources including destinations, accommodations, and local experiences in a single platform.",
    frontend: ["React", "TypeScript"],
    backend: ["Java", "SQL"],
    highlight: "Full-Stack",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: Recycle,
    title: "E-Waste Sorting System",
    description: "An intelligent sorting software utilizing thermal camera technology and MobileNetV2 neural network for automated e-waste classification and categorization.",
    frontend: ["Computer Vision"],
    backend: ["MobileNetV2", "Thermal Imaging"],
    highlight: "AI/ML",
    color: "from-orange-500 to-red-600",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 relative">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="mono text-primary text-sm mb-4">Featured Work</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="glass rounded-2xl overflow-hidden group hover:border-primary/30 transition-all duration-300"
            >
              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="flex-1">
                    {/* Header */}
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <span className="mono text-xs px-3 py-1 rounded-full bg-primary/20 text-primary">
                        {project.highlight}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-6 mb-6">
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Frontend</p>
                        <div className="flex flex-wrap gap-2">
                          {project.frontend.map((tech) => (
                            <span key={tech} className="mono text-sm px-3 py-1 rounded-md bg-secondary text-foreground">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Backend</p>
                        <div className="flex flex-wrap gap-2">
                          {project.backend.map((tech) => (
                            <span key={tech} className="mono text-sm px-3 py-1 rounded-md bg-secondary text-foreground">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                        <Github className="w-4 h-4" />
                        View Code
                      </button>
                      <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;