import { ArrowUpRight } from "lucide-react";

const links = {
  Services: ["Documentary", "Motion Design", "Photography", "Videography", "2D Animation", "3D Animation", "TV Commercials"],
  Company: ["About SL Studio", "Ngage Media Global", "Awards", "Press"],
  Connect: ["Instagram", "YouTube", "LinkedIn", "Vimeo"],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border/50 pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <img src="/logo-dark.png" alt="SL Studio" className="h-10 w-auto mb-4" />
            <p className="text-muted-foreground text-sm font-light leading-relaxed mb-6">
              The media production arm of Ngage Media Global. Where story meets impact.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:gap-3 transition-all"
            >
              Start a Project <ArrowUpRight size={14} />
            </a>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h5 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-6">
                {category}
              </h5>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors font-light"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xs text-muted-foreground/50 font-light">
            &copy; {year} SL Studio / Ngage Media Global. All rights reserved.
          </span>
          <span className="text-xs text-muted-foreground/30 uppercase tracking-widest font-bold">
            Lagos &mdash; Africa &mdash; Global
          </span>
        </div>
      </div>
    </footer>
  );
}
