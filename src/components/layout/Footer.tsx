import { Link } from "react-router-dom";
import { PenLine, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-card mt-20">
    <div className="container py-12">
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <Link to="/" className="flex items-center gap-2 font-heading text-lg font-bold text-foreground">
            <PenLine className="h-5 w-5 text-primary" />
            UpworkPro<span className="text-primary">Blog</span>
          </Link>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-xs">
            Your go-to resource for Upwork tips, winning proposals, and freelancing strategies.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-foreground mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-foreground mb-4">Connect</h4>
          <div className="flex gap-3">
            {[Twitter, Linkedin, Mail].map((Icon, i) => (
              <button
                key={i}
                className="rounded-lg border border-border p-2.5 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
        © 2026 UpworkProBlog. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
