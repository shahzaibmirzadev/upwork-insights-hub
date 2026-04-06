import { Share2, Twitter, Linkedin, Link as LinkIcon, Check } from "lucide-react";
import { useState } from "react";

const ShareButtons = ({ title }: { title: string }) => {
  const [copied, setCopied] = useState(false);
  const url = typeof window !== "undefined" ? window.location.href : "";

  const copyLink = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const share = (platform: string) => {
    const encoded = encodeURIComponent(url);
    const text = encodeURIComponent(title);
    const urls: Record<string, string> = {
      twitter: `https://twitter.com/intent/tweet?text=${text}&url=${encoded}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`,
    };
    window.open(urls[platform], "_blank", "width=600,height=400");
  };

  return (
    <div className="flex items-center gap-2">
      <span className="flex items-center gap-1.5 text-sm text-muted-foreground mr-1">
        <Share2 className="h-4 w-4" /> Share
      </span>
      {[
        { icon: Twitter, action: () => share("twitter") },
        { icon: Linkedin, action: () => share("linkedin") },
        { icon: copied ? Check : LinkIcon, action: copyLink },
      ].map(({ icon: Icon, action }, i) => (
        <button
          key={i}
          onClick={action}
          className={`glass-card rounded-xl p-2.5 text-muted-foreground hover:text-primary transition-all duration-300 ${
            copied && i === 2 ? "!text-primary !border-primary" : ""
          }`}
        >
          <Icon className="h-4 w-4" />
        </button>
      ))}
    </div>
  );
};

export default ShareButtons;
