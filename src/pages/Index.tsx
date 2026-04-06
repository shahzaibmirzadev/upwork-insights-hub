import { useState } from "react";
import { motion } from "framer-motion";
import { Search, TrendingUp, Sparkles, ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlogCard from "@/components/blog/BlogCard";
import { blogPosts, categories } from "@/data/blogPosts";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featured = blogPosts[4];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh-hero" />
        <div className="container relative py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium text-primary mb-6"
            >
              <Sparkles className="h-4 w-4" />
              Freelancing Intelligence Hub
            </motion.div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-foreground leading-[1.1] tracking-tight">
              Level Up Your{" "}
              <span className="text-gradient">Upwork Game</span>
            </h1>
            <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg">
              Battle-tested strategies, proposal templates, and insider tips from top-rated freelancers earning $100K+ annually.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 max-w-md"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search proposals, strategies, tips..."
                  className="w-full glass rounded-2xl py-3.5 pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured */}
      <section className="container py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center gap-2 text-foreground mb-5">
            <TrendingUp className="h-5 w-5 text-primary" />
            <h2 className="font-heading text-lg font-semibold tracking-tight">Trending</h2>
          </div>
          <a href={`/blog/${featured.id}`} className="group block">
            <div className="glass-card rounded-2xl overflow-hidden transition-all duration-500">
              <div className="grid md:grid-cols-2">
                <div className="aspect-[16/10] md:aspect-auto overflow-hidden">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-col justify-center p-6 md:p-10">
                  <span className="glass inline-block w-fit rounded-full px-3 py-1 text-xs font-semibold text-primary">
                    {featured.category}
                  </span>
                  <h3 className="mt-4 font-heading text-xl md:text-2xl lg:text-3xl font-bold text-card-foreground leading-tight group-hover:text-primary transition-colors duration-300 tracking-tight">
                    {featured.title}
                  </h3>
                  <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                    {featured.excerpt}
                  </p>
                  <div className="mt-5 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-xs font-bold text-primary-foreground">
                      {featured.authorAvatar}
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-foreground">{featured.author}</span>
                      <div className="text-xs text-muted-foreground">{featured.date} · {featured.readTime}</div>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-primary opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    Read full article <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          </a>
        </motion.div>
      </section>

      {/* Categories */}
      <section className="container pt-6">
        <div className="flex gap-2 overflow-x-auto scrollbar-none pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground glow-sm"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="container py-8 pb-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post, i) => (
            <BlogCard key={post.id} post={post} index={i} />
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="py-24 text-center">
            <p className="text-lg text-muted-foreground">No articles match your search.</p>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default Index;
