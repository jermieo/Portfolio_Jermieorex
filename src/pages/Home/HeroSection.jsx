export default function HeroSection() {
  const handleDownload = () => {
    const cvDocumentPath = "/assets/JermieoRex.pdf";
    // Initiating download
    const anchor = document.createElement("a");
    anchor.href = cvDocumentPath;
    anchor.download = "cv_document.pdf";
    anchor.click();
  };
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Jermieorex</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            I am a fast learner and have the ability to work
            <br /> both in a team and an individual environment.
          </p>
        </div>
        <button className="btn btn-primary" onClick={handleDownload}>
          Get In CV
        </button>
      </div>
      <div className="hero--section--img">
        <img src="/assets/programming.avif" alt="Hero Section" />
      </div>
    </section>
  );
}
