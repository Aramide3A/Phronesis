import { Link } from "react-router-dom";
import LegacyServiceCard from "../components/LegacyServiceCard";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { aboutUsIntro, historyProfile, historyServiceCards } from "../data/site";

export default function AboutHistoryPage() {
  return (
    <>
      <PageHero
        title="About Phronesis West Africa"
        subtitle="...Giving you excellent service on what you need."
        image="/images/background/13.jpg"
      />

      <section className="about-section style-four">
        <div className="auto-container">
          <div className="row">
            <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
              <div className="inner-column">
                <SectionHeading eyebrow="About Phronesis West Africa" title="We are leaders in the industry" />
                <div className="text">{aboutUsIntro}</div>
                <div className="row clearfix">
                  {["Projects Successes", "Projects Successes", "Projects Successes"].map((label, index) => (
                    <div className="skill-block col-lg-4 col-md-4 col-sm-12" key={`${label}-${index}`}>
                      <div className="inner-box">
                        <div className="graph-outer react-graph">
                          <div className="inner-text count-box">85%</div>
                        </div>
                        <h3>{label}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="text-layer">A</div>
                <figure className="image-1">
                  <img src="/images/resource/about-1.jpg" alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section style-two">
        <div className="auto-container">
          <div className="row">
            <div className="content-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="sec-title">
                  <span className="title">OUR VISION & OBJECTIVE</span>
                  <h4>{historyProfile.objective}</h4>
                </div>
                <div className="sec-title">
                  <span className="title">OUR VISION</span>
                  <h4>{historyProfile.vision}</h4>
                </div>
                <div className="sec-title">
                  <span className="title">OPERATIONAL PERMISSIONS</span>
                  <h4>{historyProfile.permissions}</h4>
                </div>
                <ul className="list-style-one">
                  {historyProfile.permissionItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="btn-box">
                  <Link to="/contact" className="theme-btn btn-style-one">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="text-layer">A</div>
                <figure className="image-1">
                  <img src="/images/resource/image-5.jpg" alt="" />
                </figure>
                <figure className="image-2">
                  <img src="/images/resource/image-6.jpg" alt="" />
                </figure>
                <div className="video-link">
                  <a href="https://www.youtube.com/watch?v=e_WOEL6F1YE" className="link">
                    <span className="icon fa fa-play" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section alternate">
        <div className="auto-container">
          <SectionHeading eyebrow="Our Services" title="What We Do?" align="center" />
          <div className="row">
            {historyServiceCards.map((service, index) => (
              <LegacyServiceCard
                key={`${service.title}-${index}`}
                {...service}
                columnClass="col-lg-4 col-md-6 col-sm-12"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="call-to-action" style={{ backgroundImage: "url(/images/background/2.jpg)" }}>
        <div className="auto-container">
          <div className="content-box">
            <h2>
              Provide You The Highest Quality Work <br />
              That Meets Your Expectation.
            </h2>
            <div className="link-box">
              <Link to="/contact" className="theme-btn btn-style-one">
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
