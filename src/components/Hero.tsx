import { motion } from "framer-motion";
import { ArrowDown, Mail, Phone, MapPin } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mono text-primary text-sm mb-4"
            >
              Hi, my name is
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-4"
            >
              <span className="gradient-text">Vishnu Varthan</span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl md:text-5xl font-bold text-muted-foreground mb-6"
            >
              Web Developer
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground text-lg max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Passionate CSE student crafting modern web solutions with creative and efficient design. 
              I build exceptional digital experiences that prioritize user satisfaction.
            </motion.p>

            {/* Contact Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
            >
              <a
                href="mailto:vishnuvarthanssviswa@gmail.com"
                className="glass px-4 py-2 rounded-full flex items-center gap-2 text-sm hover:border-primary/50 transition-colors group"
              >
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                  vishnuvarthanssviswa@gmail.com
                </span>
              </a>
              <a
                href="tel:9444442656"
                className="glass px-4 py-2 rounded-full flex items-center gap-2 text-sm hover:border-primary/50 transition-colors group"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                  9444442656
                </span>
              </a>
              <div className="glass px-4 py-2 rounded-full flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Erode, Tamil Nadu</span>
              </div>
            </motion.div>

            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-medium glow transition-all duration-300 hover:scale-105"
              style={{ background: 'var(--gradient-primary)' }}
            >
              View My Work
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </motion.a>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full glow animate-pulse-slow" 
                   style={{ background: 'var(--gradient-primary)', filter: 'blur(40px)', opacity: 0.4 }} />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden gradient-border">
                <img
                  src={profileImage}
                  alt="Vishnu Varthan"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-6 border border-primary/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-12 border border-primary/10 rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;