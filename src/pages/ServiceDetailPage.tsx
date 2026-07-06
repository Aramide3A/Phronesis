import ContactPanel from "../components/ContactPanel";
import PageHero from "../components/PageHero";
import type { Service } from "../data/site";

type ServiceDetailPageProps = {
  service: Service;
};

export default function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  return (
    <>
      <PageHero
        title={service.title}
        subtitle="At Phronesis West Africa LTD we are committed to safe, reliable, and quality-driven service."
        image={service.heroImage}
      />

      <div className="service-detail-section">
        <div className="auto-container">
          <div className="row">
            <div className="content-side col-lg-8 col-md-12 col-sm-12">
              <div className="service-detail">
                <div className="image-box">
                  <div className="image">
                    <img src={service.image} alt="" />
                  </div>
                </div>

                <div className="content-box">
              <h2>{service.detailHeading}</h2>
                  {service.detailParagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  <h4>{service.listHeading}</h4>
                  <ul className="list-style-one">
                    {service.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="sidebar-side col-lg-4 col-md-12 col-sm-12">
              <ContactPanel />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
