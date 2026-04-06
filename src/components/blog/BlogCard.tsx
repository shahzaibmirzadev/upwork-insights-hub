import { Link } from "react-router-dom";
import { Clock, MessageCircle, Heart } from "lucide-react";
import { motion } from "framer-motion";
import type { BlogPost } from "@/data/blogPosts";

const BlogCard = ({ post, index = 0 }: { post: BlogPost; index?: number }) => {
  const totalReactions = post.reactions.like + post.reactions.fire + post.reactions.clap + post.reactions.heart;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link to={`/blog/${post.id}`} className="group block">
        <div className="overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
          <div className="aspect-[16/9] overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="p-5">
            <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              {post.category}
            </span>
            <h3 className="mt-3 font-heading text-lg font-semibold text-card-foreground leading-snug group-hover:text-primary transition-colors line-clamp-2">
              {post.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">
              {post.excerpt}
            </p>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                  {post.authorAvatar}
                </div>
                <span className="text-xs text-muted-foreground">{post.author}</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" /> {post.readTime}
                </span>
                <span className="flex items-center gap-1">
                  <Heart className="h-3.5 w-3.5" /> {totalReactions}
                </span>
                <span className="flex items-center gap-1">
                  <MessageCircle className="h-3.5 w-3.5" /> {post.comments.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default BlogCard;
