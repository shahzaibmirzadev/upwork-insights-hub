import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ReactionBar from "@/components/blog/ReactionBar";
import CommentSection from "@/components/blog/CommentSection";
import ShareButtons from "@/components/blog/ShareButtons";
import { blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-background gradient-mesh">
        <Header />
        <div className="container py-24 text-center">
          <h1 className="font-heading text-3xl font-bold text-foreground">Post not found</h1>
          <Link to="/" className="mt-4 inline-block text-primary hover:underline">← Back to home</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const paragraphs = post.content.split("\n\n");

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="relative">
        <div className="absolute inset-0 gradient-mesh pointer-events-none" />
        <article className="container relative max-w-3xl py-8 md:py-14">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link to="/" className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" /> Back to articles
            </Link>

            <span className="glass inline-block rounded-full px-3 py-1 text-xs font-semibold text-primary">
              {post.category}
            </span>

            <h1 className="mt-5 font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground leading-[1.12] tracking-tight">
              {post.title}
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-bold text-primary-foreground">
                  {post.authorAvatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{post.author}</p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 overflow-hidden rounded-2xl">
              <img src={post.image} alt={post.title} className="w-full object-cover aspect-[2/1]" />
            </div>

            <div className="mt-10 space-y-5">
              {paragraphs.map((p, i) => {
                if (p.startsWith("## ")) {
                  return (
                    <h2 key={i} className="font-heading text-xl md:text-2xl font-bold text-foreground mt-10 mb-1 tracking-tight">
                      {p.replace("## ", "")}
                    </h2>
                  );
                }
                return (
                  <p key={i} className="text-muted-foreground leading-[1.8] text-[15px] md:text-base">
                    {p}
                  </p>
                );
              })}
            </div>

            <div className="mt-12 glass-card rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
              <ReactionBar reactions={post.reactions} />
              <ShareButtons title={post.title} />
            </div>

            <div className="mt-14">
              <CommentSection initialComments={post.comments} />
            </div>
          </motion.div>
        </article>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPost;
