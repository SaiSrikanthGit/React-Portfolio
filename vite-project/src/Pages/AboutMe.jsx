function AboutMe() {
  return (
    <div class="container-fluid">
      <div class="row g-4 p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg bg-gradient">
        <div class="col-lg-7 col-md-12 p-3 p-lg-5 pt-lg-3 text-center text-lg-start">
          <h1 class="display-4 fw-bold lh-sm text-primary mb-3 animate__animated animate__fadeIn animate__delay-0.5s">
            Sai Srikanth Chodimella
          </h1>
          <h2 class="display-6 lh-sm text-secondary animate__animated animate__fadeIn animate__delay-1s">
            <strong>About Me</strong>
          </h2>
          <p class="lead mb-4 animate__animated animate__fadeIn animate__delay-1.5s">
            Experienced <strong>.NET Developer</strong> with close to{" "}
            <strong>5 years</strong> of expertise in designing and developing
            scalable, high-quality solutions across
            <strong>
              Web, Microservices, Mobile, and Desktop applications
            </strong>
            . Skilled in delivering innovative projects following
            industry-standard guidelines and best practices.
          </p>
          <div class="d-flex flex-column">
            <div class="mt-auto animate__animated animate__fadeIn animate__delay-2s">
              <a
                class="btn btn-primary d-inline-flex align-items-center"
                href="https://www.linkedin.com/in/sai-srikanth-chodimella/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="bi bi-linkedin mx-1"></i> LinkedIn
              </a>

              <a
                class="btn btn-secondary d-inline-flex align-items-center"
                href="https://dev.azure.com/srikanthchodimella/MonsterBuilder"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="bi bi-git mx-1"></i> Azure Repo
              </a>

              <a
                class="btn btn-success d-inline-flex align-items-center"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasWithBothOptions"
                aria-controls="offcanvasWithBothOptions"
              >
                <i class="bi bi-clock-history mx-1"></i> My Timeline
              </a>

              <a
                class="btn btn-danger d-inline-flex align-items-center"
                href="https://roadmap.sh/r/my-roadmap-as-net-developer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="bi bi-diagram-3 mx-1"></i> My Road Map
              </a>
            </div>
          </div>
        </div>
        {/*Image Section*/}
        <div class="col-lg-5 col-md-12 text-center overflow-hidden shadow-lg">
          <img
            class="rounded-lg-3 img-fluid animate__animated animate__zoomIn"
            src="/asset/profimage.png"
            alt="Sai Srikanth Chodimella"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
