import { motion } from "framer-motion";
import { Users, Target, BookOpen, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const values = [
  { icon: Target, title: "Actionable Strategies", desc: "Every article delivers practical steps you can implement today — no fluff, no theory." },
  { icon: BookOpen, title: "Real Experience", desc: "Written by top-rated freelancers who've collectively earned $1M+ on the platform." },
  { icon: Users, title: "Community Driven", desc: "React, comment, and share knowledge. We grow together." },
  { icon: Award, title: "Proven Results", desc: "Tactics backed by data and real success stories from active freelancers." },
];

const About = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <div className="relative">
      <div className="absolute inset-0 gradient-mesh-hero pointer-events-none" />
      <div className="container relative max-w-3xl py-16 md:py-24">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium text-primary mb-6">
            Our Story
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-[1.1] tracking-tight">
            Built for <span className="text-gradient">Freelancers</span>, by Freelancers
          </h1>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
            We started UpworkPro with a single goal: create the resource we wished existed when we started freelancing. No gatekeeping, no paywalls — just pure, actionable knowledge from people who actually do the work.
          </p>
          <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            Every contributor is an active, top-rated freelancer sharing real strategies from the trenches. We've helped thousands of freelancers land their first contract, raise their rates, and build sustainable businesses.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6 tracking-tight">What Drives Us</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                className="glass-card rounded-2xl p-6 transition-all duration-500 group"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground mb-4">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-heading font-bold text-foreground tracking-tight">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16"
        >
          <div className="glass-card rounded-2xl p-8 text-center">
            <h3 className="font-heading text-xl font-bold text-foreground tracking-tight">Want to contribute?</h3>
            <p className="mt-2 text-sm text-muted-foreground">Share your Upwork expertise with thousands of freelancers.</p>
            <Link
              to="/contact"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity glow-sm"
            >
              Get in Touch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
    <Footer />
  </div>
);

export default About;
