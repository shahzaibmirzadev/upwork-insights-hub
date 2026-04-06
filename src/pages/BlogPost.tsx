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
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-20 text-center">
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

      <article className="container max-w-3xl py-8 md:py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
            <ArrowLeft className="h-4 w-4" /> Back to articles
          </Link>

          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            {post.category}
          </span>

          <h1 className="mt-4 font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            {post.title}
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                {post.authorAvatar}
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{post.author}</p>
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

          <div className="mt-8 space-y-4">
            {paragraphs.map((p, i) => {
              if (p.startsWith("## ")) {
                return (
                  <h2 key={i} className="font-heading text-2xl font-semibold text-foreground mt-8 mb-2">
                    {p.replace("## ", "")}
                  </h2>
                );
              }
              return (
                <p key={i} className="text-muted-foreground leading-relaxed text-base md:text-lg">
                  {p}
                </p>
              );
            })}
          </div>

          <div className="mt-10 border-t border-border pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <ReactionBar reactions={post.reactions} />
            <ShareButtons title={post.title} />
          </div>

          <div className="mt-12 border-t border-border pt-8">
            <CommentSection initialComments={post.comments} />
          </div>
        </motion.div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
