import { Link } from "react-router-dom";
import LegacyServiceCard from "../components/LegacyServiceCard";
import SectionHeading from "../components/SectionHeading";
import { backupHomeSlides, historyServiceCards, whyChooseUs } from "../data/site";

export default function BackupHomePage() {
  return (
    <>
      <section className="main-slider style-two react-main-slider">
        <div
          className="react-slide"
          style={{ backgroundImage: `url(${backupHomeSlides[0].image})` }}
        >
          <div className="auto-container">
            <div className="react-slide-content">
              <h2>{backupHomeSlides[0].title}</h2>
              <div className="text">{backupHomeSlides[1].title}</div>
              <div className="text">{backupHomeSlides[2].title}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section style-two alternate">
        <div className="auto-container">
          <div className="row">
            <div className="content-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <SectionHeading
                  eyebrow="About Phronesis West Africa"
                  title="We are leader in Industrial market Since 1970"
                />
                <div className="text">
                  Phronesis West Africa LTD provides engineering, procurement, and technical
                  services with a focus on quality delivery and reliable industry support.
                </div>
                <div className="btn-box">
                  <Link to="/about" className="theme-btn btn-style-one">
                    Read More
                  </Link>
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

      <section className="fluid-section-one">
        <div className="outer-container clearfix">
          <div className="form-column clearfix">
            <div className="map-layer" />
            <div className="inner-column">
              <div className="sec-title light">
                <h2>Request A Quote</h2>
              </div>
              <div className="contact-form">
                <form>
                  <div className="row">
                    <div className="form-group col-lg-6 col-md-6 col-sm-12">
                      <input type="text" placeholder="Your name" />
                    </div>
                    <div className="form-group col-lg-6 col-md-6 col-sm-12">
                      <input type="email" placeholder="Your email" />
                    </div>
                    <div className="form-group col-lg-6 col-md-6 col-sm-12">
                      <input type="text" placeholder="Phone" />
                    </div>
                    <div className="form-group col-lg-6 col-md-6 col-sm-12">
                      <input type="text" placeholder="Website" />
                    </div>
                    <div className="form-group col-lg-12 col-md-12 col-sm-12">
                      <textarea placeholder="Your Massage" />
                    </div>
                    <div className="form-group col-lg-12 col-md-12 col-sm-12">
                      <button className="theme-btn btn-style-one" type="button">
                        Send Request
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div
            className="image-column"
            style={{ backgroundImage: "url(/images/resource/image-44.jpg)" }}
          >
            <figure className="image-box">
              <img src="/images/resource/image-44.jpg" alt="" />
            </figure>
          </div>
        </div>
      </section>

      <section className="call-to-action-two">
        <div className="auto-container">
          <div className="outer-box clearfix">
            <div className="title-box">
              <h2>
                <span>Need</span> Advice <span>for your</span> business? Contact us
              </h2>
            </div>
            <div className="btn-box">
              <Link to="/contact" className="theme-btn btn-style-two">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section why-choose-us">
        <div className="auto-container">
          <SectionHeading eyebrow="Why Choose Us" title="Why Choose Us" align="center" />
          <div className="row">
            {whyChooseUs.map((item) => (
              <div className="col-lg-4 col-md-6 col-sm-12" key={item}>
                <div className="legacy-complementary">
                  <h3>{item}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
