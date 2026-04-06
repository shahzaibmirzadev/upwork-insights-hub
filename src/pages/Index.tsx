import { useState } from "react";
import { motion } from "framer-motion";
import { Search, TrendingUp, Sparkles } from "lucide-react";
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

  const featured = blogPosts[4]; // "From $0 to $10K" post

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="border-b border-border">
        <div className="container py-12 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2 text-primary mb-4">
              <Sparkles className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">Upwork Freelancing Hub</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Master the Art of{" "}
              <span className="text-gradient">Freelancing</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Expert tips, winning proposal strategies, and proven tactics to build a thriving career on Upwork.
            </p>
          </motion.div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-8 max-w-lg"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full rounded-xl border border-border bg-card py-3 pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="container py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex items-center gap-2 text-foreground mb-6">
            <TrendingUp className="h-5 w-5 text-primary" />
            <h2 className="font-heading text-xl font-semibold">Featured</h2>
          </div>
          <a href={`/blog/${featured.id}`} className="group block">
            <div className="grid md:grid-cols-2 gap-6 rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
              <div className="aspect-[16/10] md:aspect-auto overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center p-6 md:p-8">
                <span className="inline-block w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {featured.category}
                </span>
                <h3 className="mt-3 font-heading text-2xl md:text-3xl font-bold text-card-foreground leading-snug group-hover:text-primary transition-colors">
                  {featured.title}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {featured.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                    {featured.authorAvatar}
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-foreground">{featured.author}</span>
                    <span className="mx-2 text-muted-foreground">·</span>
                    <span className="text-muted-foreground">{featured.date}</span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </motion.div>
      </section>

      {/* Categories */}
      <section className="container">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Blog Grid */}
      <section className="container py-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post, i) => (
            <BlogCard key={post.id} post={post} index={i} />
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="py-20 text-center text-muted-foreground">
            <p className="text-lg">No articles found matching your search.</p>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default Index;
