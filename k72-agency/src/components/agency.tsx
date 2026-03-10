import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Agency() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animations
      gsap.from(".bg-text", {
        y: 200,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.from(".image-wrapper", {
        scale: 0.6,
        opacity: 0,
        duration: 1.4,
        delay: 0.3,
        ease: "power3.out",
      });

      // Portfolio grid animations
      const portfolioItems = gsap.utils.toArray(".portfolio-item");
      portfolioItems.forEach((item, index) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          y: 100,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: "power2.out",
        });
      });

      // Portfolio item hover effect
      portfolioItems.forEach((item) => {
        item.addEventListener("mouseenter", () => {
          gsap.to(item, { scale: 1.05, duration: 0.3, ease: "power2.out" });
        });
        item.addEventListener("mouseleave", () => {
          gsap.to(item, { scale: 1, duration: 0.3, ease: "power2.out" });
        });
      });

      // Image wrapper hover effect
      const imageWrapper = document.querySelector(".image-wrapper");
      if (imageWrapper) {
        imageWrapper.addEventListener("mouseenter", () => {
          gsap.to(".image-wrapper", {
            scale: 1.08,
            duration: 0.4,
            ease: "power2.out",
          });
        });
        imageWrapper.addEventListener("mouseleave", () => {
          gsap.to(".image-wrapper", {
            scale: 1,
            duration: 0.4,
            ease: "power2.out",
          });
        });
      }

      // Section title animations
      gsap.from(".agency-title", {
        scrollTrigger: {
          trigger: ".agency-title",
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });

      // Description text animation
      gsap.from(".agency-description", {
        scrollTrigger: {
          trigger: ".agency-description",
          start: "top 85%",
          toggleActions: "play none none none",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="agency-container">
      {/* Hero Section */}
      <section className="agency">
        <h1 className="bg-text">SEVEN7Y</h1>
        <div className="image-wrapper">
          <img
            src="https://via.placeholder.com/350x450/cccccc/666666?text=Agency"
            alt="Agency project"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="agency-about">
        <h2 className="agency-title">About SEVEN7Y</h2>
        <p className="agency-description">
          We are a creative agency that builds bold experiences and unforgettable brands.
          Our approach combines strategy, design, and technology to create meaningful connections
          with audiences. We specialize in transforming ideas into reality.
        </p>
      </section>

      {/* Portfolio Grid Section */}
      <section className="agency-portfolio">
        <h2 className="agency-title">Featured Projects</h2>
        <div className="portfolio-grid">
          <div className="portfolio-item">
            <div className="portfolio-image">
              <img
                src="https://via.placeholder.com/400x300/999999/666666?text=Project+1"
                alt="Project 1"
              />
            </div>
            <h3>Project One</h3>
          </div>
          <div className="portfolio-item">
            <div className="portfolio-image">
              <img
                src="https://via.placeholder.com/400x300/888888/555555?text=Project+2"
                alt="Project 2"
              />
            </div>
            <h3>Project Two</h3>
          </div>
          <div className="portfolio-item">
            <div className="portfolio-image">
              <img
                src="https://via.placeholder.com/400x300/777777/444444?text=Project+3"
                alt="Project 3"
              />
            </div>
            <h3>Project Three</h3>
          </div>
          <div className="portfolio-item">
            <div className="portfolio-image">
              <img
                src="https://via.placeholder.com/400x300/666666/333333?text=Project+4"
                alt="Project 4"
              />
            </div>
            <h3>Project Four</h3>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="agency-services">
        <h2 className="agency-title">Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Brand Strategy</h3>
            <p>Building powerful brand identities from the ground up.</p>
          </div>
          <div className="service-card">
            <h3>Digital Design</h3>
            <p>Creating stunning visual experiences across all platforms.</p>
          </div>
          <div className="service-card">
            <h3>Web Development</h3>
            <p>Developing high-performance, scalable web solutions.</p>
          </div>
          <div className="service-card">
            <h3>Marketing</h3>
            <p>Strategic campaigns that drive results and engagement.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="agency-cta">
        <h2>Ready to create something amazing?</h2>
        <button className="cta-button">Get Started</button>
      </section>
    </div>
  );
}

export default Agency;
