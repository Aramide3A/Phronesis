import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LegacyServiceCard from "../components/LegacyServiceCard";
import SectionHeading from "../components/SectionHeading";
import { heroSlides, legacyServiceCards } from "../data/site";

const homeAboutText =
  "Phronesis West Africa Ltd is a multi-national company that provides Marine vessel and related supply and logistics services. Our specialty includes Shipping services, Marince vessel supply, Petroleum haulauge, Logistics , documentation and Vessel clearing services, in the oil and gas sector. Our team of professionals are highly knowledgeable and possess an invaluable experience which set us in a reliable position to deliver quality projects with competitive approach.";

export default function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slide = heroSlides[activeSlide];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <>
      <section className="home-main-slider">
        <div className="home-main-slide" style={{ backgroundImage: `url(${slide.image})` }}>
          <div className="home-main-overlay" />
          <div className="auto-container home-main-container">
            <div className="content-box">
              <h2>{slide.title}</h2>
              {slide.text ? <div className="text">{slide.text}</div> : null}
              <Link to={slide.href} className="theme-btn btn-style-one">
                Read More
              </Link>
            </div>
          </div>
        </div>
        <div className="home-slider-dots">
          {heroSlides.map((item, index) => (
            <button
              key={item.title}
              type="button"
              aria-label={`Show ${item.title}`}
              className={activeSlide === index ? "active" : ""}
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </div>
      </section>

      <section className="about-section style-two alternate home-about-section">
        <div className="auto-container">
          <div className="row">
            <div className="content-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <SectionHeading
                  eyebrow="About Phronesis West Africa"
                  title="We are leaders in the Industrial the industry"
                />
                <div className="text">{homeAboutText}</div>
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
                  <img src="/images/resource/image-7.jpg" alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="auto-container">
          <SectionHeading eyebrow="Our Services" title="What We Do?" align="center" />
          <div className="row">
            {legacyServiceCards.slice(0, 3).map((service) => (
              <LegacyServiceCard
                key={service.title}
                {...service}
                columnClass="col-lg-4 col-md-6 col-sm-12"
              />
            ))}
          </div>
          <div className="btn-box text-center">
            <Link className="theme-btn btn-style-one" to="/services">
              More Services
            </Link>
          </div>
        </div>
      </section>

      <section className="fluid-section-one">
        <div className="outer-container clearfix">
          <div
            className="image-column"
            style={{ backgroundImage: "url(/images/resource/image-44.jpg)" }}
          >
            <figure className="image-box">
              <img src="/images/resource/image-44.jpg" alt="" />
            </figure>
          </div>
          <div className="form-column">
            <div className="map-layer" />
            <div className="inner-column">
              <div className="sec-title light">
                <h2>Request More Information</h2>
              </div>
              <div className="contact-form">
                <form>
                  <div className="row">
                    <div className="form-group col-lg-6 col-md-6 col-sm-12">
                      <input type="text" name="username" placeholder="Your name" />
                    </div>
                    <div className="form-group col-lg-6 col-md-6 col-sm-12">
                      <input type="email" name="email" placeholder="Your email" />
                    </div>
                    <div className="form-group col-lg-6 col-md-6 col-sm-12">
                      <input type="text" name="phone" placeholder="Phone" />
                    </div>
                    <div className="form-group col-lg-6 col-md-6 col-sm-12">
                      <input type="text" name="sebsite" placeholder="Website" />
                    </div>
                    <div className="form-group col-lg-12 col-md-12 col-sm-12">
                      <textarea name="message" placeholder="Your Massage" />
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
        </div>
      </section>

      <section className="call-to-action-two">
        <div className="auto-container">
          <div className="outer-box clearfix">
            <div className="title-box">
              <h2>
                <span>OUR VISION</span> IS TO BECOME{" "}
                <span>“A GlOBAL CONGLOMERATE TRADING OUT OF AFRICA”</span>
              </h2>
            </div>
            <div className="btn-box">
              <Link to="/about" className="theme-btn btn-style-two">
                More about Us
              </Link>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
