import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPost, getRelatedPosts, POSTS } from "@/lib/posts";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PostHero from "../../components/blog/PostHero";
import PostBody from "../../components/blog/PostBody";
import PostFooter from "../../components/blog/PostFooter";
import ReadingProgress from "../../components/blog/ReadingProgress";

// Generate static params for all posts
export function generateStaticParams() {
  return POSTS.map(p => ({ slug: p.slug }));
}

// Generate page metadata per post
export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const post = getPost(params.slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} — The Canvas`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }],
      type: "article",
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const related = getRelatedPosts(params.slug, 2);

  return (
    <>
      <ReadingProgress />
      <Navbar />
      <main>
        <PostHero post={post} />
        <PostBody content={post.content} />
        <PostFooter post={post} related={related} />
      </main>
      <Footer />
    </>
  );
}