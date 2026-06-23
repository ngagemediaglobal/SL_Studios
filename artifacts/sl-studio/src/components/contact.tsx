import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const services = [
    "Documentary",
    "Motion Design",
    "Photography",
    "Videography",
    "2D Animation",
    "3D Animation",
    "TV Commercial",
    "Other",
  ];

  return (
    <section id="contact" className="py-32 bg-background border-t border-border/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">Get In Touch</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold uppercase tracking-tight mb-8">
              Let's Make <br />
              <span className="italic text-muted-foreground font-medium">Something</span>
              <br />Remarkable
            </h3>
            <p className="text-muted-foreground font-light leading-relaxed mb-12 max-w-sm">
              Whether you have a brief ready or just a spark of an idea — we want to hear it. Every great production starts with a conversation.
            </p>

            <div className="space-y-6">
              <a
                href="mailto:hello@slstudio.ng"
                className="flex items-center gap-4 group"
                data-testid="contact-email"
              >
                <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all duration-300">
                  <Mail size={16} className="text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold mb-1">Email</span>
                  <span className="text-foreground font-medium group-hover:text-primary transition-colors">hello@slstudio.ng</span>
                </div>
              </a>

              <a
                href="tel:+2341234567890"
                className="flex items-center gap-4 group"
                data-testid="contact-phone"
              >
                <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all duration-300">
                  <Phone size={16} className="text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold mb-1">Phone</span>
                  <span className="text-foreground font-medium group-hover:text-primary transition-colors">+234 123 456 7890</span>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border border-border flex items-center justify-center">
                  <MapPin size={16} className="text-muted-foreground" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold mb-1">Location</span>
                  <span className="text-foreground font-medium">Lagos, Nigeria — Africa & Global</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20 border border-border">
                <div className="w-16 h-16 bg-primary flex items-center justify-center mb-6">
                  <ArrowRight size={24} className="text-primary-foreground" />
                </div>
                <h4 className="text-2xl font-display font-bold uppercase mb-3">Message Received</h4>
                <p className="text-muted-foreground font-light">We'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-card border border-border text-foreground px-4 py-3 text-sm font-light focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/40"
                      placeholder="Your name"
                      data-testid="input-name"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-card border border-border text-foreground px-4 py-3 text-sm font-light focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/40"
                      placeholder="your@email.com"
                      data-testid="input-email"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold mb-2">
                    Service Required
                  </label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full bg-card border border-border text-foreground px-4 py-3 text-sm font-light focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                    data-testid="select-service"
                  >
                    <option value="" disabled>Select a service</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold mb-2">
                    Project Brief
                  </label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-card border border-border text-foreground px-4 py-3 text-sm font-light focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/40 resize-none"
                    placeholder="Tell us about your project..."
                    data-testid="textarea-message"
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-sm font-bold uppercase tracking-widest hover:bg-primary/90 transition-all"
                  data-testid="button-submit"
                >
                  Send Brief
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
