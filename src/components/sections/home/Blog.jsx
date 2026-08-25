import { useEffect, useRef, useState } from "react";
import { useReveal } from "../../../hooks/useReveal.js";
import { blogPosts } from "../../../data/siteConfig.js";
import "./blog.css";

export default function Blog() {
  const head = useReveal(0, "section-head");
  const carousel = useReveal(0, "blog-carousel");
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(window.innerWidth <= 900 ? 1 : 3);
  const [isPaused, setIsPaused] = useState(false);

  const pageCount = Math.max(blogPosts.length - perView + 1, 1);

  useEffect(() => {
    const handleResize = () => setPerView(window.innerWidth <= 900 ? 1 : 3);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Keep the active page in range when a resize changes how many fit.
  useEffect(() => {
    setIndex((current) => Math.min(current, pageCount - 1));
  }, [pageCount]);

  useEffect(() => {
    if (isPaused) return undefined;
    const autoplay = setInterval(() => {
      setIndex((current) => (current + 1) % pageCount);
    }, 3200);
    return () => clearInterval(autoplay);
  }, [pageCount, isPaused]);

  // Scrolling is a side effect of the index changing, not part of setting it.
  // Doing it inside the setIndex updater made the updater impure, so React's
  // StrictMode double-invoke fired the scroll twice.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector(".blog-card");
    if (!card) return;
    track.scrollTo({ left: (card.offsetWidth + 22) * index, behavior: "smooth" });
  }, [index]);

  return (
    <section className="section" id="blog">
      <div {...head}>
        <span className="kicker">Blog</span>
        <h2>Insights on building with AI</h2>
      </div>

      <div
        {...carousel}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="blog-track" ref={trackRef}>
          {blogPosts.map((post) => (
            <div className="blog-card" key={post.title}>
              <div className="blog-thumb" />
              <div className="blog-body">
                <span className="blog-tag">{post.tag}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="blog-meta">{post.meta}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="blog-dots">
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              type="button"
              className={i === index ? "active" : ""}
              onClick={() => setIndex(i)}
              aria-label={`Go to blog page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}