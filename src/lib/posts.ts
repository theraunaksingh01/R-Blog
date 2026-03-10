export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
};

export const POSTS: Post[] = [
  {
    slug: "why-i-started-writing",
    title: "Why I Started Writing — And Why It Took Me So Long",
    excerpt:
      "For years I had thoughts I wanted to share but never found the nerve. Here's what finally pushed me to put words on a page, and what I've learned since.",
    category: "Personal",
    date: "March 5, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=900&q=80",
    featured: true,
  },
  {
    slug: "morning-routines-are-overrated",
    title: "Morning Routines Are Overrated. Here's What Actually Works.",
    excerpt:
      "Every productivity guru has a 5 AM cold-plunge ritual. I tried it all and learned something different about how my brain actually operates.",
    category: "Lifestyle",
    date: "February 20, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700&q=80",
  },
  {
    slug: "books-that-rewired-my-brain",
    title: "7 Books That Completely Rewired the Way I Think",
    excerpt:
      "Not a listicle — more like an honest reckoning with the books that genuinely changed my perspective on work, relationships, and time.",
    category: "Reading",
    date: "February 10, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=700&q=80",
  },
  {
    slug: "on-being-a-beginner",
    title: "On Being a Beginner in a World That Rewards Experts",
    excerpt:
      "There's something quietly beautiful about not knowing what you're doing. I've been thinking about beginner's mind and why we abandon it so quickly.",
    category: "Thoughts",
    date: "January 28, 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=700&q=80",
  },
  {
    slug: "cities-i-almost-moved-to",
    title: "Three Cities I Almost Moved To — And Why I Didn't",
    excerpt:
      "Berlin. Lisbon. Chiang Mai. Each one was a genuine possibility. Here's what those near-decisions taught me about what I actually want from life.",
    category: "Travel",
    date: "January 15, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=700&q=80",
  },
  {
    slug: "the-internet-we-lost",
    title: "The Internet I Miss — A Love Letter to Weird Websites",
    excerpt:
      "Before everything became a feed and an algorithm, the web was a stranger, wilder place. I find myself mourning it more than I expected to.",
    category: "Tech",
    date: "January 3, 2025",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=700&q=80",
  },
];

export const CATEGORIES = ["All", "Personal", "Lifestyle", "Reading", "Thoughts", "Travel", "Tech"];