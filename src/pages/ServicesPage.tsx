import { Link } from "react-router-dom";
import LegacyServiceCard from "../components/LegacyServiceCard";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import {
  complementaryServices,
  legacyServiceCards,
  originalCompanyProfile,
  services,
} from "../data/site";

export default function ServicesPage() {
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
                <SectionHeading eyebrow="About Phronesis West Africa" title="We are leaders in the Maritime industry" />
                <div className="text">
                  {originalCompanyProfile.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <div className="row clearfix">
                  {[
                    ["99%", "Quality Servie"],
                    ["100%", "HSE"],
                    ["99%", "Customer Satisfaction"],
                  ].map(([value, label]) => (
                    <div className="skill-block col-lg-4 col-md-4 col-sm-12" key={label}>
                      <div className="inner-box">
                        <div className="graph-outer react-graph">
                          <div className="inner-text count-box">{value}</div>
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

      <section className="services-section">
        <div className="auto-container">
          <SectionHeading eyebrow="Our Services" title="We offer the following services" align="center" />
          <div className="row">
            {legacyServiceCards.slice(0, 3).map((service) => (
              <LegacyServiceCard key={service.title} {...service} />
            ))}
            <LegacyServiceCard
              title={services[3].title.toUpperCase().replace("PRODUCTS", "PRODUCT")}
              image="/images/resource/service-77.jpg"
              href="/services/petroleum-products-haulage"
              text={services[3].summary}
            />
          </div>

          <div className="content-box legacy-complementary">
            <h3>Complementary Services</h3>
            <p>
              We offer expert professional advisory services to shipping and oil companies across
              the region, including information on bunker and marine lubricant products, product
              availability, bunker fuel price charts, lubricant price charts, contract options,
              marine fuel supply methods, and more.
            </p>
            <p>We also offer complementary products and services including but not limited to:</p>
            <ul className="list-style-one">
              {complementaryServices.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="call-to-action" style={{ backgroundImage: "url(/images/background/2.jpg)" }}>
        <div className="auto-container">
          <div className="content-box">
            <h2>
              We Provide You The Highest Quality Work <br />
              That Meets Your Expectation.
            </h2>
            <div className="link-box">
              <Link to="/contact" className="theme-btn btn-style-one">
                Request more Information
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
