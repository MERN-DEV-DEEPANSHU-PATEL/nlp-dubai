import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
import "./CoursesCarousel.scss";

const CoursesCarousel = () => {
  const options = {
    items: 1,
    loop: true,
    autoplayTimeout: 3000,
    animateOut: "fadeOut",
    autoplay: true,
    nav: true,
    dots: true,
    margin: 10,
    responsive: {
      1100: {
        items: 3,
      },
      724: {
        items: 1,
      },
      500: {
        items: 1,
      },
      370: {
        items: 1,
        innerWidth: "100%",
        outerWidth: "100%",
      },
    },
  };
  const options1 = {
    items: 1,
    loop: true,
    autoplayTimeout: 4000,
    animateOut: "fadeOut",
    autoplay: true,
    nav: true,
    dots: true,
    margin: 20,
    responsive: {
      1100: {
        items: 4,
      },
      724: {
        items: 1,
      },
      500: {
        items: 1,
      },
      370: {
        items: 1,
        innerWidth: "100%",
        outerWidth: "100%",
      },
    },
  };
  return (
    <>
      <div className="course-section">
        <h1 className="heading">Our Courses</h1>
        <div className="course-card">
          <OwlCarousel className="owl-theme" {...options}>
            <div className="course-card">
              <img src={"blog-01-min.jpg"} style={{ height: "200px" }} />
              <p>Certified Life Coaching</p>
            </div>
            <div className="course-card">
              <img src={"case-detail.jpg"} style={{ height: "200px" }} />
              <p>Advance Diploma in NPL & Coaching</p>
            </div>
            <div className="course-card">
              <img
                src={"case-studies-2-min-1.jpg"}
                style={{ height: "200px" }}
              />
              <p>Certified NLP Practitioner & Coach</p>
            </div>
            <div className="course-card">
              <img src={"service-01-min.jpg"} style={{ height: "200px" }} />
              <p>certified wellness coach</p>
            </div>
            <div className="course-card">
              <img src={"case-studies-4-min.jpg"} style={{ height: "200px" }} />
              <p>Certified NLP Master Practitioner</p>
            </div>
          </OwlCarousel>
          ;
        </div>
      </div>
      <div className="team-section">
        <h1 className="heading">Our Teams</h1>
        <div className="ms">
          <OwlCarousel className="owl-theme" {...options1}>
            <div className="item">
              <img
                src={"menon.png"}
                style={{ height: "400px", width: "340px" }}
              />
              <h2>
                <a> ValsaKumar P Menon </a>
              </h2>
              <p className="team-position">
                Managing Partner & Co-founder – UV Consultants
              </p>
            </div>
            <div className="item">
              <img
                src={"uma.png"}
                style={{ height: "400px", width: "340px" }}
              />
              <h2>
                <a>Uma Radhakrishnan </a>
              </h2>
              <p className="team-position">
                Managing Partner & Co-founder – UV Consultants
              </p>
            </div>
            <div className="item">
              <img
                src={"vikram.jpg"}
                style={{ height: "400px", width: "340px" }}
              />
              <h2>
                <a>Vikram Dhar </a>
              </h2>
              <p className="team-position">
                Managing Partner & Co-founder – UV Consultants
              </p>
            </div>
            <div className="item">
              <img
                src={"Michael.png"}
                style={{ height: "400px", width: "340px" }}
              />
              <h2>
                <a>Michael Beale</a>
              </h2>
              <p className="team-position">
                Managing Partner & Co-founder – UV Consultants
              </p>
            </div>
          </OwlCarousel>
          ;
        </div>
      </div>
    </>
  );
};

export default CoursesCarousel;
