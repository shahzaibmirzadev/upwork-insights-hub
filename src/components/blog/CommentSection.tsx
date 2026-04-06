import { useState } from "react";
import { Send, ThumbsUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { Comment } from "@/data/blogPosts";

const CommentSection = ({ initialComments }: { initialComments: Comment[] }) => {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState("");
  const [name, setName] = useState("");

  const addComment = () => {
    if (!newComment.trim() || !name.trim()) return;
    const comment: Comment = {
      id: Date.now().toString(),
      author: name,
      avatar: name.split(" ").map((w) => w[0]).join("").toUpperCase().slice(0, 2),
      content: newComment,
      date: "Just now",
      likes: 0,
    };
    setComments([comment, ...comments]);
    setNewComment("");
  };

  const likeComment = (id: string) => {
    setComments(comments.map((c) => (c.id === id ? { ...c, likes: c.likes + 1 } : c)));
  };

  return (
    <div>
      <h3 className="font-heading text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
        Comments
        <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-primary/10 px-2 text-xs font-bold text-primary">
          {comments.length}
        </span>
      </h3>

      <div className="glass-card mb-8 rounded-2xl p-5">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="mb-3 w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
        />
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Share your thoughts..."
          rows={3}
          className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none transition-all"
        />
        <div className="mt-3 flex justify-end">
          <button
            onClick={addComment}
            disabled={!newComment.trim() || !name.trim()}
            className="flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 glow-sm disabled:opacity-30 disabled:shadow-none"
          >
            <Send className="h-4 w-4" /> Post
          </button>
        </div>
      </div>

      <div className="space-y-3">
        <AnimatePresence>
          {comments.map((comment) => (
            <motion.div
              key={comment.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="glass-card rounded-2xl p-5"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-xs font-bold text-primary-foreground shrink-0">
                    {comment.avatar}
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-foreground">{comment.author}</span>
                    <p className="text-xs text-muted-foreground">{comment.date}</p>
                  </div>
                </div>
                <button
                  onClick={() => likeComment(comment.id)}
                  className="flex items-center gap-1 rounded-xl px-2.5 py-1.5 text-xs text-muted-foreground transition-all hover:text-primary hover:bg-primary/10"
                >
                  <ThumbsUp className="h-3.5 w-3.5" /> {comment.likes}
                </button>
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{comment.content}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CommentSection;
