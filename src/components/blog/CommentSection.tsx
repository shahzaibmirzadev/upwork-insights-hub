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
      <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
        Comments ({comments.length})
      </h3>

      {/* Add Comment */}
      <div className="mb-8 rounded-xl border border-border bg-card p-4">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="mb-3 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
        <div className="flex gap-2">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write a comment..."
            rows={3}
            className="flex-1 rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
          />
        </div>
        <div className="mt-3 flex justify-end">
          <button
            onClick={addComment}
            disabled={!newComment.trim() || !name.trim()}
            className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-40"
          >
            <Send className="h-4 w-4" /> Post Comment
          </button>
        </div>
      </div>

      {/* Comments List */}
      <div className="space-y-4">
        <AnimatePresence>
          {comments.map((comment) => (
            <motion.div
              key={comment.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-xl border border-border bg-card p-4"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                    {comment.avatar}
                  </div>
                  <div>
                    <span className="text-sm font-medium text-foreground">{comment.author}</span>
                    <p className="text-xs text-muted-foreground">{comment.date}</p>
                  </div>
                </div>
                <button
                  onClick={() => likeComment(comment.id)}
                  className="flex items-center gap-1 rounded-lg px-2 py-1 text-xs text-muted-foreground transition-colors hover:text-primary"
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
