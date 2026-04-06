import { motion } from "framer-motion";
import { Users, Target, BookOpen, Award } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const values = [
  { icon: Target, title: "Actionable Advice", desc: "Every article is packed with practical strategies you can implement immediately." },
  { icon: BookOpen, title: "Real Experience", desc: "Written by freelancers who've collectively earned $1M+ on Upwork." },
  { icon: Users, title: "Community First", desc: "We believe in lifting each other up. Share, comment, and learn together." },
  { icon: Award, title: "Quality Content", desc: "No fluff, no filler — just proven tactics that deliver real results." },
];

const About = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <div className="container max-w-3xl py-12 md:py-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
          About <span className="text-gradient">UpworkProBlog</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          We started UpworkProBlog with a simple mission: help freelancers succeed on Upwork. Whether you're just starting out or looking to scale to six figures, our expert-written guides cover everything from crafting winning proposals to managing clients like a pro.
        </p>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          Our team of contributors are all active, top-rated freelancers who share real strategies from the trenches — not recycled advice from people who've never won a contract.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-16"
      >
        <h2 className="font-heading text-2xl font-semibold text-foreground mb-8">What We Stand For</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {values.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/30"
            >
              <Icon className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-heading font-semibold text-foreground">{title}</h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
    <Footer />
  </div>
);

export default About;
