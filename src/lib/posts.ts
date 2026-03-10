export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
  content: ContentBlock[];
};

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "subheading"; text: string }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "divider" };

export const POSTS: Post[] = [
  {
    slug: "why-i-started-writing",
    title: "Why I Started Writing — And Why It Took Me So Long",
    excerpt:
      "For years I had thoughts I wanted to share but never found the nerve. Here's what finally pushed me to put words on a page, and what I've learned since.",
    category: "Personal",
    date: "March 5, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1400&q=85",
    featured: true,
    content: [
      {
        type: "paragraph",
        text: "For the longest time, writing felt like something other people did. People with more interesting lives, sharper opinions, better sentences. I had thoughts — plenty of them — but the gap between what was in my head and what I imagined 'real writing' looked like felt impossibly wide.",
      },
      {
        type: "paragraph",
        text: "So I didn't write. I read instead. Obsessively. Essays, blogs, long-form journalism. I told myself I was learning, absorbing, preparing. But really I was just avoiding the moment when I'd have to put something of my own out into the world and risk it being mediocre.",
      },
      {
        type: "quote",
        text: "You don't start out writing good stuff. You start out writing crap and thinking it's good stuff, and then gradually you get better at it.",
        attribution: "Octavia Butler",
      },
      {
        type: "heading",
        text: "The moment something shifted",
      },
      {
        type: "paragraph",
        text: "It wasn't a dramatic epiphany. It was a late Tuesday night, a half-drunk cup of tea, and a thought I'd been turning over for weeks that finally demanded to be written down. Not published — just written. I opened a notes app and wrote three paragraphs. They weren't good. But finishing them felt like exhaling after holding my breath for a long time.",
      },
      {
        type: "paragraph",
        text: "That feeling — of a thought becoming solid, of pinning something slippery into language — turned out to be enough of a reason. Not audience, not influence, not even clarity (though that came later). Just the weird satisfaction of making something that hadn't existed before.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1517971071642-34a2d3ecc9cd?w=900&q=80",
        alt: "A person writing at a desk",
        caption: "There's something grounding about putting words on a page, even badly.",
      },
      {
        type: "heading",
        text: "What I've learned since",
      },
      {
        type: "subheading",
        text: "Writing is thinking, not recording",
      },
      {
        type: "paragraph",
        text: "I used to think you needed to have your thoughts figured out before you wrote them. That writing was transcription. It isn't. Half the time I don't know what I actually think about something until I've written through it. The page is where the thinking happens, not where it gets deposited.",
      },
      {
        type: "subheading",
        text: "The first draft is meant to be bad",
      },
      {
        type: "paragraph",
        text: "This sounds obvious but it took me an embarrassingly long time to actually believe it. Every first draft I write is too long, too meandering, and explains things the reader doesn't need explained. The second draft is where the real work is. The first draft is just permission to exist.",
      },
      {
        type: "subheading",
        text: "Consistency beats inspiration",
      },
      {
        type: "paragraph",
        text: "I write better when I write often — even badly, even briefly. The posts I'm most proud of weren't written in one inspired session. They were assembled over days of small additions, cuts, and rearrangements. Waiting for the perfect moment to write is a very effective way of never writing.",
      },
      {
        type: "divider",
      },
      {
        type: "paragraph",
        text: "I still feel the pull to not publish things. To keep refining, or to decide something isn't good enough, or to just leave it in drafts forever where it can't disappoint anyone. But I've made a deal with myself: done is better than perfect, and out in the world is better than hidden in a folder.",
      },
      {
        type: "paragraph",
        text: "If you've been waiting to write something — a blog, a newsletter, a single essay — I'd say: stop waiting for a reason and start with the thing you keep thinking about. The gap between the writing in your head and the writing on the page closes faster than you think.",
      },
    ],
  },
  {
    slug: "morning-routines-overrated",
    title: "Morning Routines Are Overrated. Here's What Actually Works.",
    excerpt:
      "Every productivity guru swears by a 5 AM ritual. I tried it all — here's what I actually learned about how my brain operates.",
    category: "Lifestyle",
    date: "February 20, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&q=85",
    content: [
      {
        type: "paragraph",
        text: "At some point over the last decade, 'morning routine' became the dominant productivity religion. Wake at 5 AM. Journal. Meditate. Exercise. Cold shower. Read for thirty minutes. Do all of this before checking your phone. By 8 AM you should have accomplished the equivalent of a normal person's full working day.",
      },
      {
        type: "paragraph",
        text: "I tried most of it. Some of it even worked — briefly. But mostly I learned that optimising mornings is a displacement activity for people who haven't figured out what they actually want to do with their time.",
      },
      {
        type: "quote",
        text: "The morning is not your most valuable resource. Your attention is. And routines are just a way of protecting it.",
      },
      {
        type: "heading",
        text: "What actually matters",
      },
      {
        type: "paragraph",
        text: "After years of experimenting, I've landed on something much simpler: do the one important thing first, before anything else grabs you. Not five things. One thing. The thing you'd feel genuinely good about having done at the end of the day.",
      },
      {
        type: "paragraph",
        text: "Everything else — the journaling, the exercise, the reading — is fine as long as it doesn't become the main event. When the routine itself becomes the goal, you've missed the point.",
      },
      {
        type: "divider",
      },
      {
        type: "paragraph",
        text: "The honest truth is that most morning routine advice is aspirational content designed to make you feel like you're optimising, which in itself feels productive. Real productivity is much less photogenic. It's just doing the hard thing before you find a reason not to.",
      },
    ],
  },
  {
    slug: "books-that-rewired-my-brain",
    title: "7 Books That Completely Rewired the Way I Think",
    excerpt:
      "Not a listicle — more like an honest reckoning with the books that genuinely changed my perspective on work, relationships, and time.",
    category: "Reading",
    date: "February 10, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1400&q=85",
    content: [
      {
        type: "paragraph",
        text: "Most books I read and forget within a month. The arguments dissolve, the examples blur together, and I'm left with a vague feeling that I learned something without being able to say what. These are not those books.",
      },
      {
        type: "paragraph",
        text: "The seven books below are ones I think about regularly — sometimes daily. They didn't just give me information; they gave me new frameworks that I still actively use to make sense of things.",
      },
      {
        type: "heading",
        text: "On thinking and decisions",
      },
      {
        type: "subheading",
        text: "Thinking, Fast and Slow — Daniel Kahneman",
      },
      {
        type: "paragraph",
        text: "I know, I know. Everyone recommends this one. But there's a reason. The System 1 / System 2 distinction is one of those ideas that, once you have it, you see everywhere. You notice it in your own snap judgements, in arguments, in how news is framed. It made me substantially more suspicious of my own confident opinions.",
      },
      {
        type: "subheading",
        text: "The Art of Thinking Clearly — Rolf Dobelli",
      },
      {
        type: "paragraph",
        text: "A catalogue of cognitive biases, each covered in two or three pages. Not deep, but devastating in its cumulative effect. By the end I was genuinely unsure how I'd made any good decisions at all.",
      },
      {
        type: "heading",
        text: "On time and work",
      },
      {
        type: "subheading",
        text: "Four Thousand Weeks — Oliver Burkeman",
      },
      {
        type: "paragraph",
        text: "The only productivity book that made me feel better about being unproductive. Burkeman's central argument is that the productivity project — the idea that you can eventually get on top of everything if you just optimise hard enough — is a fantasy. You can't. There will always be more. The question is what you choose to do with the finite time you have.",
      },
      {
        type: "quote",
        text: "The real problem isn't that you have too much to do. It's that you've convinced yourself that one day you'll finally get to the bottom of the list.",
        attribution: "Oliver Burkeman, Four Thousand Weeks",
      },
      {
        type: "divider",
      },
      {
        type: "paragraph",
        text: "I could keep going — there are another four on the list — but I'll save those for a follow-up post. The main point is this: the books that change you aren't always the ones you expect. Sometimes it's the slim, overlooked one you almost didn't bother with.",
      },
    ],
  },
  {
    slug: "on-being-a-beginner",
    title: "On Being a Beginner in a World That Rewards Experts",
    excerpt:
      "There's something quietly beautiful about not knowing what you're doing. I've been thinking about beginner's mind and why we abandon it too soon.",
    category: "Thoughts",
    date: "January 28, 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1400&q=85",
    content: [
      {
        type: "paragraph",
        text: "There's a Zen concept called shoshin — beginner's mind. It refers to approaching something with openness and lack of preconceptions, the way a beginner would, even when you're experienced. The opposite is expert's mind: the accumulated weight of knowing that gradually closes off possibilities.",
      },
      {
        type: "paragraph",
        text: "We live in a culture that rewards expertise loudly and treats beginner status as something to move through as quickly as possible. You're a beginner at something? Great. When will you be good at it?",
      },
      {
        type: "quote",
        text: "In the beginner's mind there are many possibilities, but in the expert's mind there are few.",
        attribution: "Shunryu Suzuki",
      },
      {
        type: "heading",
        text: "What you lose when you stop being a beginner",
      },
      {
        type: "paragraph",
        text: "When you're a beginner, every small gain is thrilling. You notice everything. You ask questions that experts have stopped asking because they assume they already know the answer. You make unexpected connections because you don't know yet what's supposed to connect to what.",
      },
      {
        type: "paragraph",
        text: "Expertise is genuinely valuable — I'm not romanticising incompetence. But there's something worth protecting in the beginner's willingness to be confused, to look stupid, to try things that probably won't work. That posture, maintained deliberately, is one of the most useful things a person can cultivate.",
      },
      {
        type: "divider",
      },
      {
        type: "paragraph",
        text: "I'm a beginner at a lot of things right now. Some days that's uncomfortable. But mostly I think I'm lucky — there's still so much I haven't ruined with expertise yet.",
      },
    ],
  },
  {
    slug: "cities-i-almost-moved-to",
    title: "Three Cities I Almost Moved To — And Why I Didn't",
    excerpt:
      "Berlin. Lisbon. Chiang Mai. Each one was a genuine possibility. Here's what those near-decisions taught me about what I want.",
    category: "Travel",
    date: "January 15, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1400&q=85",
    content: [
      {
        type: "paragraph",
        text: "At various points over the last few years, I have packed hypothetical bags for Berlin, Lisbon, and Chiang Mai. I've read the expat forums, priced the apartments, calculated the cost of living, imagined the version of myself who lives there. None of them stuck. Here's why.",
      },
      {
        type: "heading",
        text: "Berlin",
      },
      {
        type: "paragraph",
        text: "Berlin seduced me the way it seduces everyone — the energy, the art, the sense that the city is permanently unfinished and therefore always beginning. I spent three weeks there one summer and left convinced I'd be back within a year to stay.",
      },
      {
        type: "paragraph",
        text: "What stopped me wasn't the cold or the bureaucracy (both legendary). It was the realisation that what I loved about Berlin was being a visitor in Berlin. The city is intoxicating at the surface. Getting underneath it requires a kind of committed immersion I wasn't prepared for.",
      },
      {
        type: "heading",
        text: "Lisbon",
      },
      {
        type: "paragraph",
        text: "Lisbon was different — softer, slower, genuinely beautiful in a way that doesn't announce itself. I almost signed a six-month lease in Mouraria and only didn't because of a timing problem that, in retrospect, might have been a convenient excuse.",
      },
      {
        type: "quote",
        text: "Lisbon is the only city I've visited where I felt a pang of loss before I'd even left.",
      },
      {
        type: "heading",
        text: "Chiang Mai",
      },
      {
        type: "paragraph",
        text: "Chiang Mai was the most practical option — cheap, comfortable, excellent food, a functioning remote-work infrastructure. I had friends there. I had a plan. What I didn't have was a genuine desire to go. I wanted to want it. That's not the same thing.",
      },
      {
        type: "divider",
      },
      {
        type: "paragraph",
        text: "What all three taught me is that the fantasy of somewhere else is doing a lot of work. The city isn't the point. The version of yourself you imagine living there is. And that version usually has a lot less to do with geography than you think.",
      },
    ],
  },
  {
    slug: "the-internet-i-miss",
    title: "The Internet I Miss — A Love Letter to Weird Websites",
    excerpt:
      "Before everything became a feed and an algorithm, the web was a stranger, wilder place. I find myself mourning it more than I expected.",
    category: "Tech",
    date: "January 3, 2025",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&q=85",
    content: [
      {
        type: "paragraph",
        text: "There used to be a website I visited obsessively as a teenager. I couldn't tell you what it was called now. It was run by one person who had very specific opinions about late-night radio, obscure film soundtracks, and the correct way to make a Reuben sandwich. I have no idea what happened to it.",
      },
      {
        type: "paragraph",
        text: "That website — and thousands like it — was part of an internet that no longer really exists. One made of individual people with idiosyncratic tastes, building strange personal spaces, connecting with whoever happened to wander in.",
      },
      {
        type: "heading",
        text: "What the feed killed",
      },
      {
        type: "paragraph",
        text: "The feed is an extraordinary piece of engineering. It's also the thing that most thoroughly flattened the old web. When content is optimised for engagement, the weird stuff — the slow stuff, the niche stuff, the stuff made for twenty people who really care — doesn't survive. It gets replaced by content calibrated to produce a reaction in the largest possible number of people.",
      },
      {
        type: "quote",
        text: "The internet went from a place you visited to a place that visits you. That reversal changed everything.",
      },
      {
        type: "heading",
        text: "The small web",
      },
      {
        type: "paragraph",
        text: "There's a small but genuine revival happening. People building personal sites again — not to build audiences or personal brands, but just to have a place that's theirs. Newsletters that go to a few hundred people who actually want them. Forums for people who are serious about niche things.",
      },
      {
        type: "paragraph",
        text: "It won't replace what was lost. But it's something. And honestly, this blog is part of that impulse — a small corner of the web that isn't trying to go viral, that exists mainly because I wanted somewhere to put things.",
      },
      {
        type: "divider",
      },
      {
        type: "paragraph",
        text: "If you have an old website somewhere — forgotten, embarrassing, full of broken images — I'd encourage you to look at it. There's probably something in there worth keeping. And maybe something worth making again.",
      },
    ],
  },
];

export const CATEGORIES = ["All", "Personal", "Lifestyle", "Reading", "Thoughts", "Travel", "Tech"];

export function getPost(slug: string): Post | undefined {
  return POSTS.find(p => p.slug === slug);
}

export function getRelatedPosts(slug: string, count = 2): Post[] {
  const post = getPost(slug);
  if (!post) return [];
  return POSTS
    .filter(p => p.slug !== slug)
    .sort((a, b) => {
      // Same category first
      const aScore = a.category === post.category ? 1 : 0;
      const bScore = b.category === post.category ? 1 : 0;
      return bScore - aScore;
    })
    .slice(0, count);
}