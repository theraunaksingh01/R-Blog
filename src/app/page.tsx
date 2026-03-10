import Navbar from "./components/Navbar";
import HeroSection from "./components/sections/HeroSection";
import PostsGrid from "./components/sections/PostsSection";
import AboutSnippet from "./components/sections/AboutSpotlight";
import Newsletter from "./components/sections/NewsletterSection";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <PostsGrid />
        <AboutSnippet />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}