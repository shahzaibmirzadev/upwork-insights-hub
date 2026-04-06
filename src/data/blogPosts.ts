export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorAvatar: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  reactions: { like: number; fire: number; clap: number; heart: number };
  comments: Comment[];
}

export interface Comment {
  id: string;
  author: string;
  avatar: string;
  content: string;
  date: string;
  likes: number;
}

export const categories = [
  "All",
  "Proposals",
  "Strategies",
  "Tips & Tricks",
  "Client Management",
  "Pricing",
  "Profile Optimization",
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "How to Write Winning Upwork Proposals That Get Replies",
    excerpt: "Master the art of crafting proposals that stand out from hundreds of competitors and land you more interviews.",
    content: `Writing a great Upwork proposal is both an art and a science. After winning over 200 contracts on the platform, here are my proven strategies.\n\n## Start With Their Pain Point\n\nNever start with "Dear Sir/Madam" or talk about yourself first. Instead, address the client's specific problem immediately. Show them you've read and understood their job post.\n\n## Show Relevant Experience\n\nDon't list every skill you have. Pick 2-3 relevant projects and briefly describe the results you achieved. Use numbers when possible.\n\n## Keep It Concise\n\nYour proposal should be 150-250 words max. Clients review dozens of proposals — respect their time.\n\n## Include a Call to Action\n\nEnd with a specific question about their project. This invites a response and starts a conversation.\n\n## Price Strategically\n\nDon't lowball. Price competitively but value your expertise. Explain why your rate reflects quality work.`,
    author: "Sarah Mitchell",
    authorAvatar: "SM",
    date: "Apr 2, 2026",
    readTime: "6 min read",
    category: "Proposals",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
    reactions: { like: 142, fire: 38, clap: 89, heart: 56 },
    comments: [
      { id: "c1", author: "Alex R.", avatar: "AR", content: "This completely changed my approach. Went from 5% to 25% response rate!", date: "Apr 3, 2026", likes: 12 },
      { id: "c2", author: "Priya K.", avatar: "PK", content: "The call-to-action tip is gold. Clients love when you ask smart questions.", date: "Apr 3, 2026", likes: 8 },
    ],
  },
  {
    id: "2",
    title: "The Ultimate Guide to Upwork Profile Optimization in 2026",
    excerpt: "Your profile is your storefront. Learn how to optimize every section to attract premium clients.",
    content: `Your Upwork profile is working 24/7 to attract or repel clients. Here's how to make it magnetic.\n\n## Professional Title\n\nBe specific. "Full-Stack Developer | React & Node.js Expert" beats "Web Developer" every time.\n\n## Overview Section\n\nWrite it like a sales letter. First paragraph: who you help and how. Second: your unique value. Third: social proof and results.\n\n## Portfolio\n\nShowcase your 5-6 best projects with detailed case studies. Include the problem, your solution, and measurable results.`,
    author: "James Chen",
    authorAvatar: "JC",
    date: "Mar 28, 2026",
    readTime: "8 min read",
    category: "Profile Optimization",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    reactions: { like: 203, fire: 67, clap: 124, heart: 91 },
    comments: [
      { id: "c3", author: "Maria L.", avatar: "ML", content: "Updated my profile based on this and got 3 invitations in one week!", date: "Mar 30, 2026", likes: 15 },
    ],
  },
  {
    id: "3",
    title: "Pricing Strategies: How to Charge What You're Worth",
    excerpt: "Stop undercharging. Learn data-driven pricing strategies that maximize your Upwork earnings.",
    content: `One of the biggest mistakes freelancers make is racing to the bottom on price. Here's a better approach.\n\n## Research Market Rates\n\nUse Upwork's own data to understand what top-rated freelancers in your niche charge.\n\n## Value-Based Pricing\n\nDon't price by the hour if you can price by the value delivered. A logo that increases conversions by 20% is worth far more than 3 hours of design work.\n\n## Raise Your Rates Gradually\n\nIncrease by 10-15% with each new contract. Your JSS and reviews justify premium pricing.`,
    author: "David Park",
    authorAvatar: "DP",
    date: "Mar 22, 2026",
    readTime: "5 min read",
    category: "Pricing",
    image: "https://images.unsplash.com/photo-1553729459-afe8f2e2ed65?w=800&q=80",
    reactions: { like: 178, fire: 52, clap: 96, heart: 43 },
    comments: [],
  },
  {
    id: "4",
    title: "Client Red Flags: When to Walk Away from a Job",
    excerpt: "Not every client is worth your time. Learn to identify warning signs before accepting a contract.",
    content: `Experienced freelancers know that saying no is just as important as saying yes. Here are red flags to watch for.\n\n## Vague Job Descriptions\n\nIf the client can't clearly describe what they need, you'll end up doing endless revisions.\n\n## Unrealistic Budgets\n\n"I need a full e-commerce site for $200" — run.\n\n## No Reviews or Payment History\n\nNew clients aren't always bad, but proceed with caution and use milestones.`,
    author: "Lisa Wang",
    authorAvatar: "LW",
    date: "Mar 18, 2026",
    readTime: "4 min read",
    category: "Client Management",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    reactions: { like: 256, fire: 89, clap: 145, heart: 72 },
    comments: [
      { id: "c4", author: "Tom B.", avatar: "TB", content: "Wish I read this before my last nightmare client 😅", date: "Mar 19, 2026", likes: 22 },
    ],
  },
  {
    id: "5",
    title: "From $0 to $10K/Month: My Upwork Journey",
    excerpt: "A step-by-step breakdown of how I went from zero to a full-time income on Upwork in 8 months.",
    content: `When I started on Upwork, I had no reviews, no reputation, and no idea what I was doing. Here's exactly how I built my freelance career.\n\n## Month 1-2: The Grind\n\nI applied to 10-15 jobs daily. My rate was low, but I focused on building reviews.\n\n## Month 3-4: Finding My Niche\n\nI stopped being a generalist and focused on React development for SaaS companies.\n\n## Month 5-8: Scaling Up\n\nWith strong reviews, I raised my rates and started getting invited to jobs instead of applying.`,
    author: "Sarah Mitchell",
    authorAvatar: "SM",
    date: "Mar 12, 2026",
    readTime: "10 min read",
    category: "Strategies",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
    reactions: { like: 412, fire: 156, clap: 234, heart: 189 },
    comments: [
      { id: "c5", author: "Nina F.", avatar: "NF", content: "This is incredibly inspiring. Starting my journey today!", date: "Mar 13, 2026", likes: 34 },
      { id: "c6", author: "Sam W.", avatar: "SW", content: "The niche advice is spot on. I did the same with data analysis.", date: "Mar 14, 2026", likes: 18 },
    ],
  },
  {
    id: "6",
    title: "10 Connects-Saving Tips Every Upworker Should Know",
    excerpt: "Connects are precious. Here's how to use them wisely and maximize your ROI on every application.",
    content: `With Upwork's connect system, every application costs you money. Here's how to spend them wisely.\n\n## Tip 1: Filter by Payment Verified\n\nOnly apply to clients with verified payment methods.\n\n## Tip 2: Check Client History\n\nLook at their hire rate and average hourly rate paid.\n\n## Tip 3: Apply Early\n\nJobs posted in the last hour have the highest response rates.`,
    author: "James Chen",
    authorAvatar: "JC",
    date: "Mar 8, 2026",
    readTime: "7 min read",
    category: "Tips & Tricks",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    reactions: { like: 167, fire: 43, clap: 78, heart: 35 },
    comments: [],
  },
];
