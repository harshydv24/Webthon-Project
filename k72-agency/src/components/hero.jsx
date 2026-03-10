function Hero() {
  return (
    <section className="hero">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="backgroundVideo"
      >
        <source src="/videos/v1.mp4" type="video/mp4" />
      </video>

      {/* Title + inline video */}
      <div className="heroContent">
        <h1 className="heroText">
          <span className="heroLine">THE SPARK</span>
          <span className="heroLine">
            WHO
            <span className="inlineVideoWrapper">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="inlineVideo"
              >
                <source src="/videos/v1.mp4" type="video/mp4" />
              </video>
            </span>
          </span>
          <span className="heroLine">GENERATES</span>
          <span className="heroLine">THERE</span>
          <span className="heroLine">
            <span className="creativityWrapper">
              CREATIVITY
              <svg className="creativityEllipse" viewBox="0 0 520 120" preserveAspectRatio="none">
                <ellipse cx="260" cy="60" rx="255" ry="55" fill="none" stroke="#c8e64a" strokeWidth="1.5" />
              </svg>
            </span>
          </span>
        </h1>
      </div>

      {/* Description paragraph — bottom right */}
      <div className="heroDescription">
        <p>
          K72 is an agency that builds brands from every angle. Today, tomorrow
          and years from now. We think the best sparks fly when comfort zones get
          left behind and friction infuses our strategies, brands and
          communications with real feeling. We're transparent, honest and say
          what we mean, and when we believe in something, we're all in.
        </p>
      </div>

      {/* Big buttons — bottom */}
      <div className="heroButtons">
        <a href="#projects" className="bigButton">
          <span className="bigButtonText">PROJECTS</span>
        </a>
        <a href="#agence" className="bigButton">
          <span className="bigButtonText">AGENCE</span>
        </a>
      </div>
    </section>
  );
}

export default Hero;