import { motion } from "framer-motion";
import { Camera, Film, MonitorPlay, Video, Sparkles, Tv, CalendarDays } from "lucide-react";

const services = [
  {
    title: "Documentary",
    description: "Impact storytelling that moves policy and changes minds. Deep, authentic narratives.",
    icon: Film,
  },
  {
    title: "Motion Design",
    description: "Visually arresting kinetic sequences that command attention across all screens.",
    icon: MonitorPlay,
  },
  {
    title: "TV Commercials",
    description: "High-end broadcast spots that define brands and captivate audiences.",
    icon: Tv,
  },
  {
    title: "Photography",
    description: "Editorial, commercial, and impact photography with an uncompromising cinematic eye.",
    icon: Camera,
  },
  {
    title: "Animation",
    description: "From stylized 2D explainers to immersive 3D worlds — full-spectrum animation production.",
    icon: Sparkles,
  },
  {
    title: "Videography",
    description: "Sleek, premium event coverage and corporate brand films.",
    icon: Video,
  },
  {
    title: "Events",
    description: "Full-scale event production and multi-camera live coverage with cinematic post-production.",
    icon: CalendarDays,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Services() {
  return (
    <section id="services" className="py-32 bg-background relative border-t border-border/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">Disciplines</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight">
              Crafting <span className="text-muted-foreground italic font-medium">the unseen</span>
            </h3>
          </div>
          <p className="text-muted-foreground max-w-md md:text-right font-light">
            We operate at the intersection of art and strategy, employing world-class talent across multiple disciplines to execute your vision without compromise.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-border/50"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-background p-10 group hover:bg-card transition-colors duration-500 flex flex-col justify-between min-h-[300px]"
            >
              <div>
                <service.icon className="w-8 h-8 text-primary mb-8 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" strokeWidth={1.5} />
                <h4 className="text-xl font-display font-bold uppercase mb-4 group-hover:text-primary transition-colors">{service.title}</h4>
              </div>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
          {/* Empty slot for grid balance if needed */}
          <div className="bg-background p-10 hidden xl:flex items-center justify-center">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground/30 font-bold">SL Studio</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
