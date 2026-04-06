import { Link } from "react-router-dom";
import { Clock, MessageCircle, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import type { BlogPost } from "@/data/blogPosts";

const BlogCard = ({ post, index = 0 }: { post: BlogPost; index?: number }) => {
  const totalReactions = post.reactions.like + post.reactions.fire + post.reactions.clap + post.reactions.heart;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <Link to={`/blog/${post.id}`} className="group block">
        <div className="glass-card rounded-2xl overflow-hidden transition-all duration-500">
          <div className="aspect-[16/10] overflow-hidden relative">
            <img
              src={post.image}
              alt={post.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-3 left-3">
              <span className="glass rounded-full px-3 py-1 text-xs font-semibold text-foreground">
                {post.category}
              </span>
            </div>
          </div>
          <div className="p-5">
            <h3 className="font-heading text-base font-semibold text-card-foreground leading-snug group-hover:text-primary transition-colors duration-300 line-clamp-2">
              {post.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">
              {post.excerpt}
            </p>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-[10px] font-bold text-primary-foreground">
                  {post.authorAvatar}
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-medium text-foreground">{post.author}</span>
                  <span className="text-[10px] text-muted-foreground">{post.date}</span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" /> {post.readTime}
                </span>
                <span className="flex items-center gap-1">
                  <MessageCircle className="h-3 w-3" /> {post.comments.length}
                </span>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1.5 text-xs font-medium text-primary opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              Read article <ArrowUpRight className="h-3 w-3" />
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default BlogCard;
