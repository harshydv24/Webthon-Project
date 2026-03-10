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
        <source src="/video/v1.mp4" type="video/mp4" />
      </video>

      <div className="overlay"></div>

      <h1 className="heroText">
        The spark who generates their creativity
      </h1>

    </section>
  );
}

export default Hero;