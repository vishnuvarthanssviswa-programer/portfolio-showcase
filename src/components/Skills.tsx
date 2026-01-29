import { motion } from "framer-motion";
import { Code2, Server, Plug, Palette, Sparkles } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Front End Development",
    description: "Building responsive, interactive user interfaces with modern frameworks",
    technologies: ["React", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    icon: Server,
    title: "Back End Development",
    description: "Creating robust server-side applications and APIs",
    technologies: ["Java", "Python", "PHP", "MySQL", "SQL"],
  },
  {
    icon: Plug,
    title: "API Integration",
    description: "Connecting services and building seamless data flows",
    technologies: ["REST APIs", "Database Integration", "Third-party Services"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Crafting intuitive and visually appealing user experiences",
    technologies: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
  },
  {
    icon: Sparkles,
    title: "Prompt Engineering",
    description: "Leveraging AI tools to enhance development workflows",
    technologies: ["ChatGPT", "AI Integration", "Automation"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="mono text-primary text-sm mb-4">What I Do</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="glass p-6 rounded-xl hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:glow"
                   style={{ background: 'var(--gradient-primary)' }}>
                <skill.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {skill.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4">
                {skill.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="mono text-xs px-2 py-1 rounded-md bg-secondary text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;