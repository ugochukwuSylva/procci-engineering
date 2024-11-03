import "./About.scss";

function About() {
  return (
    <section
      id="About"
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="about">
        <h1 className="heading-primary">About</h1>
        {/*  */}
        <div className="about__grid">
          <div className="about__grid-text">
            <div className="text-heading">
              <span className="number">01</span>
              <span className="skill">Track Record</span>
            </div>
            <p>
              Welcome to PROCCI Engineering Nigeria Limited, a premier civil and
              structural engineering firm with a growing reputation for
              delivering high-quality and innovative engineering solutions.
              While the company has been in existence for over 7 years, our team
              of experts brings over 15 years of individual experience across
              various sectors, including oil and gas, power, and infrastructure.
              Recently, we've expanded our operations to actively serve clients
              with the full scope of our capabilities.
            </p>
          </div>
          <div className="about__grid-image">
            <img
              srcSet="./about-image-1.jpeg 1x, ./about-image-1.jpeg 2x"
              alt="an engineer in the rig"
            />
          </div>
          {/*  */}

          <div className="about__grid-image">
            <img
              srcSet="./about-image-2.jpeg 1x, ./about-image-2.jpeg 2x"
              alt="an engineer in the rig"
            />
          </div>

          <div className="about__grid-text">
            <div className="text-heading">
              <span className="number">02</span>
              <span className="skill">Proficiency</span>
            </div>

            <p>
              At PROCCI Engineering, we specialize in detailed engineering
              design, project execution, and construction management. Our
              services extend to both onshore and offshore projects, covering
              structural analysis and design for platforms, pipelines,
              buildings, and complex civil structures. We have worked with major
              industry players like Chevron, Shell, and Dangote Refinery,
              ensuring projects meet international standards for safety,
              quality, and cost-efficiency. Our dedication to excellence drives
              us to offer tailored engineering solutions that cater to the
              unique needs of each client. Whether it's detailed design,
              construction support, or project management, PROCCI Engineering is
              your trusted partner for engineering success.
            </p>
          </div>
          {/*  */}
          <div className="about__grid-text">
            <div className="text-heading">
              <span className="number">03</span>
              <span className="skill">Core Services</span>
            </div>

            <p>
              ENGINEERING DESIGN & ANALYSIS: Comprehensive structural design
              services for onshore and offshore projects, including buildings,
              platforms, pipelines, and specialized structures. Project
              Management: Expertise in managing projects from conception to
              completion, ensuring safety, quality, and timely delivery.
              Construction Support: Providing construction management and
              on-site engineering solutions to ensure successful project
              execution. Recent Projects Explore our portfolio of projects,
              including offshore platform designs, building structures, and
              industrial facility development for leading companies like
              Chevron, Shell, and Dangote Refinery.
            </p>
          </div>
          <div className="about__grid-image">
            <img
              srcSet="./about-image-3.jpg 1x, ./about-image-3.jpg 2x"
              alt="an engineer inside an office"
            />
          </div>
          {/*  */}
          <div className="about__grid-image">
            <img
              srcSet="./about-image-4.jpg 1x, ./about-image-4.jpg 2x"
              alt="engineers"
            />
          </div>

          <div className="about__grid-text">
            <div className="text-heading">
              <span className="number">04</span>
              <span className="skill">Why choose us?</span>
            </div>

            <p>
              Experienced Team: A highly skilled team with deep industry
              knowledge and experience.
              <br /> Client-Focused Approach: Customized solutions that meet
              your unique project requirements.
              <br /> Quality & Safety Assurance: Adherence to international
              standards for project safety, quality, and cost-efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
