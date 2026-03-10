function Hero() {
  return (
    <section className="hero">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="backgroundVideo"
      >
        <source src="/videos/v1.mp4" type="video/mp4" />
      </video>

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

        <div className="heroDescription">
          <p>
            K72 is an agency that thinks about every action to nourish the brand.
            Tomorrow, in 5 months and in 5 years. We look for the friction that
            creates the spark to generate emotion. To ensure an honest relationship,
            we say without filter our convictions.
          </p>
        </div>

        <div className="heroBottom">
  <span className="heroPill">WORK</span>
  <span className="heroPill">AGENCY</span>
</div>

      </div>
    </section>
  );
}

export default Hero;