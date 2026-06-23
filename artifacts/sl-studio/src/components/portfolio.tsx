import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const categories = ["All", "Documentary", "Motion Design", "Photography", "Videography", "Animation", "Commercial", "Events"];

const projects = [
  {
    id: 1,
    title: "Voices of the Sahel",
    category: "Documentary",
    tag: "Impact Film",
    year: "2024",
    bg: "from-stone-900 to-amber-950",
    accent: "#c2692a",
  },
  {
    id: 2,
    title: "Kinetic Brand Identity",
    category: "Motion Design",
    tag: "Brand Motion",
    year: "2024",
    bg: "from-zinc-900 to-slate-800",
    accent: "#e05c1e",
  },
  {
    id: 3,
    title: "Lagos Light Series",
    category: "Photography",
    tag: "Editorial",
    year: "2023",
    bg: "from-neutral-900 to-neutral-800",
    accent: "#d4631f",
  },
  {
    id: 4,
    title: "Access Bank — Empower",
    category: "Commercial",
    tag: "TV Commercial",
    year: "2024",
    bg: "from-zinc-950 to-orange-950",
    accent: "#e06820",
  },
  {
    id: 5,
    title: "Anansi Tales",
    category: "Animation",
    tag: "2D Animation",
    year: "2023",
    bg: "from-stone-950 to-amber-900",
    accent: "#bf6229",
  },
  {
    id: 6,
    title: "Afropreneurs Summit",
    category: "Videography",
    tag: "Event Film",
    year: "2024",
    bg: "from-neutral-950 to-zinc-800",
    accent: "#d45c18",
  },
  {
    id: 7,
    title: "Beneath the Mangroves",
    category: "Documentary",
    tag: "Environmental",
    year: "2023",
    bg: "from-emerald-950 to-stone-900",
    accent: "#c96a20",
  },
  {
    id: 8,
    title: "Orbital — 3D Brand Film",
    category: "Animation",
    tag: "3D Animation",
    year: "2024",
    bg: "from-slate-950 to-zinc-900",
    accent: "#e07030",
  },
  {
    id: 9,
    title: "Pan-African Leaders Forum",
    category: "Events",
    tag: "Event Production",
    year: "2024",
    bg: "from-zinc-950 to-stone-800",
    accent: "#c86520",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="py-32 bg-background border-t border-border/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">Selected Work</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight">
              The <span className="italic text-muted-foreground font-medium">Reel</span>
            </h3>
          </div>
          <p className="text-muted-foreground max-w-xs font-light text-sm">
            A selection of projects across our disciplines — each one built with the same uncompromising standard.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              data-testid={`filter-${cat.toLowerCase().replace(" ", "-")}`}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:text-foreground hover:bg-card/80 border border-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-border/40"
          >
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group relative overflow-hidden bg-card cursor-pointer"
                data-testid={`project-card-${project.id}`}
              >
                <div
                  className={`relative aspect-[4/5] bg-gradient-to-br ${project.bg} flex items-end overflow-hidden`}
                >
                  <div
                    className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700"
                    style={{
                      backgroundImage: `radial-gradient(circle at 30% 40%, ${project.accent}88 0%, transparent 60%)`,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90" />

                  <div
                    className="absolute top-4 right-4 w-10 h-10 bg-background/0 border border-foreground/0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-primary group-hover:border-primary transition-all duration-300"
                  >
                    <ArrowUpRight size={16} className="text-primary-foreground" />
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="text-[8rem] font-display font-bold uppercase opacity-5 group-hover:opacity-10 transition-opacity duration-700 select-none leading-none"
                      style={{ color: project.accent }}
                    >
                      {project.id.toString().padStart(2, "0")}
                    </span>
                  </div>

                  <div className="relative z-10 p-6 w-full">
                    <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-primary/80 mb-2">
                      {project.tag}
                    </span>
                    <h4 className="text-lg font-display font-bold uppercase leading-tight text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <span className="text-xs text-muted-foreground mt-1 block">{project.year}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
