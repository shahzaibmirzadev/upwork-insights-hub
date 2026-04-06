import { Link } from "react-router-dom";
import { Zap, ArrowUpRight } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/50 mt-24">
    <div className="container py-14">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary glow-sm">
              <Zap className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-heading text-lg font-bold text-foreground tracking-tight">
              Upwork<span className="text-gradient">Pro</span>
            </span>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-sm">
            Expert strategies and insider tips to help you build a thriving freelance career on Upwork.
          </p>
        </div>

        <div className="md:col-span-3">
          <h4 className="font-heading text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Navigation</h4>
          <div className="flex flex-col gap-2.5">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="group flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
                {l.label}
                <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-0.5 translate-x-[-2px] transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
              </Link>
            ))}
          </div>
        </div>

        <div className="md:col-span-4">
          <h4 className="font-heading text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Stay Updated</h4>
          <p className="text-sm text-muted-foreground mb-3">Get the latest tips delivered to your inbox.</p>
          <div className="flex gap-2">
            <input placeholder="your@email.com" className="flex-1 rounded-xl border border-border bg-secondary/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30" />
            <button className="rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity glow-sm">
              Join
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-border/50 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-muted-foreground">
        <span>© 2026 UpworkPro. All rights reserved.</span>
        <span>Built for freelancers, by freelancers.</span>
      </div>
    </div>
  </footer>
);

export default Footer;
