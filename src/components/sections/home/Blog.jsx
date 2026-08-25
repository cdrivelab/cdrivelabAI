import { useEffect, useRef, useState } from "react";
import { useReveal } from "../../../hooks/useReveal.js";
import { blogPosts } from "../../../data/siteConfig.js";
import "./blog.css";

export default function Blog() {
  const head = useReveal();
  const carousel = useReveal();
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

  const goTo = (i) => {
    setIndex(i);
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector(".blog-card");
    if (!card) return;
    const cardWidth = card.offsetWidth + 22;
    track.scrollTo({ left: cardWidth * i, behavior: "smooth" });
  };

  useEffect(() => {
    if (isPaused) return undefined;
    const autoplay = setInterval(() => {
      setIndex((current) => {
        const next = (current + 1) % pageCount;
        goTo(next);
        return next;
      });
    }, 3200);
    return () => clearInterval(autoplay);
  }, [pageCount, isPaused]);

  return (
    <section className="section" id="blog">
      <div className="section-head" {...head}>
        <span className="kicker">Blog</span>
        <h2>Insights on building with AI</h2>
      </div>

      <div
        className="blog-carousel"
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
              onClick={() => goTo(i)}
              aria-label={`Go to blog page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}