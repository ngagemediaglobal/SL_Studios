import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.png"
          alt="Cinematic Film Set"
          className="w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background"></div>
        <div className="absolute inset-0 bg-background/30 mix-blend-multiply"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center gap-2 mb-6"
        >
          <img src="/logo-dark.png" alt="SL Studio" className="h-16 md:h-20 w-auto" />
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground/70">
            An Ngage Media Global Company
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold uppercase tracking-tighter leading-[0.9] max-w-5xl"
        >
          Where Story <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-400 italic font-medium pr-2">
            Meets Impact
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl font-light"
        >
          A premium African media production studio crafting visual narratives that command screens, move policy, and define brands.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row items-center gap-6"
        >
          <a
            href="#work"
            className="group flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-sm font-bold uppercase tracking-widest hover:bg-primary/90 transition-all w-full sm:w-auto"
          >
            Explore Work
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <button className="group flex items-center justify-center gap-3 px-8 py-4 border border-border bg-background/50 backdrop-blur-sm text-foreground text-sm font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-all w-full sm:w-auto">
            <Play size={16} className="fill-current" />
            Play Showreel
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-border relative overflow-hidden">
          <motion.div
            animate={{ y: [0, 48] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}
