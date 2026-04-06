import { useState } from "react";
import { motion } from "framer-motion";

const reactionEmojis = [
  { key: "like", emoji: "👍", label: "Like" },
  { key: "fire", emoji: "🔥", label: "Fire" },
  { key: "clap", emoji: "👏", label: "Clap" },
  { key: "heart", emoji: "❤️", label: "Heart" },
] as const;

type ReactionCounts = { like: number; fire: number; clap: number; heart: number };

const ReactionBar = ({ reactions: initial }: { reactions: ReactionCounts }) => {
  const [reactions, setReactions] = useState(initial);
  const [reacted, setReacted] = useState<Set<string>>(new Set());

  const toggle = (key: string) => {
    setReacted((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
        setReactions((r) => ({ ...r, [key]: r[key as keyof ReactionCounts] - 1 }));
      } else {
        next.add(key);
        setReactions((r) => ({ ...r, [key]: r[key as keyof ReactionCounts] + 1 }));
      }
      return next;
    });
  };

  return (
    <div className="flex flex-wrap gap-2">
      {reactionEmojis.map(({ key, emoji, label }) => (
        <motion.button
          key={key}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => toggle(key)}
          className={`glass-card flex items-center gap-1.5 rounded-2xl px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
            reacted.has(key)
              ? "!border-primary !bg-primary/15 text-primary glow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
          aria-label={label}
        >
          <span className="text-base">{emoji}</span>
          <span>{reactions[key as keyof ReactionCounts]}</span>
        </motion.button>
      ))}
    </div>
  );
};

export default ReactionBar;
