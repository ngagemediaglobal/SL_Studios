import { motion } from "framer-motion";

const clients = [
  "Access Bank",
  "UNICEF",
  "MTN Group",
  "Zenith Bank",
  "Dangote Industries",
  "African Union",
  "Airtel Africa",
  "TotalEnergies",
  "Guaranty Trust",
  "Stanbic IBTC",
  "Ecobank",
  "USAID",
];

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "12", label: "African Markets" },
  { value: "15+", label: "Industry Awards" },
  { value: "8", label: "Years of Excellence" },
];

export default function Clients() {
  return (
    <section id="clients" className="py-32 bg-card border-t border-border/50 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">Partners & Clients</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight">
            Trusted by the <span className="italic text-muted-foreground font-medium">Best</span>
          </h3>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-px bg-border/30 mb-24"
        >
          {clients.map((client, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="bg-card hover:bg-background transition-colors duration-300 flex items-center justify-center py-10 px-6 group"
              data-testid={`client-logo-${i}`}
            >
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground/50 group-hover:text-muted-foreground transition-colors text-center leading-relaxed">
                {client}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/30"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-background px-10 py-12 text-center"
              data-testid={`stat-${i}`}
            >
              <span className="block text-5xl md:text-6xl font-display font-bold text-foreground mb-3">
                {stat.value}
              </span>
              <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-bold">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
