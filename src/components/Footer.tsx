import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-8 px-6 border-t border-border"
    >
      <div className="container max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
          Built with <Heart className="w-4 h-4 text-primary fill-primary" /> by
          <span className="text-primary font-medium">Vishnu Varthan S.S</span>
        </p>
        <p className="text-muted-foreground/60 text-xs mt-2 mono">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;