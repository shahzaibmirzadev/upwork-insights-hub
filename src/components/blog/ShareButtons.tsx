import { Share2, Twitter, Linkedin, Link as LinkIcon } from "lucide-react";
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
      <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
        <Share2 className="h-4 w-4" /> Share
      </span>
      <button onClick={() => share("twitter")} className="rounded-lg border border-border p-2 text-muted-foreground hover:border-primary hover:text-primary transition-colors">
        <Twitter className="h-4 w-4" />
      </button>
      <button onClick={() => share("linkedin")} className="rounded-lg border border-border p-2 text-muted-foreground hover:border-primary hover:text-primary transition-colors">
        <Linkedin className="h-4 w-4" />
      </button>
      <button onClick={copyLink} className="rounded-lg border border-border p-2 text-muted-foreground hover:border-primary hover:text-primary transition-colors">
        <LinkIcon className="h-4 w-4" />
      </button>
      {copied && <span className="text-xs text-primary font-medium animate-fade-in">Copied!</span>}
    </div>
  );
};

export default ShareButtons;
