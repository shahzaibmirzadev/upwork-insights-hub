import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Clock } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container max-w-3xl py-12 md:py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Have a question, suggestion, or want to contribute? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-5">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="md:col-span-2 space-y-6"
          >
            {[
              { icon: Mail, label: "Email", value: "hello@upworkproblog.com" },
              { icon: MapPin, label: "Location", value: "Remote — Worldwide" },
              { icon: Clock, label: "Response Time", value: "Within 24 hours" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-3">
                <div className="rounded-lg bg-primary/10 p-2.5">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{label}</p>
                  <p className="text-sm text-muted-foreground">{value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="md:col-span-3"
          >
            {submitted ? (
              <div className="rounded-xl border border-primary/30 bg-primary/5 p-8 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Send className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground">Message Sent!</h3>
                <p className="mt-2 text-sm text-muted-foreground">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input required placeholder="Name" className="rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
                  <input required type="email" placeholder="Email" className="rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
                </div>
                <input required placeholder="Subject" className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
                <textarea required placeholder="Your message..." rows={5} className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none" />
                <button type="submit" className="flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
                  <Send className="h-4 w-4" /> Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
