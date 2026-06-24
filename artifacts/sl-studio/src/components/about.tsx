import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 bg-card relative overflow-hidden">
      {/* Decorative large text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-[10%] text-[20vw] font-display font-bold uppercase text-background/80 whitespace-nowrap pointer-events-none select-none z-0">
        Ngage
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square md:aspect-[4/5] overflow-hidden"
          >
            <div className="absolute inset-0 bg-primary/20 mix-blend-color z-10"></div>
            <img 
              src="/portfolio-doc.png" 
              alt="Behind the scenes documentary" 
              className="w-full h-full object-cover filter grayscale contrast-125"
            />
            
            <div className="absolute bottom-0 left-0 bg-background p-8 border-t border-r border-border max-w-[80%]">
              <p className="text-xl md:text-2xl font-display italic leading-tight text-foreground">
                "We don't just capture images. We architect emotion."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">The Studio</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold uppercase tracking-tight mb-8">
              A lineage of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-400">Excellence</span>
            </h3>
            
            <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
              <p>
                As the dedicated media production arm of <strong>Ngage Media Global</strong>, SL Studio inherits a legacy of strategic communication and uncompromising quality. We were born from the need for visual storytelling that doesn't just look beautiful, but performs with purpose.
              </p>
              <p>
                Based in Africa but global in our perspective, our roster includes award-winning directors, obsessive motion designers, and visionary cinematographers. We approach every brief—whether a 30-second TVC or a feature-length impact documentary—with the exact same cinematic rigor.
              </p>
              <p>
                We believe in deep blacks, deliberate pacing, and visuals that breathe. 
              </p>
            </div>

            <div className="mt-12 pt-12 border-t border-border grid grid-cols-2 gap-8">
              <div>
                <span className="block text-4xl font-display font-bold text-foreground mb-2">15+</span>
                <span className="text-xs uppercase tracking-[0.1em] text-muted-foreground font-bold">Awards Won</span>
              </div>
              <div>
                <span className="block text-4xl font-display font-bold text-foreground mb-2">Global</span>
                <span className="text-xs uppercase tracking-[0.1em] text-muted-foreground font-bold">Reach & Scale</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
